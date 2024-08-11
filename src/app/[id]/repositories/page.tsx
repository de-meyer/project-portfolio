import { octokit } from "~/app/util/Octokit";
import Tile from "../Tile";

export default async function Page({ params }: { params: { id: string } }) {
  const { data: listOfRepos } = await octokit.rest.repos.listForUser({
    username: params.id,
    direction: "desc",
    type: "owner",
  });
  return (
    <main className=" text-s min-h-screen items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white  ">
      <div className="grid grid-cols-12 flex-col ">
        <div className="col-span-2"></div>
        <div className="col-span-8 flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <div className="grid gap-4 lg:grid-cols-3">
            {listOfRepos.map((repo) => (
              <Tile repo={repo} key={repo.id} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
