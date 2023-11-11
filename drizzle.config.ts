import type { Config } from "drizzle-kit";
import { env } from "./src/env";

export default {
  schema: "./src/db/schema",
  out: "./src/db/migrations",
  dbCredentials: {
    connectionString: env.DB_CONNECTION_STRING,
  },
} satisfies Config;
