import { z } from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  server: {
    DB_CONNECTION_STRING: z.string().startsWith("postgres://"),
    DB_PUBLIC_KEY: z.string(),
  },
  experimental__runtimeEnv: {},
});

export default env;
