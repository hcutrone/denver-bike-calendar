import { type NextRequest, NextResponse } from "next/server";
import type { EventData } from "@/app/types";
import { deleteEventFromDB, insertEventToDB, selectEventsFromDB, updateEventInDB } from "@/app/db";

export async function GET() {
  const events = await selectEventsFromDB();
  return NextResponse.json(events, { status: 200 });
}

export async function POST(request: NextRequest) {
  const event = (await request.json()) as EventData;
  if (!event) {
    return NextResponse.json({}, { status: 200 });
  }

	const eventData = {
		...event,
		start: new Date(event.start),
		end: new Date(event.end),
	} as EventData;

  try {
    const insertedId = await insertEventToDB(eventData);
    return NextResponse.json({ id: insertedId }, { status: 200 });
  } catch (error) {
    console.error("Error inserting event:", error);
    return NextResponse.json(
      { message: "Error inserting event" },
      { status: 500 },
    );
  }
}

export async function PATCH(request: NextRequest) {
	const event = await request.json();
	if (!event) {
		return NextResponse.json(
			{ message: "No events provided" },
			{ status: 500 },
		);
	}

	const eventData = {
		...event,
		start: new Date(event.start),
		end: new Date(event.end),
	} as EventData;

	try {
		const updatedId = await updateEventInDB(eventData);
		return NextResponse.json({ id: updatedId }, { status: 200 });
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
	if (!event) {
		return NextResponse.json(
			{ message: "No events provided" },
			{ status: 500 },
		);
	}

	try {
		const deletedId = await deleteEventFromDB(event);
		return NextResponse.json({ id: deletedId }, { status: 200 });
	} catch (error) {
		console.error("Error deleting event:", error);
		return NextResponse.json(
			{ message: "Error deleting event" },
			{ status: 500 },
		);
	}
}
