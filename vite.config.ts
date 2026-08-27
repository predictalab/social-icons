import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { execSync } from "node:child_process";
import { version } from "./package.json";

// Clés ajoutées dans sourceTypes.ts depuis la dernière release (dernier commit
// ayant touché package.json, où la version est bumpée) : alimente le filtre
// « Nouveautés » de la page d'aperçu, y compris pour les ajouts non commités.
function newIconsSinceLastRelease(): string[] {
  try {
    const base = execSync("git log -1 --format=%H -- package.json", {
      encoding: "utf8",
    }).trim();
    if (!base) return [];
    const diff = execSync(`git diff ${base} -- src/types/sourceTypes.ts`, {
      encoding: "utf8",
    });
    return Array.from(diff.matchAll(/^\+\s*\|\s*"([^"]+)"/gm), (m) => m[1]);
  } catch {
    return [];
  }
}

export default defineConfig({
  base: "/social-icons/",
  plugins: [react()],
  define: {
    __APP_VERSION__: JSON.stringify(version),
    __NEW_ICONS__: JSON.stringify(newIconsSinceLastRelease()),
  },
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : undefined,
  },
});
