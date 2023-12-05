CREATE TABLE IF NOT EXISTS "tech_to_projext" (
	"id" serial PRIMARY KEY NOT NULL,
	"tech_id" integer NOT NULL,
	"project_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tech_to_projext" ADD CONSTRAINT "tech_to_projext_tech_id_techs_id_fk" FOREIGN KEY ("tech_id") REFERENCES "techs"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tech_to_projext" ADD CONSTRAINT "tech_to_projext_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
