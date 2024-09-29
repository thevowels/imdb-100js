import { IconType} from "react-icons";
import Link from "next/link";

export default  function MenuItem({title, address, Icon}: {title:string, address:string, Icon:IconType}) {
    return(
        <>
            <Link href={address} className={"flex hover:text-amber-600 mx-4 lg:mx-6"}>
                <p className={"hidden md:block font-bold"}>{title.toUpperCase()}</p>
                <Icon className={"md:hidden text-2xl"}/>
            </Link>

        </>)
}