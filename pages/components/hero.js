import Image from "next/image";

export default function Hero() {
    return (
        <section className="hero container max-w-screen-lg mx-auto pt-10 pr-10 pl-10">
            {/* <div classNameName="hero container flex flex-col pt-14 p-6 w-screen rounded-b-3xl justify-center "> */}
            <h1 className="text-black text-center mx-auto text-3xl pb-5">The <b className="font-medium">open source wallet</b> for the <b className="font-medium">Apple & Ethereum</b> communities</h1>
            <div>
                <div className="flex place-content-center pr-14 -pb-5">
                    <Image src="/Phone.svg" alt="balance" width="600" height="600" className="mx-auto" />
                </div>
            </div>
            <div className="flex justify-center align-center">
                <div className="flex bg-black text-white py-6 px-8 rounded-xl mb-14 font-semibold whitespace-nowrap space-x-2 hover:bg-gray-700 hover:cursor-pointer duration-300"><Image src="/Rings.svg" alt="balance" width="20" height="20" /> <p className="text-2xl font-normal">Join The <b className='font-bold'>Crowdfund</b></p></div>
            </div>
      <div className="pb-12" />
        </section>
    );
}