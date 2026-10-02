/// <reference types="vite/client" />
// Preview page only (aliased in vite.config.ts): it renders every icon at once, so all
// logos are bundled upfront instead of 594 separate import() calls. The published lib
// (Rollup) still uses assetLoaders.ts, on demand.
import type { assetLoaders as lazyLoaders } from "./assetLoaders";

const urls = import.meta.glob<string>("../assets/social-icons/*", {
  eager: true,
  import: "default",
});

export const assetLoaders = Object.fromEntries(
  Object.entries(urls).map(([path, url]) => [
    path.split("/").pop(),
    () => Promise.resolve({ default: url }),
  ]),
) as unknown as typeof lazyLoaders;
