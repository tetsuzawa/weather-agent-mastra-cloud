import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./src/mastra/index.ts"],
  noExternal: [/.*/],
});
