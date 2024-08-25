"use client";
import CustomGithubResponseData from "../../../types/CustomGithubResponseData";
type props = {
  repo: CustomGithubResponseData;
};

export default function Tile({ repo }: props) {
  return (
    <a
      href={repo.html_url}
      className="col-span-3 flex h-full w-full flex-col rounded-lg border-2 border-violet-500 p-6  shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/40"
      target="_blank"
      rel="noreferrer"
      key={repo.id}
    >
      <h4 className="mb-2 line-clamp-2 text-xl font-bold antialiased">
        {repo.name}
      </h4>
      <p className="grow">{repo.description}</p>
      <span className=""> {repo.language}</span>
    </a>
  );
}
