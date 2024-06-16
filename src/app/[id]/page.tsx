import Searchfield from "~/components/Searchfield";
import { octokit } from "../util/Octokit";
import Tile from "./Tile";

export default async function Page({ params }: { params: { id: string } }) {
  const { data: listOfRepos } = await octokit.rest.repos.listForUser({
    username: params.id,
    direction: "desc",
    type: "owner",
  });

  return (
    <main className=" min-h-screen items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white ">
      <div className="grid grid-cols-12 flex-col py-4">
        <div className="col-span-7"></div>
        <div className="col-span-3 flex flex-col gap-4">
          <Searchfield />
        </div>
      </div>
      <div className="grid grid-cols-12 flex-col ">
        <div className="col-span-2"></div>

        <div className="col-span-8 flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white ">
            Repositories of:{" "}
            <span className="text-[hsl(280,100%,70%)]">
              {params.id.toUpperCase()}
            </span>
          </h1>
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
