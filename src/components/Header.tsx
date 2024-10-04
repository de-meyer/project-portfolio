import Searchfield from "./Searchfield";
import Link from "next/link";
import { AiOutlineNumber, AiFillRead } from "react-icons/ai";
export default function Header({ params }: { params: { id: string } }) {
  return (
    <header className="col-span-full p-5">
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
