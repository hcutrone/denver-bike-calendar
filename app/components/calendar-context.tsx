import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { EventDialog } from "./event-dialog";
import { createCalendarEvent } from "./calendar-event";
import { DialogEvent, CalendarEvent } from "../types";

type CalendarContextType = {
  events: CalendarEvent[];
  setEvents: Dispatch<SetStateAction<CalendarEvent[]>>;
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

  const calendarContextValue = {
    events,
    setEvents,
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
