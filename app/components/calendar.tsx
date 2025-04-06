"use client";

import { Calendar, momentLocalizer } from "react-big-calendar";
import withDragAndDrop, {
  withDragAndDropProps,
} from "react-big-calendar/lib/addons/dragAndDrop";
import moment from "moment";
import { Box } from "@radix-ui/themes";
import {
  CalendarContextProvider,
  useCalendarContext,
} from "./calendar-context";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

export const BikeCalendar = () => (
  <CalendarContextProvider>
    <BikeCalendarComponent />
  </CalendarContextProvider>
);

function BikeCalendarComponent() {
  const { events, setEvents, openEventDialog } = useCalendarContext();
  const onEventResize: withDragAndDropProps["onEventResize"] = (data) => {
    const { start, end } = data;

    setEvents((currentEvents) => {
      const firstEvent = {
        start: new Date(start),
        end: new Date(end),
      };
      return [...currentEvents, firstEvent];
    });
  };

  const onEventDrop: withDragAndDropProps["onEventDrop"] = (data) => {
    console.log(data);
  };

  return (
    <Box maxWidth="1250px" m="4" p="4" mx="auto">
      <DnDCalendar
        localizer={localizer}
        events={events}
        onEventDrop={onEventDrop}
        onEventResize={onEventResize}
        resizable
        selectable
        onSelectSlot={openEventDialog}
        style={{ height: "80vh" }}
      />
    </Box>
  );
}
