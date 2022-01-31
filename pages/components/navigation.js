import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
    return (
        <div className="flex pt-12 p-6 bg-gray-100 w-screen justify-center ">
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
                <div>
                    <Image src="/Balance.svg" alt="balance" width="60" height="60" className="" />
                </div>
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