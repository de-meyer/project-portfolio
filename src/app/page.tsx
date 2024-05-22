"use client";
import { Octokit, App } from "octokit";
import { useState } from "react";
import Tile from "../components/Tile";
import type GithubResponseData from "../types/GithubResponseData";
import Searchfield from "~/components/Searchfield";

const octokit = new Octokit({
  userAgent: "project-portfolio/v1.0.0",
  log: {
    debug: console.debug,
    info: console.info,
    warn: console.warn,
    error: console.error,
  },
});

export default function HomePage() {
  const caption = "Github Api request";
  const [list, setList] = useState<GithubResponseData[]>([]);
  const [githubUsername, setGithubUsername] = useState("");
  async function calling(githubUsername: string) {
    const { data: listOfRepos } = await octokit.rest.repos.listForUser({
      username: githubUsername,
      direction: "desc",
      type: "owner",
    });

    setList(listOfRepos);
  }
  return (
    <main className="grid min-h-screen grid-cols-12 flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white ">
      <div className="container col-span-2">
      </div>
      <div className="container col-span-8 flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Repositories of:{" "}
          <span className="text-[hsl(280,100%,70%)]">
            {githubUsername.toUpperCase()}
          </span>
        </h1>
         <Searchfield searchForUser={calling}/>
        <div className="grid sm:grid-cols-1 sm:gap-4 md:gap-4 lg:grid-cols-3 lg:gap-4">
          {list.map((repo) => (
            <Tile repo={repo}></Tile>
          ))}
        </div>
      </div>
         
    </main>
  );
}
