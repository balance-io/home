import Image from "next/image";

export default function Hero() {
    return (
        <section className="hero container max-w-screen-lg mx-auto pt-10">
            {/* <div classNameName="hero container flex flex-col pt-14 p-6 w-screen rounded-b-3xl justify-center "> */}
            <h1 className="text-black text-center mx-auto text-3xl pb-5">The <b className="font-medium">open source wallet</b> for the <b className="font-medium">Apple & Ethereum</b> communities</h1>
            <div>
                <div className="flex justify-center pr-10">
                    <Image src="/Phone.svg" alt="balance" width="600" height="600" className="mx-auto" />
                </div>
            </div>
            <div className="flex justify-center items-center ">
                <div className="flex bg-black hover:bg-gray-700 py-4 px-6 mb-14 rounded-xl flex hover:cursor-pointer duration-300 space-x-2">
                    <Image src="/Rings.svg" alt="balance" width="500" height="500" className="mx-auto" />
                </div>
                <button className=" text-white font-semibold"> Join The <b className='font-bold'>Crowdfund</b></button>
            </div>
        <div className="pb-12" />
        </section>
    );
} 