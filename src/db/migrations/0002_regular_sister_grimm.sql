DO $$ BEGIN
 ALTER TABLE "articles" ADD CONSTRAINT "articles_experience_id_experiences_id_fk" FOREIGN KEY ("experience_id") REFERENCES "experiences"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
