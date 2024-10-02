"use client"

import Link from "next/link";
import {useSearchParams} from "next/navigation";
import {Suspense, useEffect, useState} from "react";

export default function NavbarItem({title,param}: {title:string, param:string}) {

    return (
        <Suspense>
            <NavbarItemInternal title={title} param={param}/>
        </Suspense>
    )
}

function NavbarItemInternal({title,param}: {title:string, param:string}) {
    const searchParams = useSearchParams();
    const genre = searchParams.get("genre");

    return(
        <Link href={`/?genre=${param}`} className={`m-4 hover:text-amber-500 font-semibold p-2 ${genre && genre === param && "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"}`} >
            {title.toUpperCase()}
        </Link>

    )

}
