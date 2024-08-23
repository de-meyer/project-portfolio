import Searchfield from "./Searchfield";
import Link from "next/link";
import { AiOutlineNumber, AiFillRead, AiFillGithub } from "react-icons/ai";
export default function Header({ params }: { params: { id: string } }) {
  return (
    <header className="col-span-full border-b-2 bg-blue-950 p-5 text-white">
      <div className="flex justify-between">
        <article>
          <h2 className="font-medium text-white ">
            Profile of:{" "}
            <span className="text-[hsl(280,100%,70%)]">
              {params.id.toUpperCase()}
            </span>
          </h2>
        </article>
        <section>
          <Searchfield />
        </section>
      </div>
      <nav className="flex gap-5">
        <Link
          href={`/${params.id}/profile`}
          className="inline-flex items-center"
        >
          <AiFillGithub className="m-1" /> Profile
        </Link>
        <Link
          href={`/${params.id}/repositories`}
          className="inline-flex items-center"
        >
          <AiOutlineNumber className="m-1" /> Repositories
        </Link>
        <Link
          href={`/${params.id}/activities`}
          className="inline-flex items-center "
        >
          <AiFillRead className="m-1" /> Activities
        </Link>
      </nav>
    </header>
  );
}
