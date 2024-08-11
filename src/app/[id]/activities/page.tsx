import { octokit } from "~/app/util/Octokit";
import Tile from "../Tile";

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <main className=" text-s min-h-screen items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white  ">
      <div>user activities page</div>
    </main>
  );
}
