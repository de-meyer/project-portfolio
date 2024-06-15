import { Octokit } from "octokit";

export const octokit = new Octokit({
  userAgent: "project-portfolio/v1.0.0",
  log: {
    debug: console.debug,
    info: console.info,
    warn: console.warn,
    error: console.error,
  },
});
