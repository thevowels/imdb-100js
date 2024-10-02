"use client"

import {useEffect} from "react";

export default function Error({error, reset}: {error: Error, reset:any}) {

    console.log(typeof reset)

    useEffect(() => {
        console.error(error)
    }, [error]);
    return(
        <div className={"text-center mt-10"}>
            <h1>Something went wrong</h1>
            <button className={"hover:text-amber-500"} onClick={reset}>Reset</button>
        </div>
    )
}