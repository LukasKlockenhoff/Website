import { serial, text, timestamp, pgTable } from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  
  slug: text("slug").notNull(),
  date: text("date").notNull(),
  description: text("description").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type SelectProject = InferSelectModel<typeof projects>;
export type SelectProjects = SelectProject[];

export type InsertProject = InferInsertModel<typeof projects>;
export type InsertProjects = InferInsertModel<typeof projects>[];
