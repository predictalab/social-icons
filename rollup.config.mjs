import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import image from "@rollup/plugin-image";

// Icon chunks only hold a base64 string: their sourcemaps are useless for debugging
// and would double the package size. The entry keeps its sourcemap.
const dropIconSourcemaps = () => ({
  name: "drop-icon-sourcemaps",
  generateBundle(_options, bundle) {
    for (const [fileName, chunk] of Object.entries(bundle)) {
      if (!fileName.startsWith("icons/")) continue;
      if (fileName.endsWith(".map")) delete bundle[fileName];
      else if (chunk.type === "chunk") {
        chunk.map = null;
        chunk.code = chunk.code.replace(/\n\/\/# sourceMappingURL=[^\n]*\n?$/, "\n");
      }
    }
  },
});

// Code splitting: each local logo (import() in utils/assetLoaders.ts) becomes a chunk
// in dist/icons/, loaded on demand by LocalIcon.
export default {
  input: "src/index.tsx",
  external: ["@iconify/react"],
  output: [
    {
      dir: "dist",
      format: "cjs",
      entryFileNames: "index.js",
      chunkFileNames: "icons/[name]-[hash].cjs",
      sourcemap: true,
    },
    {
      dir: "dist",
      format: "esm",
      entryFileNames: "index.esm.js",
      chunkFileNames: "icons/[name]-[hash].js",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    image(),
    typescript(),
    postcss({
      extensions: [".css"],
    }),
    dropIconSourcemaps(),
  ],
};
