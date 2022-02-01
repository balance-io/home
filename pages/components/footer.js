import Image from "next/image";
import Link from "next/link";

function Footer() {
    return (
      <section className=" pt-6 p-6 bg-[#131415] w-screen justify-center sticky   pr-20 pl-20">
       
        <h1 className="text-white text-center text-2xl pb-10 ">
          How <b className="font-medium">you</b> can help{" "}
          <b className="font-medium">Us</b> before{" "}
          <b className="font-medium">we </b> launch the app{" "}
        </h1>
        
        <div className="">
          <div className="flex gap-3 justify-center">
            <button className="bg-sky-500 text-white hover:bg-gray-700 py-4 px-6 mb-14 rounded-xl flex hover:cursor-pointer duration-300 ">
              Follow on twitter
            </button>

            <button className="bg-indigo-600 text-white hover:bg-gray-700 py-4 px-6 mb-14 rounded-xl flex hover:cursor-pointer duration-300 ">
              Join our discord
            </button>

            <button className="bg-stone-800 text-white hover:bg-gray-700 py-4 px-6 mb-14 rounded-xl flex hover:cursor-pointer duration-300 ">
              Watch on github
            </button>
          </div>

          <div className="flex  justify-between ">
            <div className="justify-end">
              <h1 className="text-white justify-end text-4xl font-semibold pb-7">
                Balance
              </h1>

             <h2 className="text-white text-xl">Balance Software, Inc.</h2>
             <p className="text-slate-300">San Francisco, California</p>
            <div className="pb-5" />
             <h2 className="text-white text-xl">Want to visit us?</h2>
                <p className="text-slate-300">We love having guests from <br />the Ethereum community in our <br /> Presidio Studio</p>
              
            </div>

            <span className="justify-center">
              <Image
                src="/assets/img/map.jpg"
                alt="balance"
                width="550"
                height="216"
                className="rounded-3xl "
              />
            </span>

            <div className="justify-end w-48">
              <h1 className="text-white justify-end text-3xl font-semibold">
                Contact
              </h1>

              <p className="text-slate-300">
                hello@balance.io <br />
                Intercom Chat (SMS) <br />
                Request a Call Back
              </p>

              <h1 className="text-white justify-end text-3xl font-semibold">
                Media
              </h1>

              <p className="text-slate-300">
                Blog <br />
                Brand Kit <br />
                Press contact
              </p>
            </div>
          </div>
        </div>
        <div className="pb-12" />
      </section>
    );
}


export default Footer;