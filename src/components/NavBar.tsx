import NavbarItem from "@/components/NavbarItem";

export default function NavBar() {
    return(
        <div className={"flex w-full space-x-5 items-center justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg text-sm"}>
            <NavbarItem title={"Trending"} param={"trending"}/>
            <NavbarItem title={"Top Rated"} param={"topRated"}/>

        </div>
    )
}