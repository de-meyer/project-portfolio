import { useState } from "react";

export default function Searchfield({
  searchForUser,
}: {
  searchForUser: (username: string) => void;
}) {
  const [githubUsername, setGithubUsername] = useState("");
  const caption = "Search";
  const searchOnEnter = (event: { key: string }) => {
    event.key === "Enter" ? searchForUser(githubUsername) : "";
  };
  return (
    <div className="">
      <input
        className="select-none rounded-l-lg px-6 py-3 text-center align-middle font-sans font-bold text-black focus:outline-none "
        type="text"
        onKeyDown={searchOnEnter}
        placeholder={githubUsername}
        onChange={(event) => setGithubUsername(event.target.value)}
      />
      <button
        className="select-none rounded-r-lg bg-[hsl(280,100%,70%)] px-6 py-3 text-center align-middle font-sans  font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        onClick={() => searchForUser(githubUsername)}
      >
        {caption}
      </button>
    </div>
  );
}
