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
  const { events, openEventDialog } = useCalendarContext();

  const onEventResize: withDragAndDropProps["onEventResize"] = (data) => {
    console.log(data);
  };

  const onEventDrop: withDragAndDropProps["onEventDrop"] = (data) => {
    console.log(data);
  };

  return (
    <Box maxWidth="1250px" m="4" p="4" mx="auto">
      <DnDCalendar
        localizer={localizer}
        events={events.map((event) => event.event)}
        onEventDrop={onEventDrop}
        onEventResize={onEventResize}
        resizable
        selectable
        onSelectSlot={(event) => {
          if (
            document.getElementsByClassName("eventPopoverContent").length > 0
          ) {
            return;
          }
          openEventDialog(event);
        }}
        style={{ height: "80vh" }}
      />
    </Box>
  );
}
