import { NextRequest, NextResponse } from "next/server";
import { drizzle } from "drizzle-orm/neon-http";
import { EventData } from "@/app/types";
import { eventsTable } from "@/app/db/schema";
import { eq } from "drizzle-orm";

const db = drizzle(process.env.DATABASE_URL!);

export async function GET() {
  const events = await db.select().from(eventsTable);
  return NextResponse.json({ body: JSON.stringify(events) }, { status: 200 });
}

export async function POST(request: NextRequest) {
  const event = (await request.json()) as EventData;
  if (!event) {
    return NextResponse.json({}, { status: 200 });
  }

  const eventObject = {
    id: event.id,
    title: event.title,
    body: event.body,
    start: event.start_time,
    end: event.end_time,
    links: JSON.stringify(event.links),
  };

  const id = await db
    .insert(eventsTable)
    .values(eventObject as typeof eventsTable.$inferInsert)
    .returning({ insertedId: eventsTable.id });
  return NextResponse.json({ id: JSON.stringify(id) }, { status: 200 });
}

export async function PATCH(request: NextRequest) {
  const event = (await request.json()) as EventData;
  if (!event) {
    return NextResponse.json(
      { message: "No events provided" },
      { status: 500 }
    );
  }

  const eventObject = {
    id: event.id,
    title: event.title,
    body: event.body,
    start: event.start_time,
    end: event.end_time,
    links: JSON.stringify(event.links),
  };
  const id = await db
    .update(eventsTable)
    .set(eventObject as typeof eventsTable.$inferInsert)
    .where(eq(eventsTable.id, event.id))
    .returning({ insertedId: eventsTable.id });
  return NextResponse.json({ id: JSON.stringify(id) }, { status: 200 });
}

export async function DELETE(request: NextRequest) {
  const event = (await request.json()) as EventData;
  if (!event) {
    return NextResponse.json(
      { message: "No events provided" },
      { status: 500 }
    );
  }
  const id = await db
    .delete(eventsTable)
    .where(eq(eventsTable.id, event.id))
    .returning({ insertedId: eventsTable.id });
  return NextResponse.json({ id: JSON.stringify(id) }, { status: 200 });
}
