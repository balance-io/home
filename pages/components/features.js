import Image from "next/image";

function Features() {
    return (
        <div className="flex justify-center lg:pr-48 lg:pl-48 md:pr-20 md:pl-20 pr-8 pl-8 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full  gap-8 " >

                <div>
                    <Image src="/assets/icons/apple.jpg" alt="balance" width="25" height="25" className="" />
                    <h1 className="text-2xl font-semibold">Native to Apple platforms</h1>
                    <p>Balance is built with Swift, UIKit 	&#38; Swift UI to make the most of incredible developer APIs Apple provides.</p>
                </div>

                <div>
                    <Image src="/assets/icons/safari.jpg" alt="balance" width="22" height="25" className="" />
                    <h1 className="text-2xl font-semibold">Safari Extension Integration</h1>
                    <p>Our wallet is woven deeply into the Safari browser so dapp developers can finally start shipping for the mobile web.</p>
                </div>

                <div>
                    <Image src="/assets/icons/web.jpg" alt="balance" width="20" height="20" className="" />
                    <h1 className="text-2xl font-semibold">Truly Open Source Code</h1>
                    <p>We believe the people who use open source protocols deserve interfaces that respect the community&apos;s values.</p>
                </div>

                <div>
                    <Image src="/assets/icons/etherans.jpg" alt="balance" width="20" height="25" className="" />
                    <h1 className="text-2xl font-semibold">Funded By Ethereans</h1>
                    <p>Balance is fully funded by open crowdfunding campaigns that anyone in the world could participate in.</p>
                </div>

                <div>
                    <Image src="/assets/icons/evm.jpg" alt="balance" width="20" height="25" className="" />
                    <h1 className="text-2xl font-semibold">Focused on the EVM</h1>
                    <p>We are building on top of the stack that supports the Ethereum Virtual Machine so we can support many protocols.</p>
                </div>

                <div>

                    <Image src="/assets/icons/lock.jpg" alt="balance" width="20" height="25" className="" />

                    <h1 className="text-2xl font-semibold">Security Community Support</h1>

                    <p>Our code will be reviewed regularly by the most reputable auditors in Ethereum &#38; open for any security researchers to explore.</p>
                </div>

            </div>
        </div>
    );
}
export default Features;