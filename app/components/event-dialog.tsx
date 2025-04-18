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
import { createCalendarEvent } from "./calendar-event";
import { FaSquarePlus } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import moment from "moment";
import { useCalendarContext } from "./calendar-context";
import { DialogEvent, CalendarEventComponent } from "../types";

export function EventDialog({
  isOpen,
  onCancel,
  onClose,
  initialDialogEvent,
  isEditing = false,
}: {
  isOpen: boolean;
  onCancel: () => void;
  onClose: () => void;
  initialDialogEvent: DialogEvent;
  isEditing?: boolean;
}) {
  const { setEvents } = useCalendarContext();
  const [dialogEvent, setDialogEvent] =
    useState<DialogEvent>(initialDialogEvent);
  useEffect(() => setDialogEvent(initialDialogEvent), [initialDialogEvent]);
  const inputDateFormat = "YYYY-MM-DDTHH:mm:ss";

  const handleSubmit = (event: DialogEvent) => {
    if (isEditing) {
      setEvents((events) =>
        events.map((e) => {
          if (e.event.start === event.start && e.event.end === event.end) {
            return createCalendarEvent({
              start: event.start!,
              end: event.end!,
              title: event.title ?? "",
              body: event.body ?? "",
              links: event.links,
            });
          }
          return e;
        })
      );
    } else {
      setEvents((events) => [
        ...events,
        createCalendarEvent({
          start: event.start!,
          end: event.end!,
          title: event.title ?? "",
          body: event.body ?? "",
          links: event.links,
        }),
      ]);
    }
    onClose();
  };

  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Content maxWidth="600px">
        <Flex gap="3" direction="column">
          <Dialog.Title>
            {isEditing ? dialogEvent.title : "New Event"}
          </Dialog.Title>
          <Box>
            <Label.Root htmlFor="title">Title*</Label.Root>
            <TextField.Root
              id="title"
              size="3"
              value={dialogEvent.title ?? ""}
              onChange={(e) =>
                setDialogEvent({ ...dialogEvent, title: e.target.value })
              }
              style={{ height: "44px" }}
            />
          </Box>
          <Flex gap="3" justify="between">
            <Box>
              <Label.Root htmlFor="start">Start*</Label.Root>
              <TextField.Root
                id="start"
                type="datetime-local"
                value={moment(dialogEvent.start).format(inputDateFormat)}
                onChange={(e) =>
                  setDialogEvent({
                    ...dialogEvent,
                    start: new Date(e.target.value),
                  })
                }
                style={{ height: "44px" }}
              />
            </Box>
            <Box>
              <Label.Root htmlFor="end">End*</Label.Root>
              <TextField.Root
                id="end"
                type="datetime-local"
                value={moment(dialogEvent.end).format(inputDateFormat)}
                onChange={(e) =>
                  setDialogEvent({
                    ...dialogEvent,
                    end: new Date(e.target.value),
                  })
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
              value={dialogEvent.body ?? ""}
              onChange={(e) =>
                setDialogEvent({ ...dialogEvent, body: e.target.value })
              }
            />
          </Box>
          <Box>
            <Label.Root htmlFor="links">Links</Label.Root>
            <LinksTable
              dialogEvent={dialogEvent}
              setDialogEvent={setDialogEvent}
            />
          </Box>
          <Flex justify="end" gap="4" style={{ marginTop: "14px" }}>
            <Button
              disabled={
                !dialogEvent.title || !dialogEvent.start || !dialogEvent.end
              }
              onClick={() =>
                handleSubmit(dialogEvent)
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
  dialogEvent,
  setDialogEvent,
}: {
  dialogEvent: DialogEvent;
  setDialogEvent: Dispatch<SetStateAction<DialogEvent>>;
}) {
  const newLinkTextRef = useRef<HTMLInputElement>(null);
  const newLinkURLRef = useRef<HTMLInputElement>(null);

  function handleSubmit() {
    if (!newLinkTextRef.current || !newLinkURLRef.current) {
      return;
    }
    setDialogEvent({
      ...dialogEvent,
      links: [
        ...(dialogEvent.links ?? []),
        {
          text: newLinkTextRef.current.value,
          url: new URL(newLinkURLRef.current.value),
        },
      ],
    });
    newLinkTextRef.current.value = "";
    newLinkURLRef.current.value = "";
  }

  function removeLink(idx: number) {
    setDialogEvent({
      ...dialogEvent,
      links: dialogEvent.links?.filter((_, i) => i !== idx),
    });
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
        {dialogEvent.links?.map((link, idx) => (
          <Table.Row key={idx}>
            <Table.Cell>{link.text}</Table.Cell>
            <Table.Cell>{link.url.toString()}</Table.Cell>
            <Table.Cell>
              <IconButton onClick={() => removeLink(idx)}>
                <FaTrashAlt />
              </IconButton>
            </Table.Cell>
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
