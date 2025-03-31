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

type NewEvent = Omit<Event, "title"> & {
  title?: string;
  body?: string;
  links?: { text: string; url: URL }[];
};

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
  const [newEvent, setNewEvent] = useState<NewEvent>({ start, end });
  useEffect(() => setNewEvent({ start, end }), [start, end]);
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
              onClick={() =>
                onSubmit(
                  // we disable the button if there's no start/end, so we can force these
                  createEvent({
                    start: newEvent.start!,
                    end: newEvent.end!,
                    title: newEvent.title ?? "",
                    body: newEvent.body ?? "",
                    links: newEvent.links,
                  })
                )
              }
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
            <IconButton onClick={handleSubmit}>+</IconButton>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
}
