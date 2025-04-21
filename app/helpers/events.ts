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

export async function insertEvents(
  events: EventData[]
): Promise<number[] | null> {
  const response = await fetch(`${process.env.API_DOMAIN}/api/events`, {
    method: "POST",
    body: JSON.stringify(events),
  });
  const responseJson = await getResponseJson(response);

  return JSON.parse(responseJson?.ids).map((idObj: { id: number }) => idObj.id);
}

export async function updateEvents(
  events: EventData[]
): Promise<number[] | null> {
  const response = await fetch(`${process.env.API_DOMAIN}/api/events`, {
    method: "PATCH",
    body: JSON.stringify(events),
  });
  const responseJson = await getResponseJson(response);

  return JSON.parse(responseJson?.ids).map((idObj: { id: number }) => idObj.id);
}

export async function deleteEvents(
  events: EventData[]
): Promise<number[] | null> {
  const response = await fetch(`${process.env.API_DOMAIN}/api/events`, {
    method: "DELETE",
    body: JSON.stringify(events),
  });
  const responseJson = await getResponseJson(response);

  return JSON.parse(responseJson?.ids).map((idObj: { id: number }) => idObj.id);
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
