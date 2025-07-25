import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-http";
import { type NextRequest, NextResponse } from "next/server";
import { eventsTable } from "@/app/db/schema";
import type { EventData } from "@/app/types";

const db = drizzle(process.env.DATABASE_URL!);

export async function GET() {
  const events = await db.select().from(eventsTable);
  return NextResponse.json(events, { status: 200 });
}

export async function POST(request: NextRequest) {
  const event = (await request.json()) as EventData;
  if (!event) {
    return NextResponse.json({}, { status: 200 });
  }

  // Don't include id in insert - it's auto-generated
  const eventObject = {
    title: event.title,
    body: event.body,
    start: new Date(event.start),
    end: new Date(event.end),
    links: JSON.stringify(event.links),
  };

  try {
    const result = await db
      .insert(eventsTable)
      .values(eventObject)
      .returning({ insertedId: eventsTable.id });
    return NextResponse.json({ id: result[0].insertedId }, { status: 200 });
  } catch (error) {
    console.error("Error inserting event:", error);
    return NextResponse.json(
      { message: "Error inserting event" },
      { status: 500 },
    );
  }
}

export async function PATCH(request: NextRequest) {
	const event = (await request.json()) as EventData;
	if (!event) {
		return NextResponse.json(
			{ message: "No events provided" },
			{ status: 500 },
		);
	}

	const eventObject = {
		title: event.title,
		body: event.body,
		start: new Date(event.start),
		end: new Date(event.end),
		links: JSON.stringify(event.links),
	};

	try {
		const result = await db
			.update(eventsTable)
			.set(eventObject)
			.where(eq(eventsTable.id, event.id))
			.returning({ updatedId: eventsTable.id });
		return NextResponse.json({ id: result[0].updatedId }, { status: 200 });
	} catch (error) {
		console.error("Error updating event:", error);
		return NextResponse.json(
			{ message: "Error updating event" },
			{ status: 500 },
		);
	}
}

export async function DELETE(request: NextRequest) {
	const event = (await request.json()) as EventData;
	console.log({ request, event });
	if (!event) {
		return NextResponse.json(
			{ message: "No events provided" },
			{ status: 500 },
		);
	}

	try {
		const result = await db
			.delete(eventsTable)
			.where(eq(eventsTable.id, event.id))
			.returning({ deletedId: eventsTable.id });
		return NextResponse.json({ id: result[0].deletedId }, { status: 200 });
	} catch (error) {
		console.error("Error deleting event:", error);
		return NextResponse.json(
			{ message: "Error deleting event" },
			{ status: 500 },
		);
	}
}
