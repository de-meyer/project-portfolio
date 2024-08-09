import Searchfield from "~/components/Searchfield";
import { octokit } from "../util/Octokit";
import Tile from "./Tile";

export default async function Page({ params }: { params: { id: string } }) {
  const { data: listOfRepos } = await octokit.rest.repos.listForUser({
    username: params.id,
    direction: "desc",
    type: "owner",
  });
  const { data: user } = await octokit.rest.users.getByUsername({
    username: params.id,
  });

  return (
    <main className=" text-s min-h-screen items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white  ">
      <header className="flex justify-between pl-5 pr-5 pt-5">
        <div>
          <h2 className="font-medium text-white ">
            Repositories of:{" "}
            <img
              className="inline h-5 w-5 rounded-full"
              src={user.avatar_url}
              alt=""
            />{" "}
            <span className="text-[hsl(280,100%,70%)]">
              {params.id.toUpperCase()}
            </span>
          </h2>
        </div>
        <div>
          <Searchfield />
        </div>
      </header>
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
