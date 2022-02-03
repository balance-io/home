import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
    return (

        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 pt-10 mx-10">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="#" className="flex ml-2 ">
                    <Link href="/">
                        <Image src="/Logo.svg" alt="balance" width="30" height="30" className="cursor-pointer" />
                    </Link>
                </a>
                <div className="flex items-center md:order-2">
                </div>
                <div className="hidden mr-12 justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-white text-xl text-black rounded md:bg-transparent md:p-0">Discord</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-white text-xl text-black rounded md:bg-transparent md:p-0">Blog</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-white text-xl text-black rounded md:bg-transparent md:p-0">GitHub</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    );
}

{/* // <div>
        //     <div className="sm:flex hidden pt-6 p-6  w-screen sticky top-0 z-50">
        //         <div className="justify-center top-0 z-5 w-screen">
        //             <div className="flex space-x-12 text-xl items-center justify-center		  ">


        //                 <Link href="https://discord.gg/V7j9MEuK8h">
        //                     <a className="link link-underline link-underline-black text-black hover:text-slate-700 duration-300" target="_blank">
        //                         Discord
        //                     </a>
        //                 </Link>
        //                 <div>
        //                     <Link href="/">
        //                         <Image src="/Logo.svg" alt="balance" width="60" height="60" className="cursor-pointer" />
        //                     </Link>
        //                 </div>
        //                 <Link href="https://ricburton.substack.com/">
        //                     <a className="link link-underline link-underline-black text-black hover:text-slate-700 duration-300" target="_blank">
        //                         Blog
        //                     </a>
        //                 </Link>
        //             </div>

        //         </div>
        //         <div className="justify-left w-screen">
        //             <button className="bg-blue-200 h-10 w-10">Hello</button>
        //         </div>
        //     </div>



        //     <div className="sm:hidden flex  pt-6 p-6 bg-gray-100 w-screen justify-center sticky top-0 z-50">
        //         <div className="flex space-x-12 text-xl items-center		  ">
        //             <div>
        //                 <Link href="/">
        //                     <Image src="/Logo.svg" alt="balance" width="60" height="60" className="cursor-pointer" />
        //                 </Link>
        //             </div>


        //             <Link href="https://discord.gg/V7j9MEuK8h">
        //                 <a className="link link-underline link-underline-black text-black hover:text-slate-700 duration-300" target="_blank">
        //                     Discord
        //                 </a>
        //             </Link>

        //             <Link href="">
        //                 <a className="link link-underline link-underline-black text-black hover:text-slate-700 duration-300" target="_blank">
        //                     Blog
        //                 </a>
        //             </Link>

        //         </div>
        //     </div>




        // </div> */}