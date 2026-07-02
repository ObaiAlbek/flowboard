import { db } from './db/index';
import { sql } from 'drizzle-orm';

async function main() {
  console.log("⏳ Teste Datenbankverbindung...");
  try {
    // Führt eine extrem simple Abfrage aus, um zu prüfen, ob die DB reagiert
    const result = await db.execute(sql`SELECT 1 AS check`);
    console.log("✅ Verbindung erfolgreich! Die Datenbank antwortet:", result);
  } catch (error) {
    console.error("❌ Fehler bei der Verbindung:", error);
  }
  process.exit(0);
}

main();