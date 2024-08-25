import { octokit } from "~/app/util/Octokit";
import Tile from "./Tile";

export default async function Page({ params }: { params: { id: string } }) {
  const { data: listOfRepos } = await octokit.rest.repos.listForUser({
    username: params.id,
    direction: "desc",
    type: "owner",
  });
  return (
    <div className="grid grid-flow-row auto-rows-fr grid-cols-9 gap-4">
      {listOfRepos.map((repo) => (
        <Tile repo={repo} key={repo.id} />
      ))}
    </div>
  );
}
