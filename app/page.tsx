"use server";

import { neon } from "@neondatabase/serverless";
import { BikeCalendar } from "./components";
import { EventData } from "./types";
import { unstable_cache } from "next/cache";

export default async function Home() {
  const events = await fetchEvents();
  return <BikeCalendar events={events} />;
}

const fetchEvents = unstable_cache(
  async function fetchEvents(): Promise<EventData[]> {
    // fetch current month, as well as next and previous months
    const sql = neon(`${process.env.DATABASE_URL}`);
    return (await sql.query("SELECT * FROM events")) as EventData[];
  },
  [],
  { revalidate: 60 * 5 }
);
