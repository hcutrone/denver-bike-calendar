import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Event } from "react-big-calendar";
import { type NewEvent, NewEventDialog } from "./new-event";
import { createEvent } from "./calendar-event";

type CalendarContextType = {
  events: Event[];
  setEvents: Dispatch<SetStateAction<Event[]>>;
  openEventDialog: (data: Event) => void;
};

const CalendarContext = createContext<CalendarContextType>(
  {} as CalendarContextType
);
export const useCalendarContext = () => useContext(CalendarContext);

export function CalendarContextProvider({ children }: PropsWithChildren) {
  const [events, setEvents] = useState<Event[]>([
    createEvent({
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
  const [initialEvent, setInitialEvent] = useState<NewEvent>({});

  const openEventDialog = (data: Event) => {
    setInitialEvent(data as NewEvent);
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
      <NewEventDialog
        isOpen={isDialogOpen}
        onCancel={() => setIsDialogOpen(false)}
        onClose={() => setIsDialogOpen(false)}
        setEvents={setEvents}
        initialEvent={initialEvent}
        isEditing={!!initialEvent.title}
      />
    </CalendarContext.Provider>
  );
}
