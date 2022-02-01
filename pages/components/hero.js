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
            {/* </div> */}
        </section>
    );
} 