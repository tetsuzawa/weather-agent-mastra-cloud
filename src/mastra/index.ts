import { Mastra } from "@mastra/core/mastra";
import { PinoLogger } from "@mastra/loggers";
import { weatherWorkflow } from "./workflows";
import { weatherAgent } from "./agents";
import { Memory } from "@mastra/memory";

export const mastra = new Mastra({
  workflows: { weatherWorkflow },
  agents: { weatherAgent },
  logger: new PinoLogger({
    name: "Mastra",
    level: "info",
  }),
  memory: new Memory(),
  observability: {
    default: {
      enabled: true,
    },
  },
});
