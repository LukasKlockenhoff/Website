import { serial, text, timestamp, pgTable, integer } from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";
import { experiences } from "../../db/schema/experiences";

export const articles = pgTable("articles", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  link: text("link").notNull(),
  experienceId: integer("experience_id")
    .notNull()
    .references(() => experiences.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type SelectArticle = InferSelectModel<typeof articles>;
export type SelectArticles = SelectArticles[];

export type InsertArticle = InferInsertModel<typeof articles>;
export type InsertArticles = InferInsertModel<typeof articles>[];

export const articlesRelations = relations(articles, ({ one }) => ({
  experience: one(experiences, {
    fields: [articles.experienceId],
    references: [experiences.id],
  }),
}));
