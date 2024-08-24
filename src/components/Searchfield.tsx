"use client";
import { useRouter } from "next/navigation";
import { KeyboardEventHandler } from "react";

export default function Searchfield() {
  const router = useRouter();
  const searchOnEnter: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      event.currentTarget.value;
      router.push("/" + event.currentTarget.value + "/repositories");
    }
  };
  return (
    <input
      className="select-none rounded-lg px-3 py-3 align-middle font-sans font-medium text-black focus:outline-none "
      type="text"
      onKeyDown={searchOnEnter}
      placeholder="Search github user..."
    />
  );
}
