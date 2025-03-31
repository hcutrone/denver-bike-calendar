"use client";

import { Button, Dialog, Flex } from "@radix-ui/themes";
import { Label } from "radix-ui";
import { useEffect, useState } from "react";
import { Event } from "react-big-calendar";

export function NewEventDialog({
  isOpen,
  onCancel,
  onSubmit,
  start,
  end,
}: {
  isOpen: boolean;
  onCancel: () => void;
  onSubmit: (newEvent: Event) => void;
  start?: Date;
  end?: Date;
}) {
  const [newEvent, setNewEvent] = useState<Event>({ start, end });
  useEffect(() => setNewEvent({ start, end }), [start, end]);
  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Content>
        <Flex gap="4" direction="column">
          <Dialog.Title>New Event</Dialog.Title>
          <Flex justify="between" direction="row">
            <Label.Root htmlFor="title">Title</Label.Root>
            <input
              id="title"
              value={newEvent?.title?.toString() ?? ""}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
            />
          </Flex>
          <Flex justify="between" direction="row">
            <Label.Root htmlFor="start">Start</Label.Root>
            <input
              id="start"
              type="datetime-local"
              value={newEvent.start?.toISOString().split(".")[0]}
              onChange={(e) =>
                setNewEvent({
                  ...newEvent,
                  start: new Date(e.target.value),
                })
              }
            />
          </Flex>
          <Flex justify="between" direction="row">
            <Label.Root htmlFor="end">End</Label.Root>
            <input
              id="end"
              type="datetime-local"
              value={newEvent.end?.toISOString().split(".")[0]}
              onChange={(e) =>
                setNewEvent({ ...newEvent, end: new Date(e.target.value) })
              }
            />
          </Flex>
          <Flex justify="end" gap="4">
            <Button onClick={() => onSubmit(newEvent)}>Save</Button>
            <Button onClick={onCancel}>Cancel</Button>
          </Flex>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
