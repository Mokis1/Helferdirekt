// backend/scripts/generate.ts
import { exec } from "child_process"

exec("npx prisma db pull && npx prisma generate --schema=../backend/prisma/schema.prisma", (err, stdout, stderr) => {
  if (err) {
    console.error(`❌ Fehler: ${err.message}`)
    return
  }
  if (stderr) {
    console.error(`⚠️ Warnung: ${stderr}`)
  }
  console.log(`✅ Fertig:\n${stdout}`)
})
