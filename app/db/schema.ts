import {
  integer,
  jsonb,
  pgTable,
  text,
  varchar,
  timestamp,
} from "drizzle-orm/pg-core";

export const eventsTable = pgTable("events", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  body: text(),
  links: jsonb(),
  start: timestamp("start_time").notNull(),
  end: timestamp("end_time").notNull(),
});
