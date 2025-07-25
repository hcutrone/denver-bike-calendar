"use client";

import {
	createContext,
	type Dispatch,
	type PropsWithChildren,
	type SetStateAction,
	useContext,
	useState,
} from "react";
import db from "../helpers/events";
import type { CalendarEvent, DialogEvent, EventData } from "../types";
import { createCalendarEvent } from "./calendar-event";
import { EventDialog } from "./event-dialog";

type CalendarContextType = {
	events: CalendarEvent[];
	setEvents: Dispatch<SetStateAction<CalendarEvent[]>>;
	addEvent: (event: EventData) => Promise<number | null>;
	updateEvent: (event: EventData) => Promise<number | null>;
	deleteEvent: (event: EventData) => Promise<number | null>;
	openEventDialog: (data: DialogEvent) => void;
};

const CalendarContext = createContext<CalendarContextType>(
	{} as CalendarContextType,
);
export const useCalendarContext = () => useContext(CalendarContext);

export function CalendarContextProvider({
	dbEvents,
	children,
}: PropsWithChildren<{ dbEvents: EventData[] }>) {
	const [events, setEvents] = useState<CalendarEvent[]>(
		dbEvents.map((dbEvent) => createCalendarEvent(dbEvent)),
	);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [dialogEvent, setDialogEvent] = useState<DialogEvent>({});

	const openEventDialog = (data: DialogEvent) => {
		setDialogEvent(data);
		setIsDialogOpen(true);
	};

	async function addEvent(newEvent: EventData) {
		const newEventID = await db.insertEvent(newEvent);
		if (!newEventID) {
			return null;
		}
		setEvents((events) => [
			...events,
			createCalendarEvent({ ...newEvent, id: newEventID }),
		]);
		return newEventID;
	}

	async function updateEvent(updatedEvent: EventData) {
		const updatedEventID = await db.updateEvent(updatedEvent);
		if (!updatedEventID) {
			return null;
		}
		setEvents(
			events.map((event) =>
				event.id === updatedEventID ? createCalendarEvent(updatedEvent) : event,
			),
		);
		return updatedEventID;
	}

	async function deleteEvent(eventToDelete: EventData) {
		const deletedEventID = await db.deleteEvent(eventToDelete);
		if (!deletedEventID) {
			return null;
		}
		setEvents(events.filter((event) => event.id !== deletedEventID));
		return deletedEventID;
	}

	const calendarContextValue = {
		events,
		setEvents,
		addEvent,
		updateEvent,
		deleteEvent,
		openEventDialog,
	};

	return (
		<CalendarContext.Provider value={calendarContextValue}>
			{children}
			<EventDialog
				isOpen={isDialogOpen}
				onCancel={() => setIsDialogOpen(false)}
				onClose={() => setIsDialogOpen(false)}
				initialDialogEvent={dialogEvent}
				isEditing={!!dialogEvent.title}
			/>
		</CalendarContext.Provider>
	);
}
