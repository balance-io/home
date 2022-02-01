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
      <Features />
      <div className='mb-40' />
      <Footer />
      
    </div>
  )
}
