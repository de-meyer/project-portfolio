import { octokit } from "../util/Octokit";
import Tile from "./Tile";

export default async function Page({ params }: { params: { id: string } }) {
  const { data: listOfRepos } = await octokit.rest.repos.listForUser({
    username: params.id,
    direction: "desc",
    type: "owner",
  });

  return (
    <>
      <h1 className="text-5xl font-extrabold tracking-tight text-white ">
        Repositories of:{" "}
        <span className="text-[hsl(280,100%,70%)]">
          {params.id.toUpperCase()}
        </span>
      </h1>
      {listOfRepos.map((repo) => (
        <Tile repo={repo} key={repo.id} />
      ))}
    </>
  );
}
