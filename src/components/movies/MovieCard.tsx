"use client"
import {parse, format,isValid } from "date-fns"
import {Movie} from "@/utils/Movie";
import Link from "next/link";
import Image from "next/image";
import {FiThumbsUp} from "react-icons/fi";

export default function MovieCard({result}:{result: Movie}) {



    let releasedDate = "Not available";
    let release_date  = parse(result.release_date, 'yyyy-MM-dd', new Date());

    if(isValid(release_date)){
        releasedDate = format(release_date, "MMM d, yyyy");
    }
    // console.log('release date ' , result.title, release_date)

    return(
        <div
            className=" align-middle cursor-pointer sm:p-3 p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg border sm:border-slate-400 sm:m-2 transition-shadow duration-300 group">
            <Link href={`/movie/${result.id}`} className={"flex flex-col items-center "}>
                <Image src={`https://image.tmdb.org/t/p/w500${result.backdrop_path || result.poster_path}`}
                       alt={result.title}
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
                    <p className={"line-clamp-2 text-sm"}>{result.overview}</p>
                    <h2 className="font-semibold text-xl">{result.title}</h2>
                    <div className="flex flex-row h-10 item-center justify-between">

                        <span>
                        <p className={"text-sm"}>
                            {releasedDate}
                        </p>
                        </span>
                        <span className={"flex font-semibold"}>
                        <FiThumbsUp className={"font-bold ml-1 mr-2 "}/>
                            {result.vote_average}
                        </span>
                    </div>

                </div>
            </Link>


        </div>
    )
}