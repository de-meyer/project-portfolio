"use client";

import { Octokit } from "octokit";
import { useState } from "react";
import GithubResponseData from "~/types/GithubResponseData";
import Searchfield from "./Searchfield";
import TileWrapper from "./TileWrapper";
import Tile from "./Tile";

const octokit = new Octokit({
  userAgent: "project-portfolio/v1.0.0",
  log: {
    debug: console.debug,
    info: console.info,
    warn: console.warn,
    error: console.error,
  },
});
export default function Dashboard() {
  const [list, setList] = useState<GithubResponseData[]>([]);
  const [githubUsername, setGithubUsername] = useState("");
  async function calling(githubUsername: string) {
    setGithubUsername(githubUsername);
    const { data: listOfRepos } = await octokit.rest.repos.listForUser({
      username: githubUsername,
      direction: "desc",
      type: "owner",
    });

    setList(listOfRepos);
  }
  return (
    <>
      <div className="col-span-2"></div>
      <div className="col-span-8 flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white ">
          Repositories of:{" "}
          <span className="text-[hsl(280,100%,70%)]">
            {githubUsername.toUpperCase()}
          </span>
        </h1>
        <Searchfield searchForUser={calling} />
        <TileWrapper>
          {list.map((repo) => (
            <Tile repo={repo} />
          ))}
        </TileWrapper>
      </div>
    </>
  );
}
