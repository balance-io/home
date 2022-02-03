import Image from "next/image";
import Link from "next/link";
export default function Hero() {
    return (
        <section className="hero container max-w-screen-lg mx-auto pt-10 pr-8 pl-8 md:pr-10 md:pl-10">
            {/* <div classNameName="hero container flex flex-col pt-14 p-6 w-screen rounded-b-3xl justify-center "> */}
            <h1 className="text-black text-center mx-auto text-4xl pb-5 tracking-wide">The open source wallet for the <br></br><b className="font-bold">Apple & Ethereum</b> communities</h1>

            <div className="flex gap-2 justify-center align-center pt-10">
                <Link href="https://discord.gg/sZtdVDrVGH">
                    <div className="flex bg-gradient-to-br from-[#5ACDFF] to-[#1762E1] text-white py-2 px-2 rounded-xl mb-14 font-semibold whitespace-nowrap space-x-2 hover:bg-gray-700 hover:cursor-pointer duration-300">
                        <span className="hidden md:flex"> <Image src="/Testflight2.svg" alt="balance" width="50" height="50" className="" /> </span>
                        <p className="pl-2 text-sm antialiased">Download now on <br></br><b className='flex tracking-normal justify-center font-bold text-center text-2xl'>TestFlight</b></p>
                    </div>
                </Link>
            </div>
            <div className="pb-12" />
        </section>
    );
}