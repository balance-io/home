import Image from "next/image";
import Link from "next/link";
export default function Hero() {
    return (
        <section className="hero container max-w-screen-lg mx-auto pt-10 pr-8 pl-8 md:pr-10 md:pl-10">
            {/* <div classNameName="hero container flex flex-col pt-14 p-6 w-screen rounded-b-3xl justify-center "> */}
            <h1 className="text-black text-center mx-auto text-3xl pb-5">The <b className="font-medium">open source wallet</b> for the <b className="font-medium">Apple & Ethereum</b> communities</h1>
            <div>
                <div className="flex place-content-center pr-14 -pb-5">
                    <Image src="/Phone.svg" alt="balance" width="600" height="600" className="mx-auto" />
                </div>
            </div>
            <div className="flex gap-2 justify-center align-center">
                <Link href="https://ricburton.mirror.xyz/crowdfunds/0x9500b696F00AE82CA97d06379CF0A2b60B467040" passHref>
                    <div className="flex bg-[#131415] text-white py-6 px-8 rounded-xl mb-14 font-semibold whitespace-nowrap space-x-2 hover:bg-gray-700 hover:cursor-pointer duration-300">
                        <span className="hidden md:flex"> <Image src="/Rings.svg" alt="balance" width="30" height="30" className="" /> </span>
                        <p className="text-2xl font-normal pl-2">Join The <b className='font-bold'>Crowdfund</b></p>
                    </div>
                </Link>

                <a href="https://discord.gg/sZtdVDrVGH">
                    <div className="flex bg-indigo-600 text-white py-6 px-8 pr-12 rounded-xl mb-14 font-semibold whitespace-nowrap space-x-2 hover:bg-gray-700 hover:cursor-pointer duration-300">
                        <span className="hidden md:flex"> <Image src="/Discord.svg" alt="balance" width="30" height="30" className="" /> </span>
                        <p className="text-2xl font-normal pl-2">Join our <b className='font-bold'>Discord</b></p>
                    </div>
                </a>
            </div>
            <div className="pb-12" />
        </section>
    );
}