import type { Config } from "drizzle-kit";
import env from "@/env";

export default {
  schema: "./src/db/schema",
  out: "./src/db/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString:
      "postgres://postgres.ohyjeaxuwfnnnyzwoeks:kynvug-2borda-hyktYj@aws-0-eu-central-1.pooler.supabase.com:6543/postgres",
  },
} satisfies Config;
