CREATE TABLE IF NOT EXISTS "tech_to_experience" (
	"id" serial PRIMARY KEY NOT NULL,
	"tech_id" integer NOT NULL,
	"experience_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "techs" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tech_to_experience" ADD CONSTRAINT "tech_to_experience_tech_id_techs_id_fk" FOREIGN KEY ("tech_id") REFERENCES "techs"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tech_to_experience" ADD CONSTRAINT "tech_to_experience_experience_id_experiences_id_fk" FOREIGN KEY ("experience_id") REFERENCES "experiences"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
