import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { EventDialog } from "./event-dialog";
import { createCalendarEvent, updateCalendarEvent } from "./calendar-event";
import { DialogEvent, CalendarEvent, EventData } from "../types";

type CalendarContextType = {
  events: CalendarEvent[];
  setEvents: Dispatch<SetStateAction<CalendarEvent[]>>;
  addEvent: (event: EventData) => void;
  updateEvent: (event: EventData) => void;
  deleteEvent: (event: EventData) => void;
  openEventDialog: (data: DialogEvent) => void;
};

const CalendarContext = createContext<CalendarContextType>(
  {} as CalendarContextType
);
export const useCalendarContext = () => useContext(CalendarContext);

export function CalendarContextProvider({
  dbEvents,
  children,
}: PropsWithChildren<{ dbEvents: EventData[] }>) {
  const [events, setEvents] = useState<CalendarEvent[]>(
    dbEvents.map((dbEvent) => createCalendarEvent(dbEvent))
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogEvent, setDialogEvent] = useState<DialogEvent>({});

  const openEventDialog = (data: DialogEvent) => {
    setDialogEvent(data);
    setIsDialogOpen(true);
  };

  function addEvent(newEvent: EventData) {
    setEvents((events) => [...events, createCalendarEvent(newEvent)]);
  }

  function updateEvent(updatedEvent: EventData) {
    setEvents(
      events.map((event) =>
        event.id === updatedEvent.id ? updateCalendarEvent(updatedEvent) : event
      )
    );
  }

  function deleteEvent(eventToDelete: EventData) {
    setEvents(events.filter((event) => event.id !== eventToDelete.id));
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
