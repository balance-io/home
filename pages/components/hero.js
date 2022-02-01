import Image from "next/image";

export default function Hero() {
    return (
        <section className="hero container max-w-screen-lg mx-auto pt-10">
            {/* <div classNameName="hero container flex flex-col pt-14 p-6 w-screen rounded-b-3xl justify-center "> */}
            <h1 className="text-black text-center mx-auto text-3xl pb-5">The <b className="font-medium">open source wallet</b> for the <b className="font-medium">Apple & Ethereum</b> communities</h1>
            <div>
                <div className="flex place-content-center pr-14">
                    <Image src="/Phone.svg" alt="balance" width="700" height="700" className="mx-auto" />
                </div>
            </div>
            <div className="flex justify-center align-center">
                <div className="flex bg-black text-white py-4 px-6 rounded-xl mb-14 font-semibold whitespace-nowrap space-x-2 hover:bg-gray-700 hover:cursor-pointer duration-300"><Image src="/Rings.svg" alt="balance" width="20" height="20" /> <p>Join The <b className='font-bold'>Crowdfund</b></p></div>
            </div>
      <div className="pb-12" />
        </section>
    );
}