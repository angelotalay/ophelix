/**
 * This configuration file lets you run `$ sanity [command]` in this folder
 * Go to https://www.sanity.io/docs/cli to learn more.
 **/
import { defineCliConfig } from "sanity/cli";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineCliConfig({
  api: { projectId, dataset },
  deployment: {
    appId: "vjattab75az8h1wzuzlq1bvv",
    autoUpdates: true,
  },
  typegen: {
    path: "./sanity/**/*.{ts,tsx,js,jsx}",
    schema: "./src/sanity/extract.json",
    generates: "./sanity/types.ts",
  },
});
