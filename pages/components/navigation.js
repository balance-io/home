import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
    return (

        <nav className="bg-transparent px-4 py-10">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="#" className="flex iml-4">
                    <Link href="/">
                        <Image src="/Logo.svg" alt="balance" width="30" height="30" className="cursor-pointer" />
                    </Link>
                </a>
                <div className="flex items-center md:order-2">
                </div>
                <div className="hidden mr-12 justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-xl text-black rounded md:bg-transparent md:p-0">Discord</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-xl text-black rounded md:bg-transparent md:p-0">Blog</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-xl text-black rounded md:bg-transparent md:p-0">GitHub</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    );
}

