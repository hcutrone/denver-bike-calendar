import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";
import { EventData } from "@/app/types";

const sql = neon(`${process.env.DATABASE_URL}`);

export async function GET() {
  const events = (await sql.query("SELECT * FROM events")) as EventData[];
  return NextResponse.json({ body: JSON.stringify(events) }, { status: 200 });
}

export async function POST(request: NextRequest) {
  const events = (await request.json()) as EventData[];
  if (!events) {
    return NextResponse.json({}, { status: 200 });
  }
  const params = events.reduce((acc, event) => {
    acc.push(
      event.title,
      event.body ?? "",
      JSON.stringify(event.links) ?? null,
      new Date(event.start_time).getTime() / 1000,
      new Date(event.end_time).getTime() / 1000
    );
    return acc;
  }, [] as unknown[]);
  let num = 1;
  const valueStrings = [];
  for (let index = 0; index < events.length; index++) {
    valueStrings.push(
      `($${num++}, $${num++}, $${num++}::jsonb, to_timestamp($${num++}), to_timestamp($${num++}))`
    );
  }
  const ids = await sql.query(
    `
      INSERT INTO events (title, body, links, start_time, end_time)
      VALUES ${valueStrings.join(" ")}
      RETURNING id;
    `,
    params
  );
  return NextResponse.json({ ids: JSON.stringify(ids) }, { status: 200 });
}

export async function PATCH(request: NextRequest) {
  const events = (await request.json()) as EventData[];
  if (!events) {
    return NextResponse.json(
      { message: "No events provided" },
      { status: 500 }
    );
  }
  const params = events.reduce((acc, event) => {
    acc.push(
      event.title,
      event.body,
      JSON.stringify(event.links) ?? null,
      new Date(event.start_time).getTime() / 1000,
      new Date(event.end_time).getTime() / 1000,
      event.id
    );
    return acc;
  }, [] as unknown[]);
  let num = 1;
  const setStrings = [];
  for (let index = 0; index < events.length; index++) {
    setStrings.push(`
      SET
        title = $${num++},
        body = $${num++},
        links = $${num++}::jsonb,
        start_time = to_timestamp($${num++}),
        end_time = to_timestamp($${num++})
      WHERE id = $${num++}
      RETURNING id;
    `);
  }
  const ids = await sql.query(
    `
    UPDATE events
    ${setStrings.join(" ")}
    `,
    params
  );
  return NextResponse.json({ ids: JSON.stringify(ids) }, { status: 200 });
}

export async function DELETE(request: NextRequest) {
  const events = (await request.json()) as EventData[];
  if (!events) {
    return NextResponse.json(
      { message: "No events provided" },
      { status: 500 }
    );
  }
  const arrayOfIds = events.map((event) => event.id);
  const ids = await sql.query(
    `DELETE FROM events WHERE id IN ($1) RETURNING id;`,
    [arrayOfIds.join(", ")]
  );
  return NextResponse.json({ ids: JSON.stringify(ids) }, { status: 200 });
}
