"use server";

import { BikeCalendar } from "./components";
import { CalendarContextProvider } from "./components/calendar-context";
import { DBEvent, EventData } from "./types";

export default async function Home() {
  const events = await fetch("http://localhost:3000/api/events", {
    method: "GET",
  });
  const formattedEvents: EventData[] = JSON.parse(
    (await events.json()).body
  ).map((event: DBEvent) => {
    return {
      ...event,
      start_time: new Date(event.start_time),
      end_time: new Date(event.end_time),
    };
  });
  return (
    <CalendarContextProvider dbEvents={formattedEvents}>
      <BikeCalendar />
    </CalendarContextProvider>
  );
}
