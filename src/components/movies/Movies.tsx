"use client"
import {useSearchParams} from "next/navigation";

export default function Movies() {
    const searchParams = useSearchParams();
    const page = searchParams.get('page');


    return(
        <div>
            Movies Page {page}
        </div>
    )
}