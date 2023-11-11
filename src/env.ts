import { z } from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  server: {
    DB_CONNECTION_STRING: z.string().startsWith("postgres://"),
    DB_PUBLIC_KEY: z.string(),
  },
  client: {
    NEXT_PUBLIC_SITE_URL: z.string(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
});

export default env;
