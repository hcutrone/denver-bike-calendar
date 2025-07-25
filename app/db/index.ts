import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-http";
import { unstable_noStore as noStore } from "next/cache";
import type { DBEvent, EventData } from "../types";
import { eventsTable } from "./schema";

export const db = drizzle(process.env.DATABASE_URL!);

export async function selectEventsFromDB(): Promise<DBEvent[] | null> {
	// Opt out of caching for this function
	noStore();
	
	try {
		return (await db.select().from(eventsTable)) as DBEvent[];
	} catch (error) {
		console.error("Error selecting events from DB:", error);
		return null;
	}
}

export async function insertEventToDB(
	event: EventData,
): Promise<number | null> {
	try {
		const eventObject = {
			...event,
			links: JSON.stringify(event.links),
		};
		const result = await db
			.insert(eventsTable)
			.values(eventObject)
			.returning({ insertedId: eventsTable.id });

		return result[0].insertedId;
	} catch (error) {
		console.error("Error inserting event to DB:", error);
		return null;
	}
}

export async function updateEventInDB(
	event: EventData,
): Promise<number | null> {
	try {
		const eventObject = {
			...event,
			links: JSON.stringify(event.links),
			id: undefined,
		};
		const result = await db
			.update(eventsTable)
			.set(eventObject)
			.where(eq(eventsTable.id, event.id))
			.returning({ updatedId: eventsTable.id });

		return result[0].updatedId;
	} catch (error) {
		console.error("Error updating event in DB:", error);
		return null;
	}
}

export async function deleteEventFromDB(
	event: EventData,
): Promise<number | null> {
	try {
		const result = await db
			.delete(eventsTable)
			.where(eq(eventsTable.id, event.id))
			.returning({ deletedId: eventsTable.id });
		return result[0].deletedId;
	} catch (error) {
		console.error("Error deleting event from DB:", error);
		return null;
	}
}
