import Searchfield from "~/components/Searchfield";
import { octokit } from "../util/Octokit";
import Link from "next/link";
import RepositoryList from "./RepositoryList";

export default async function Page({ params }: { params: { id: string } }) {
  const { data: user } = await octokit.rest.users.getByUsername({
    username: params.id,
  });

  return (
    <main className=" text-s min-h-screen items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white  ">
      <header className=" border-b-2 bg-blue-950 p-5">
        <div className="flex justify-between">
          <div>
            <h2 className="font-medium text-white ">
              Profile of:{" "}
              <img
                className="inline h-5 w-5 rounded-full"
                src={user.avatar_url}
                alt="Avatar of the given user"
              />{" "}
              <span className="text-[hsl(280,100%,70%)]">
                {params.id.toUpperCase()}
              </span>
            </h2>
          </div>
          <div>
            <Searchfield />
          </div>
        </div>
        <Link href={`/${params.id}/repositories`}>Repositories</Link>
      </header>
      <RepositoryList params={params} />
    </main>
  );
}
