"use client";

import { Calendar, momentLocalizer, Event } from "react-big-calendar";
import withDragAndDrop, {
  withDragAndDropProps,
} from "react-big-calendar/lib/addons/dragAndDrop";
import moment from "moment";
import { useState } from "react";
import { Box } from "@radix-ui/themes";
import { NewEventDialog } from "./new-event";
import { createEvent } from "./calendar-event";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

export function BikeCalendar() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<Event>({});
  const [events, setEvents] = useState<Event[]>([
    createEvent({
      title: "Bike Fest!",
      body: "The ultimate celebration of Denver's bicycle community. Join us at the\
        City Park Pavilion on Saturday, April 26th, for prizes, live music, food,\
        and booths from local bicycle communities",
      links: [
        {
          text: "Bike Fest Website",
          url: "https://www.zcycledenver.com/denverbikefest",
        },
      ],
      start: new Date(1745701200000),
      end: new Date(1745722800000),
    }),
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

  function handleSelectSlot({ start, end }: { start: Date; end: Date }) {
    setIsDialogOpen(true);
    setSelectedSlot({ start, end });
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
      <NewEventDialog
        isOpen={isDialogOpen}
        onCancel={() => setIsDialogOpen(false)}
        onSubmit={(event) => {
          setEvents((events) => [...events, event]);
          setIsDialogOpen(false);
        }}
        start={selectedSlot?.start}
        end={selectedSlot?.end}
      />
    </Box>
  );
}
