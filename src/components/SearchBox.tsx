"use client"

import {useState} from "react";
import {useRouter} from "next/navigation";


export default function SearchBox(props: {}){

    const [search, setSearch] = useState("");
    const router = useRouter();
    function handleSubmit(e:any){
        e.preventDefault();
        if(!search) return;
        router.push(`/search/${search}`);

    }

    return(
        <form
            onSubmit={handleSubmit}
            className="text-xl flex max-w-screen-xl mx-auto justify-between items-center px-5">
            <input type={"text"}
                   value={search}
                   onChange={(event) => setSearch(event.target.value)}
                   placeholder={"Search move"}
                   className="flex-1 h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent"
            />
            <button disabled={!search} type={"submit"} className={`text-amber-500 disabled:text-gray-500 border rounded-xl px-3 h-10`}>Search</button>
        </form>
    )
}