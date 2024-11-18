import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./src/schema.ts",
  dbCredentials: {
    url: "postgresql://info_owner:FNxcBd38kbmZ@ep-solitary-scene-a5nj7yiv.us-east-2.aws.neon.tech/Experience%20level?sslmode=require",
  },
});