import { schema } from "./schema.js";

export async function migrate(dbType, exec) {
  for (const table of Object.values(schema)) {
    const ddl = table[dbType];
    await exec(ddl);
  }
}
