import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
    return (
        <div className="flex pt-12 p-4  justify-center ">
            <div className="flex space-x-12 text-xl items-center		  ">
                <Link href="">
                    <a className="link link-underline link-underline-black text-black" target="_blank">
                        Wallet
                    </a>
                </Link>

                <Link href="">
                    <a className="link link-underline link-underline-black text-black" target="_blank">
                        Community
                    </a>
                </Link>

                {/* balance.svg */}
                {/* image balance.png */}
                <img src="../../balance.svg" alt="balance" className="" />

                <Link href="">
                    <a className="link link-underline link-underline-black text-black" target="_blank">
                        Developers
                    </a>
                </Link>

                <Link href="">
                    <a className="link link-underline link-underline-black text-black" target="_blank">
                        Store
                    </a>
                </Link>
            </div>
        </div>
    );
}