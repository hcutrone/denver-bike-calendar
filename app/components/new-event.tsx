"use client";

import {
  Box,
  Button,
  Dialog,
  Flex,
  IconButton,
  Table,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import { Label } from "radix-ui";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { Event } from "react-big-calendar";
import { createEvent } from "./calendar-event";
import { FaSquarePlus } from "react-icons/fa6";

export type NewEvent = Omit<Event, "title"> & {
  title?: string;
  body?: string;
  links?: { text: string; url: URL }[];
};

export function NewEventDialog({
  isOpen,
  onCancel,
  onClose,
  setEvents,
  initialEvent,
}: {
  isOpen: boolean;
  onCancel: () => void;
  onClose: () => void;
  setEvents: Dispatch<SetStateAction<Event[]>>;
  initialEvent: NewEvent;
}) {
  const [newEvent, setNewEvent] = useState<NewEvent>(initialEvent ?? {});
  useEffect(() => setNewEvent(initialEvent ?? {}), [initialEvent]);

  const handleSubmit = (event: NewEvent) => {
    setEvents((events) => [
      ...events,
      createEvent({
        start: event.start!,
        end: event.end!,
        title: event.title ?? "",
        body: event.body ?? "",
        links: event.links,
      }),
    ]);
    onClose();
  };

  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Content maxWidth="600px">
        <Flex gap="3" direction="column">
          <Dialog.Title>New Event</Dialog.Title>
          <Box>
            <Label.Root htmlFor="title">Title</Label.Root>
            <TextField.Root
              id="title"
              size="3"
              value={newEvent?.title?.toString() ?? ""}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
              style={{ height: "44px" }}
            />
          </Box>
          <Flex gap="3" justify="between">
            <Box>
              <Label.Root htmlFor="start">Start</Label.Root>
              <TextField.Root
                id="start"
                type="datetime-local"
                value={newEvent.start?.toISOString().split(".")[0]}
                onChange={(e) =>
                  setNewEvent({
                    ...newEvent,
                    start: new Date(e.target.value),
                  })
                }
                style={{ height: "44px" }}
              />
            </Box>
            <Box>
              <Label.Root htmlFor="end">End</Label.Root>
              <TextField.Root
                id="end"
                type="datetime-local"
                value={newEvent.end?.toISOString().split(".")[0]}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, end: new Date(e.target.value) })
                }
                style={{ height: "44px" }}
              />
            </Box>
          </Flex>
          <Box>
            <Label.Root htmlFor="body">Description</Label.Root>
            <TextArea
              size="3"
              resize="vertical"
              value={newEvent.body ?? ""}
              onChange={(e) =>
                setNewEvent({ ...newEvent, body: e.target.value })
              }
            />
          </Box>
          <Box>
            <Label.Root htmlFor="links">Links</Label.Root>
            <LinksTable newEvent={newEvent} setNewEvent={setNewEvent} />
          </Box>
          <Flex justify="end" gap="4" style={{ marginTop: "14px" }}>
            <Button
              disabled={!newEvent.start || !newEvent.end}
              onClick={() => handleSubmit(newEvent)}
            >
              Save
            </Button>
            <Button onClick={onCancel}>Cancel</Button>
          </Flex>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}

function LinksTable({
  newEvent,
  setNewEvent,
}: {
  newEvent: NewEvent;
  setNewEvent: Dispatch<SetStateAction<NewEvent>>;
}) {
  const newLinkTextRef = useRef<HTMLInputElement>(null);
  const newLinkURLRef = useRef<HTMLInputElement>(null);
  function handleSubmit() {
    if (!newLinkTextRef.current || !newLinkURLRef.current) {
      return;
    }
    setNewEvent({
      ...newEvent,
      links: [
        ...(newEvent?.links ?? []),
        {
          text: newLinkTextRef.current.value,
          url: new URL(newLinkURLRef.current.value),
        },
      ],
    });
    newLinkTextRef.current.value = "";
    newLinkURLRef.current.value = "";
  }

  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Display Text</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>URL</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell />
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {newEvent.links?.map((link, idx) => (
          <Table.Row key={idx}>
            <Table.Cell>{link.text}</Table.Cell>
            <Table.Cell>{link.url.toString()}</Table.Cell>
          </Table.Row>
        ))}
        <Table.Row>
          <Table.Cell>
            <TextField.Root ref={newLinkTextRef} />
          </Table.Cell>
          <Table.Cell>
            <TextField.Root ref={newLinkURLRef} />
          </Table.Cell>
          <Table.Cell>
            <IconButton onClick={handleSubmit}>
              <FaSquarePlus />
            </IconButton>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
}
