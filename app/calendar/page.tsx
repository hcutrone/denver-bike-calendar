"use server";

import { BikeCalendar } from "../components";
import { CalendarContextProvider } from "../components/calendar-context";
import { selectEventsFromDB } from "../db";

export default async function Home() {
  const events = (await selectEventsFromDB())?.map((dbEvent) => ({
    ...dbEvent,
    start: new Date(dbEvent.start),
    end: new Date(dbEvent.end),
  }));
  return (
    <CalendarContextProvider dbEvents={events ?? []}>
      <BikeCalendar />
    </CalendarContextProvider>
  );
}
