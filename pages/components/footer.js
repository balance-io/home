import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <section className=" pt-6 p-6 bg-[#131415] w-screen justify-center sticky pr-20 pl-20">

      <h1 className="text-white text-center text-3xl pb-10 pt-10 ">
        How <b className="font-medium">you</b> can help{" "}
        <b className="font-medium">us</b> before{" "}
        <b className="font-medium">we </b> launch the app{" "}
      </h1>
      
      <div className="md:grid hidden">
        <div className="flex gap-3 justify-center">
          <a href="https://twitter.com/Balance_io">
            <div className="flex bg-sky-500 text-white py-6 px-8 rounded-xl mb-14 font-semibold whitespace-nowrap space-x-2 hover:bg-gray-700 hover:cursor-pointer duration-300">
              <span className="hidden md:flex"> <Image src="/Twitter.svg" alt="balance" width="25" height="25" className="" /> </span>
              <p className="text-2xl font-normal">Follow on <b>Twitter</b></p>
            </div>
          </a>
          <a href="https://discord.gg/sZtdVDrVGH">
            <div className="flex bg-indigo-600 text-white py-6 px-8 rounded-xl mb-14 font-semibold whitespace-nowrap space-x-2 hover:bg-gray-700 hover:cursor-pointer duration-300">
              <span className="hidden md:flex"> <Image src="/Discord.svg" alt="balance" width="30" height="30" className="" /> </span>
              <p className="text-2xl font-normal">Join our <b className='font-bold'>Discord</b></p>
            </div>
          </a>
          <a href="https://github.com/balance-io">
            <div className="flex bg-stone-800 text-white py-6 px-8 rounded-xl mb-14 font-semibold whitespace-nowrap space-x-2 hover:bg-gray-700 hover:cursor-pointer duration-300">
              <span className="hidden md:flex"> <Image src="/Github.svg" alt="balance" width="30" height="30" className="" /> </span>
              <p className="text-2xl font-normal">View on <b className='font-bold'>Github</b></p>
            </div>
          </a>



          {/* <button className="bg-sky-500 text-white hover:bg-gray-700 py-4 px-6 mb-14 rounded-xl flex hover:cursor-pointer duration-300 ">
              Follow on twitter
            </button>

            <button className="bg-indigo-600 text-white hover:bg-gray-700 py-4 px-6 mb-14 rounded-xl flex hover:cursor-pointer duratgion-300 ">
              Join our discord
            </button>

            <button className="bg-stone-800 text-white hover:bg-gray-700 py-4 px-6 mb-14 rounded-xl flex hover:cursor-pointer duration-300 ">
              Watch on github
            </button> */}
        </div>

        <div className="flex  justify-between ">
          <div className="justify-end">

            <h2 className="text-white text-3xl">Balance Software, Inc.</h2>
            <p className="text-slate-300">San Francisco, California</p>
            <div className="pb-5" />
            <h2 className="text-white text-3xl ">Want to visit us?</h2>
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

            <h1 className="text-white pt-4 justify-end text-3xl font-semibold">
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



      <div className="md:hidden ">
        <div className="flex gap-3 justify-center">
          <button className="bg-sky-500 text-white hover:bg-gray-700 py-4 px-6 mb-14 rounded-xl flex hover:cursor-pointer duration-300 ">
            Twitter
          </button>

          <button className="bg-indigo-600 text-white hover:bg-gray-700 py-4 px-6 mb-14 rounded-xl flex hover:cursor-pointer duration-300 ">
            Discord
          </button>

          <button className="bg-stone-800 text-white hover:bg-gray-700 py-4 px-6 mb-14 rounded-xl flex hover:cursor-pointer duration-300 ">
            Github
          </button>
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
        <div className="  flex justify-center">




          <div className="justify-end">
            <div className="pb-6 justify-end">


              <h2 className="text-white text-3xl font-semibold">Balance Software</h2>
              <p className="text-slate-300">San Francisco, California</p>
              <div className="pb-5" />
              <h2 className="text-white text-3xl font-semibold">Want to visit us?</h2>
              <p className="text-slate-300">We love having guests from <br />the Ethereum community in our <br /> Presidio Studio</p>

            </div>



            <div className="justify-end w-48">
              <h1 className="text-white justify-end text-3xl font-semibold">
                Contact
              </h1>

              <p className="text-slate-300">
                hello@balance.io <br />
                Intercom Chat (SMS) <br />
                Request a Call Back
              </p>

              <h1 className="text-white pt-4 justify-end text-3xl font-semibold">
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
      </div>





      <div className="pb-12" />
    </section>
  );
}


export default Footer;