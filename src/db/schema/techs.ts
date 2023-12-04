import { serial, text, timestamp, pgTable } from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";
import { techToExperience } from "../../db/schema/techs-to-experience";

export const techs = pgTable("techs", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type SelectTech = InferSelectModel<typeof techs>;
export type SelectTechs = SelectTechs[];

export type InsertTech = InferInsertModel<typeof techs>;
export type InsertTechs = InferInsertModel<typeof techs>[];

export const techsRelations = relations(techs, ({ many }) => ({
  techToExperience: many(techToExperience),
}));
