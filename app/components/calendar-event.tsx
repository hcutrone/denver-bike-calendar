import { Flex, IconButton, Link, Popover, Text } from "@radix-ui/themes";
import { useCalendarContext } from "./calendar-context";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { CalendarEvent, CalendarEventComponent } from "../types";

const DAY_IN_MILLISECONDS = 86400000;
let numEvents = 0;

export function createCalendarEvent(
  newEvent: Omit<CalendarEventComponent, "id">
): CalendarEvent {
  const eventId = numEvents++;
  return {
    id: eventId,
    event: {
      title: <EventComponent id={eventId} {...newEvent} />,
      start: newEvent.start,
      end: newEvent.end,
    },
  };
}

export function updateCalendarEvent(
  event: CalendarEventComponent
): CalendarEvent {
  return {
    id: event.id,
    event: {
      title: <EventComponent {...event} />,
      start: event.start,
      end: event.end,
    },
  };
}

const EventComponent = (event: CalendarEventComponent) => {
  const { openEventDialog, deleteEvent } = useCalendarContext();
  const dateOrTimeRange = getEventRangeString(event.start, event.end);
  const footerLinks = event.links?.map((link, idx) => (
    <Link key={idx} href={link.url.toString()}>
      {link.text}
    </Link>
  ));

  return (
    <Popover.Root>
      <Popover.Trigger>
        <Flex>
          <Text>{event.title}</Text>
        </Flex>
      </Popover.Trigger>
      <Popover.Content
        className="eventPopoverContent"
        maxWidth={"min(480px, 95vw)"}
      >
        <Flex direction="column" gap="2">
          <Flex justify="between" align="center" gap="2">
            <Text>{dateOrTimeRange}</Text>
            <Flex gap="2">
              <IconButton onClick={() => openEventDialog(event)}>
                <FaPencilAlt />
              </IconButton>
              <IconButton onClick={() => deleteEvent(event)}>
                <FaTrashAlt />
              </IconButton>
            </Flex>
          </Flex>
          <Text>{event.body}</Text>
          {footerLinks && (
            <Flex gap="4" justify="end">
              {footerLinks}
            </Flex>
          )}
        </Flex>
      </Popover.Content>
    </Popover.Root>
  );
};

function getEventRangeString(start: Date, end: Date): string {
  const eventTimeInMs = end.getTime() - start.getTime();
  if (eventTimeInMs === DAY_IN_MILLISECONDS) {
    return start.toDateString();
  }
  const isAllDay = eventTimeInMs % DAY_IN_MILLISECONDS === 0;
  return isAllDay
    ? `${start.toDateString()} - ${end.toDateString()}`
    : `${start.toLocaleTimeString()} - ${end.toLocaleTimeString()}`;
}
