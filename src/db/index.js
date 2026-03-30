import config from "../../config.json";
import { connectSqlite } from "./sqlite.js";

export async function connectDB() {
  if (config.backend === "sqlite") {
    return await connectSqlite(config.sqlite_file);
  }

  throw new Error("Unknown backend: " + config.backend);
}
