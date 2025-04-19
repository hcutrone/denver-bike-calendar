import { Event } from "react-big-calendar";

export type DialogEvent = Partial<EventData>;

export type EventData = {
  id: number;
  start: Date;
  end: Date;
  title: string;
  body: string;
  links?: { text: string; url: URL }[];
};

export type CalendarEvent = {
  id: number;
  event: Event;
};
