import { serial, text, timestamp, pgTable, integer } from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";
import { SelectTech, techs } from "../../db/schema/techs";
import { projects, SelectProject } from "../../db/schema/projects";

export const techToProject = pgTable("tech_to_projext", {
  id: serial("id").primaryKey(),
  techId: integer("tech_id")
    .notNull()
    .references(() => techs.id),
  projectId: integer("project_id")
    .notNull()
    .references(() => projects.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type SelectTechToProject = InferSelectModel<typeof techToProject>;
export type SelectTechToProjects = SelectTechToProject[];

export type InsertTechToProject = InferInsertModel<typeof techToProject>;
export type InsertTechToProjects = InferInsertModel<typeof techToProject>[];

export type SelectTechToProjectWithTech = SelectTechToProject & {
  project: SelectProject;
};

export const techToProjectRelation = relations(techToProject, ({ one }) => ({
  tech: one(techs, {
    fields: [techToProject.techId],
    references: [techs.id],
  }),
  project: one(projects, {
    fields: [techToProject.projectId],
    references: [projects.id],
  }),
}));
