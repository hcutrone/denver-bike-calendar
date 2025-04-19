"use server";

import { BikeCalendar } from "./components";
import { EventData } from "./types";

export default async function Home() {
  const events = await fetchEvents();
  return <BikeCalendar events={events} />;
}

async function fetchEvents(): Promise<EventData[]> {
  return [
    {
      id: 0,
      title: "Bike Fest!",
      body: "The ultimate celebration of Denver's bicycle community. Join us at the\
            City Park Pavilion on Saturday, April 26th, for prizes, live music, food,\
            and booths from local bicycle communities",
      links: [
        {
          text: "Bike Fest Website",
          url: new URL("https://www.zcycledenver.com/denverbikefest"),
        },
      ],
      start: new Date(1745701200000),
      end: new Date(1745722800000),
    },
  ];
}
