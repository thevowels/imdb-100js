"use client"

import {Tv} from "@/utils/Tv";
import {format, isValid, parse} from "date-fns";
import Link from "next/link";
import Image from "next/image";
import {FiThumbsUp} from "react-icons/fi";

export default function TvCard({tv}: {tv:Tv}){
    let firstAirDate = "Not available";
    let first_air_date  = parse(tv.first_air_date, 'yyyy-MM-dd', new Date());
    if(isValid(first_air_date)){
        firstAirDate = format(first_air_date, "MMM d, yyyy");
    }

    return(
        <div
            className=" align-middle cursor-pointer sm:p-3 p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg border sm:border-slate-400 sm:m-2 transition-shadow duration-300 group">
            <Link href={`/tv/${tv.id}`} className={"flex flex-col items-center "}>
                <Image src={`https://image.tmdb.org/t/p/w500${tv.backdrop_path || tv.poster_path}`}
                       alt={tv.name}
                       width={500}
                       height={300}
                       className="rounded-t-xl group-hover:opacity-80 transition-opacity duration-300 object-cover"
                       placeholder="blur"
                       blurDataURL={"/Spinner.svg"}
                       style={{
                           maxWidth:"100%",
                           maxHeight:300,
                       }}
                ></Image>
                <div className={"p-2 max-w-[500px]"}>
                    <p className={"line-clamp-2 text-sm"}>{tv.overview}</p>
                    <h2 className="font-semibold text-xl">{tv.name}</h2>
                    <div className="flex flex-row h-10 item-center justify-between">

                        <span>
                        <p className={"text-sm"}>
                            {firstAirDate}
                        </p>
                        </span>
                        <span className={"flex font-semibold"}>
                        <FiThumbsUp className={"font-bold ml-1 mr-2 "}/>
                            {tv.vote_average}
                        </span>
                    </div>

                </div>
            </Link>

        </div>
    )
}