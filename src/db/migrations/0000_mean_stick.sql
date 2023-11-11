CREATE TABLE IF NOT EXISTS "projects" (
	"id" serial NOT NULL,
	"title" text NOT NULL,
	"slug" text NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"created_at" timestamp,
	"updated_at" timestamp
);
