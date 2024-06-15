"use client";
import GithubResponseData from "../../types/GithubResponseData";
import { octokit } from "../util/Octokit";

type props = {
  repo: GithubResponseData;
};

export default function Tile({ repo }: props) {
  /*const { data: listOfLanguages } = (repo.owner.name &&
    repo.name &&
    (await octokit.rest.repos.listLanguages({
      owner: repo.owner.name,
      repo: repo.name,
    }))) || { data: {} };
*/
  return (
    <div className="rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/40">
      {
        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="relative flex h-full flex-col rounded-lg bg-white bg-clip-border text-gray-700 shadow-md"
          key={repo.id}
        >
          <div className="p-6">
            <h5 className="text-blue-gray-900 mb-2 font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
              {repo.name}
            </h5>
            <p className="block h-20 overflow-hidden font-sans text-base font-light leading-relaxed text-inherit antialiased">
              {repo.description}
            </p>
          </div>
        </a>
      }
    </div>
  );
}
