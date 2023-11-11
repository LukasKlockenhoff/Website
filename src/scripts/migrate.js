const { drizzle } = require("drizzle-orm/postgres-js");
const { migrate } = require("drizzle-orm/postgres-js/migrator");
const postgres = require("postgres");

if (!("DB_CONNECTION_STRING" in process.env))
  throw new Error("Environment variable DB_CONNECTION_STRING not found.");

const sql = postgres(process.env.DB_CONNECTION_STRING, { max: 1 });
const db = drizzle(sql);

migrate(db, { migrationsFolder: "src/db/migrations" })
  .then(() => {
    console.log("Migrations complete");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
