import { Flex, Link, Popover, Text } from "@radix-ui/themes";
import { ReactNode } from "react";
import { Event } from "react-big-calendar";

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
  links?: { text: string; url: string }[];
  start: Date;
  end: Date;
}): Event {
  const footerLinks = links?.map((link, idx) => (
    <Link key={idx} href={link.url}>
      {link.text}
    </Link>
  ));
  return {
    title: (
      <EventComponent
        start={start}
        end={end}
        title={title}
        body={body}
        footerLinks={footerLinks}
      />
    ),
    start,
    end,
  };
}

const EventComponent = ({
  start,
  end,
  title,
  body,
  footerLinks,
}: {
  start: Date;
  end: Date;
  title: string;
  body: string;
  footerLinks?: ReactNode;
}) => {
  const isAllDay =
    (end.getTime() - start.getTime()) % DAY_IN_MILLISECONDS === 0;
  const dateOrTimeRange = isAllDay
    ? `${start.toDateString()} - ${end.toDateString()}`
    : `${start.toLocaleTimeString()} - ${end.toLocaleTimeString()}`;
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Text>{title}</Text>
      </Popover.Trigger>
      <Popover.Content>
        <Flex direction="column" gap="2">
          <Text>{dateOrTimeRange}</Text>
          <Text>{body}</Text>
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
