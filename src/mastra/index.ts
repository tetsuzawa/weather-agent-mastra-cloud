import { Mastra } from "@mastra/core/mastra";
import { PinoLogger } from "@mastra/loggers";
import { weatherWorkflow } from "./workflows";
import { weatherAgent } from "./agents";
import { MastraAuthAuth0 } from "@mastra/auth-auth0";

export const mastra = new Mastra({
  workflows: { weatherWorkflow },
  agents: { weatherAgent },
  logger: new PinoLogger({
    name: "Mastra",
    level: "info",
  }),
  observability: {
    default: {
      enabled: true,
    },
  },
  server: {
    experimental_auth: new MastraAuthAuth0({
      domain: process.env.AUTH0_DOMAIN,
      audience: process.env.AUTH0_AUDIENCE,
    }),
  },
});
