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
import { DialogEvent, CalendarEvent, CalendarEventComponent } from "../types";

type CalendarContextType = {
  events: CalendarEvent[];
  setEvents: Dispatch<SetStateAction<CalendarEvent[]>>;
  addEvent: (event: CalendarEventComponent) => void;
  updateEvent: (event: CalendarEventComponent) => void;
  deleteEvent: (event: CalendarEventComponent) => void;
  openEventDialog: (data: DialogEvent) => void;
};

const CalendarContext = createContext<CalendarContextType>(
  {} as CalendarContextType
);
export const useCalendarContext = () => useContext(CalendarContext);

export function CalendarContextProvider({ children }: PropsWithChildren) {
  const [events, setEvents] = useState<CalendarEvent[]>([
    createCalendarEvent({
      title: "Bike Fest!",
      body: "The ultimate celebration of Denver's bicycle community. Join us at the\
          City Park Pavilion on Saturday, April 26th, for prizes, live music, food,\
          and booths from local bicycle communities",
      links: [
        {
          text: "Bike Fest Website",
          url: new URL("https://www.zcycledenver.com/denverbikefest"),
        },
      ],
      start: new Date(1745701200000),
      end: new Date(1745722800000),
    }),
  ]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogEvent, setDialogEvent] = useState<DialogEvent>({});

  const openEventDialog = (data: DialogEvent) => {
    setDialogEvent(data);
    setIsDialogOpen(true);
  };

  function addEvent(newEvent: CalendarEventComponent) {
    setEvents((events) => [
      ...events,
      createCalendarEvent({
        start: newEvent.start,
        end: newEvent.end,
        title: newEvent.title,
        body: newEvent.body,
        links: newEvent.links,
      }),
    ]);
  }

  function updateEvent(updatedEvent: CalendarEventComponent) {
    setEvents(
      events.map((event) =>
        event.id === updatedEvent.id ? updateCalendarEvent(updatedEvent) : event
      )
    );
  }

  function deleteEvent(eventToDelete: CalendarEventComponent) {
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
