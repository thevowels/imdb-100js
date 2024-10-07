"use client"

import {useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import {router} from "next/client";
import {AiOutlineArrowRight, AiOutlineArrowLeft} from "react-icons/ai";

export default function MoviesFooter(){

    const searchParams = useSearchParams();
    const router = useRouter();
    // const page = searchParams.get('page') || 1;
    const [page, setPage] = useState(Number(searchParams.get('page'))|| 1);
    useEffect(()=>{
        router.push("/movies?page=" + page);
    },[page])
    return(
        <div className="flex flex-row justify-between mb-3 lg:px-6 2xl:px-36">
            <button onClick={() => setPage(page -1)} disabled={page <=1} className="text-amber-500 disabled:text-gray-300"><AiOutlineArrowLeft className="font-bold text-xl"/></button>
                Movie Footer current_page = {page}
            <button onClick={() => setPage(page + 1)} className="text-amber-500 disabled:text-gray-700"><AiOutlineArrowRight className="font-bold text-xl"/></button>
        </div>
    )
}