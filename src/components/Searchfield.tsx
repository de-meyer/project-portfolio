import { useState } from "react"

export default function Searchfield({searchForUser}: {searchForUser: (username:string)=> void}) {
    
   const [githubUsername, setGithubUsername] = useState("")
   const caption = "Search";
    return (<>
    <div className="">
        <input className="text-black text-s inline-flex select-none rounded-lg px-6 py-3 text-center align-middle font-sans font-bold " type="text" placeholder={githubUsername} onChange={(event)=> setGithubUsername(event.target.value)}/>
        <button className="text-s inline-flex select-none rounded-lg bg-[hsl(280,100%,70%)] px-6 py-3 text-center align-middle font-sans font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={() => searchForUser(githubUsername)}>{caption}</button>
    </div>
    
    </>
    )
}