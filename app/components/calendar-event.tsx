import { Flex, IconButton, Link, Popover, Text } from "@radix-ui/themes";
import { Event } from "react-big-calendar";
import { useCalendarContext } from "./calendar-context";
import { FaPencilAlt } from "react-icons/fa";

const DAY_IN_MILLISECONDS = 86400000;

export function createEvent({
  title,
  body,
  links,
  start,
  end,
}: {
  title: string;
  body: string;
  links?: { text: string; url: URL }[];
  start: Date;
  end: Date;
}): Event {
  return {
    title: (
      <EventComponent
        start={start}
        end={end}
        title={title}
        body={body}
        links={links}
      />
    ),
    start,
    end,
  };
}

export type CalendarEvent = {
  start: Date;
  end: Date;
  title: string;
  body: string;
  links?: { text: string; url: URL }[];
};

const EventComponent = (event: CalendarEvent) => {
  const { openEventDialog } = useCalendarContext();
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
      <Popover.Content>
        <Flex direction="column" gap="2">
          <Flex justify="between" align="center">
            <Text>{dateOrTimeRange}</Text>
            <IconButton onClick={() => openEventDialog(event)}>
              <FaPencilAlt />
            </IconButton>
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
