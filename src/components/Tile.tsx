import { AiFillGithub } from "react-icons/ai";
import GithubResponseData from "../types/GithubResponseData";

type props = {
  repo: GithubResponseData;
};
export default function Tile({ repo }: props) {
  const btnCaption = "Github";
  return (
    <>
      <div
        className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
        key={repo.id}
      >
        <div className="p-6">
          <h5 className="text-blue-gray-900 mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
            {repo.name}
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {repo.description}
          </p>
        </div>
        <div className="p-6 pt-0">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="text-s inline-flex select-none rounded-lg bg-[hsl(280,100%,70%)] px-6 py-3 text-center align-middle font-sans font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            {btnCaption}{" "}
            <span>
              {" "}
              <AiFillGithub size={18} />
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
