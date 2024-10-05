"use client"

export default function DisplayMovie({id}: {id: string}) {
    return (
        <div className="
            /* Small screens (sm) */
            sm:w-[640px] sm:h-[268px]  /* 640 / 2.39 ≈ 268px */

            /* Medium screens (md) */
            md:w-[768px] md:h-[321px]  /* 768 / 2.39 ≈ 321px */

            /* Large screens (lg) */
            lg:w-[1024px] lg:h-[428px] /* 1024 / 2.39 ≈ 428px */

            /* Extra-large screens (xl) */
            xl:w-[1280px] xl:h-[535px] /* 1280 / 2.39 ≈ 535px */
        mx-auto
        ">
            <iframe
                src={`https://vidsrc.to/embed/movie/${id}`}
                allowFullScreen
                style={{
                    width: "100%",
                    height: "100%",
                }}
                title="Embedded Video"

            ></iframe>
        </div>
    )
}