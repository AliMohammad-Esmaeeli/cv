import Link from "next/link";
import data from "@/Data/data.json";

interface propstype {
    Lang: string,
}

export default function SideNav(props: propstype) {
    return (
        <div className="block md:hidden text-white">
            <button
                onClick={() => { document.getElementById("mySidenav")!.style.width = "250px" }}
                className="block md:hidden m-3 text-black dark:text-white"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                </svg>
            </button>
            <div id="mySidenav" className="sidenav text-2xl flex flex-col justify-center items-center gap-16 bg-white text-black dark:bg-stone-950 dark:text-white">
                <a
                    href="javascript:void(0)"
                    className="absolute right-6 top-2 ml-14"
                    onClick={() => { document.getElementById("mySidenav")!.style.width = "0" }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </a>
                <Link
                    href={"/blog"}
                    onClick={() => { document.getElementById("mySidenav")!.style.width = "0" }}>
                    {props.Lang === "Fa" ? data.Fa.article : data.En.article}
                </Link>
                <Link
                    href="#about-me"
                    onClick={() => { document.getElementById("mySidenav")!.style.width = "0" }}
                >
                    {props.Lang === "Fa"
                        ? data.Fa["about me"]
                        : data.En["about me"]}
                </Link>
                <Link
                    href="#contact"
                    onClick={() => { document.getElementById("mySidenav")!.style.width = "0" }}
                >
                    {props.Lang === "Fa" ? data.Fa.contact : data.En.contact}
                </Link>
            </div>
        </div>
    )
}
