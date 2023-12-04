import { serial, text, timestamp, pgTable, integer } from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";
import { experiences } from "../../db/schema/experiences";
import { SelectTech, techs } from "../../db/schema/techs";

export const techToExperience = pgTable("tech_to_experience", {
  id: serial("id").primaryKey(),
  techId: integer("tech_id")
    .notNull()
    .references(() => techs.id),
  experienceId: integer("experience_id")
    .notNull()
    .references(() => experiences.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type SelectTechToExperience = InferSelectModel<typeof techToExperience>;
export type SelectTechToExperiences = SelectTechToExperience[];

export type InsertTechToExperience = InferInsertModel<typeof techToExperience>;
export type InsertTechToExperiences = InferInsertModel<
  typeof techToExperience
>[];

export type SelectTechToExperienceWithTech = SelectTechToExperience & {
  skill: SelectTech;
};

export const techToExperienceRelation = relations(
  techToExperience,
  ({ one }) => ({
    tech: one(techs, {
      fields: [techToExperience.techId],
      references: [techs.id],
    }),
    experience: one(experiences, {
      fields: [techToExperience.experienceId],
      references: [experiences.id],
    }),
  }),
);
