import { serial, text, timestamp, pgTable } from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";
import { articles } from "../../db/schema/articles";
import { techToExperience } from "../../db/schema/techs-to-experience";

export const experiences = pgTable("experiences", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  link: text("link").notNull(),
  slug: text("slug").notNull(),
  startDate: text("start_data").notNull(),
  endDate: text("end_data").notNull(),
  description: text("description").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const experiencesRelation = relations(experiences, ({ many }) => ({
  articles: many(articles),
  techToExperience: many(techToExperience),
}));

export type SelectExperience = InferSelectModel<typeof experiences>;
export type SelectExperiences = SelectExperience[];

export type InsertExperience = InferInsertModel<typeof experiences>;
export type InsertExperiences = InferInsertModel<typeof experiences>[];
