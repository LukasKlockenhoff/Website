import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import schema from "./schema";
import { env } from "@/env";

const client = postgres(env.DB_CONNECTION_STRING);
const db = drizzle(client, { schema });

export default db;
