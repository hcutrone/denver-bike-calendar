"use client";

import { Calendar, momentLocalizer, Event } from "react-big-calendar";
import withDragAndDrop, {
  withDragAndDropProps,
} from "react-big-calendar/lib/addons/dragAndDrop";
import moment from "moment";
import { useState } from "react";
import { Box } from "@radix-ui/themes";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

export function BikeCalendar() {
  const [events, setEvents] = useState<Event[]>([
    {
      title: "Bike Fest!",
      start: new Date(1745701200000),
      end: new Date(1745722800000),
    },
  ]);

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

  function handleSelectSlot({ start, end, slots }) {
    console.log({ start, end, slots });
  }

  return (
    <Box p="9" m="9">
      <DnDCalendar
        localizer={localizer}
        events={events}
        onEventDrop={onEventDrop}
        onEventResize={onEventResize}
        resizable
        selectable
        onSelectSlot={handleSelectSlot}
        style={{ height: "100vh" }}
      />
    </Box>
  );
}
