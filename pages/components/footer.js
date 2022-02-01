import Image from "next/image";
import Link from "next/link";

function Footer() {
    return (
        <section className=" pt-6 p-6 bg-[#131415] w-screen justify-center sticky top-0 z-50">
            <h1 className="text-white text-center mx-auto text-2xl pb-10 ">How <b className="font-medium">you</b> can help <b className="font-medium">Us</b> before <b className="font-medium">we </b> launch the app </h1>
            <div className=" space-x-12 items-center">


            <div className="flex gap-3 justify-center">
            <button className="bg-sky-500 text-white hover:bg-gray-700 py-4 px-6 mb-14 rounded-xl flex hover:cursor-pointer duration-300 ">
               Follow on twitter
            </button>

            <button className="bg-indigo-600 text-white hover:bg-gray-700 py-4 px-6 mb-14 rounded-xl flex hover:cursor-pointer duration-300 ">
                Join our discord
            </button>

            <button className="bg-stone-800 text-white hover:bg-gray-700 py-4 px-6 mb-14 rounded-xl flex hover:cursor-pointer duration-300 ">
                Watch on github
            </button>


            </div>

            <div className="flex justify-center">

            <span className="justify-center">
            <Image src="/assets/img/map.jpg" alt="balance" width="500" height="216" className="rounded-3xl " />
            </span>

            </div>


            </div>
            
        </section>
    );
}


export default Footer;