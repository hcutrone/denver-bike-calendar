"use server";

import { BikeCalendar } from "./components";
import { CalendarContextProvider } from "./components/calendar-context";
import { selectEvents } from "./helpers/events";

export default async function Home() {
  const events = await selectEvents();
  return (
    <CalendarContextProvider dbEvents={events ?? []}>
      <BikeCalendar />
    </CalendarContextProvider>
  );
}
