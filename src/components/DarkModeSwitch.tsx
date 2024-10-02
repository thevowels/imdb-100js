"use client"

import {MdLightMode} from "react-icons/md";
import {BsMoonFill} from "react-icons/bs";
import {useEffect, useState} from "react";
import { useTheme } from "next-themes";
export default function DarkModeSwitch() {

    const {systemTheme, theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    const currentTheme = theme === "system" ? systemTheme : theme;

    useEffect(() => {
        setMounted(true);
    }, []);

    return(
        <>
            { mounted && (currentTheme === "dark"  ? (
                <BsMoonFill className={"text-xl cursor-pointer hover:text-amber-500"} onClick={() => setTheme("light")}/>

                    ):
                (
                    <MdLightMode className={"text-xl cursor-pointer hover:text-amber-500"} onClick={() => setTheme("dark")}/>
                )
            )
            }
        </>
    )
}