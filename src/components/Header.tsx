import MenuItem from "@/components/MenuItem";

import { AiFillHome, AiFillInfoCircle} from "react-icons/ai";
import Link from "next/link";
import DarkModeSwitch from "@/components/DarkModeSwitch";
export default function Header() {
    return(
        <div className="flex flex-row justify-between items-center py-5">
            <div className="flex space-x-5">
                <div>
                    <MenuItem title={"home"} address={"/"} Icon={AiFillHome} />
                </div>
                <div>
                    <MenuItem title={"about"} address={"/about"} Icon={AiFillInfoCircle} />
                </div>
            </div>
            <div className="flex space-x-5 items-center py-1">
                <DarkModeSwitch/>
                <div >
                    <Link href="/">
                        <h2 >
                            <span className=" py-2 text-2xl font-bold bg-amber-500 pl-2 rounded-l-lg">
                                IMDB
                            </span>
                            <span className=" py-2 text-2xl bg-black text-white font-bold pr-2 rounded-r-lg hidden md:inline"> Clone</span>
                        </h2>
                    </Link>
                </div>
            </div>
        </div>
    )
}