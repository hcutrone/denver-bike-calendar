import type { DBEvent, EventData } from "../types";

export async function selectEvents(): Promise<EventData[] | null> {
  const response = await fetch(
    '/api/events',
    {
      method: "GET",
    },
  );
  const events = await getResponseJson(response);
  if (!events) {
    return null;
  }

  return (events as DBEvent[]).map((eventJson) => ({
    ...eventJson,
    start: new Date(eventJson.start),
    end: new Date(eventJson.end),
  }));
}

export async function insertEvent(event: EventData): Promise<number | null> {
  const response = await fetch(
    '/api/events',
    {
      method: "POST",
      body: JSON.stringify(event),
    },
  );
  const responseJson = await getResponseJson(response);

  console.log({ response, responseJson });
  return responseJson?.id || null;
}

export async function updateEvent(event: EventData): Promise<number | null> {
  const response = await fetch(
    '/api/events',
    {
      method: "PATCH",
      body: JSON.stringify(event),
    },
  );
  const responseJson = await getResponseJson(response);

  return responseJson?.id || null;
}

export async function deleteEvent(event: EventData): Promise<number | null> {
  const response = await fetch(
    '/api/events',
    {
      method: "DELETE",
      body: JSON.stringify(event),
    },
  );
  const responseJson = await getResponseJson(response);

  return responseJson?.id || null;
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
