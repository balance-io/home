import Image from "next/image";

export default function Hero() {
    return (
        <section class="hero container max-w-screen-lg mx-auto pb-14 pt-10">
            {/* <div className="hero container flex flex-col pt-14 p-6 w-screen rounded-b-3xl justify-center "> */}
            <h1 class="text-black text-center mx-auto text-3xl pb-10">The <b class="font-medium">open source wallet</b> for the <b class="font-medium">Apple & Ethereum</b> communities</h1>
            <div>
                <Image src="/Phone.svg" alt="balance" width="500" height="500" className="mx-auto" />
            </div>
            {/* </div> */}
        </section>
    );
} 