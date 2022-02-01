import Image from "next/image";

export default function Hero() {
    return (
        <section className="hero container max-w-screen-lg mx-auto pt-10">
            {/* <div classNameName="hero container flex flex-col pt-14 p-6 w-screen rounded-b-3xl justify-center "> */}
            <h1 className="text-black text-center mx-auto text-3xl pb-5">The <b className="font-medium">open source wallet</b> for the <b className="font-medium">Apple & Ethereum</b> communities</h1>
            <div>
                <div className="flex justify-center pr-10">
                    <Image src="/Phone.svg" alt="balance" width="500" height="500" className="mx-auto" />
                </div>
            </div>
            <div className="flex justify-center items-center">
        <button className="bg-black hover:bg-gray-700 text-white py-4 px-6 rounded-lg mb-14 font-semibold"><Image src="/Rings.svg" alt="balance" width="20" height="20" className="align-middle" /> Join The <span className='font-bold'>Crowdfund</span></button>
      </div>
      <div className="pb-12" />
        </section>
    );
} 