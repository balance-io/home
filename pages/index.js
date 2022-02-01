import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navigation from "./components/navigation";
import Hero from "./components/hero";
import Features from "./components/features";
import Announcement from './components/announcement';
import Footer from "./components/footer";


export default function Home() {
  return (
    <div className="w-screen">
      <Head>
        <title>Balance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Announcement />
      <Hero />
      <div className="flex justify-center items-center">
        <button className="bg-black hover:bg-gray-700 text-white py-4 px-6 rounded-lg mb-14 font-semibold"><Image src="/Rings.svg" alt="balance" width="20" height="20" className="align-middle" /> Join The <span className='font-bold'>Crowdfund</span></button>
      </div>
      <Features />
      <Footer />
      <div className="pb-60" />
    </div>
  )
}
