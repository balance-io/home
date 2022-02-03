import Image from "next/image";
import Link from "next/link";
export default function Hero() {
    return (
        <section className="hero container max-w-screen-lg mx-auto pt-44 pb-44 md:pr-10 md:pl-10">
            {/* <div classNameName="hero container flex flex-col pt-14 p-6 w-screen rounded-b-3xl justify-center "> */}
            <h1 className="text-black text-center text-5xl pb-5 tracking-tight">The open source wallet for the <br></br><b className="font-bold">Apple & Ethereum</b> communities</h1>

            <div className="flex gap-2 justify-center align-center pt-10 drop-shadow-[0_25px_25px_rgba(20,164,245,0.25)] mb-10">
                <Link href="https://discord.gg/sZtdVDrVGH">
                    <div className="flex bg-gradient-to-r from-[#5ACDFF] to-[#1762E1] text-white py-2 px-2 rounded-xl font-semibold whitespace-nowrap space-x-1 hover:cursor-pointer duration-300">
                        <span className="hidden md:flex"> <Image src="/Testflight2.svg" alt="balance" width="50" height="50" className="" /> </span>
                        <p className="text-rg antialiased pl-1.5 pr-1 tracking-tight">Download now on<b className='flex tracking-normal justify-center font-semibold text-center text-3xl leading-6 pb-1.5'>TestFlight</b></p>
                    </div>
                </Link>
            </div>
            <div className="pb-12" />
        </section>
    );
}