// One-time script to create the waitlist_entries table in Neon Postgres.
// Run with: npx tsx scripts/setup-waitlist-table.ts

import { neon } from "@neondatabase/serverless"
import { readFileSync } from "fs"

// Parse .env.local without dotenv dependency
const envFile = readFileSync(".env.local", "utf-8")
for (const line of envFile.split("\n")) {
  const match = line.match(/^([^#=]+)=(.*)$/)
  if (match) process.env[match[1].trim()] = match[2].trim().replace(/^"|"$/g, "")
}

async function setup() {
  const sql = neon(process.env.POSTGRES_URL!)

  await sql`
    CREATE TABLE IF NOT EXISTS waitlist_entries (
      id SERIAL PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `

  console.log("waitlist_entries table created successfully")
}

setup().catch((err) => {
  console.error("Failed to create table:", err)
  process.exit(1)
})
