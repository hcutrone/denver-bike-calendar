import { DBEvent, EventData } from "../types";

export async function selectEvents(): Promise<EventData[] | null> {
  const response = await fetch(`${process.env.API_DOMAIN}/api/events`, {
    method: "GET",
  });
  const eventsJson = await getResponseJson(response);
  if (!eventsJson) {
    return null;
  }

  return (JSON.parse(eventsJson.body) as DBEvent[]).map((eventJson) => ({
    ...eventJson,
    start_time: new Date(eventJson.start_time),
    end_time: new Date(eventJson.end_time),
  }));
}

export async function insertEvent(event: EventData): Promise<number | null> {
  const response = await fetch(`/api/events`, {
    method: "POST",
    body: JSON.stringify(event),
  });
  const responseJson = await getResponseJson(response);

  console.log({ response, responseJson });
  return JSON.parse(responseJson?.id);
}

export async function updateEvent(event: EventData): Promise<number | null> {
  const response = await fetch(`${process.env.API_DOMAIN}/api/events`, {
    method: "PATCH",
    body: JSON.stringify(event),
  });
  const responseJson = await getResponseJson(response);

  return JSON.parse(responseJson?.id);
}

export async function deleteEvent(event: EventData): Promise<number | null> {
  const response = await fetch(`${process.env.API_DOMAIN}/api/events`, {
    method: "DELETE",
    body: JSON.stringify(event),
  });
  const responseJson = await getResponseJson(response);

  return JSON.parse(responseJson?.id);
}

async function getResponseJson(res: Response) {
  if (!res.ok) {
    return null;
  }

  const json = await res.json();
  if (!json) {
    return null;
  }

  return json;
}

const db = { selectEvents, insertEvent, updateEvent, deleteEvent };
export default db;
