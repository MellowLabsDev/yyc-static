import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import About from '../components/sections/About.tsx'
import FAQ from '../components/sections/FAQ.tsx'
import Team from '../components/sections/Team.tsx'
import LandingHero from '../components/sections/LandingHero.tsx'
import Gallery from '../components/sections/Gallery.tsx'
import HolderBenefitsSection from '../components/sections/hb.tsx'
import CompRm from '../components/sections/CompRm.tsx'
import AOS from "aos";

export default function Home() { 
  useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  return (
    <div className="min-h-screen h-full w-full flex flex-col bg-brand-light overflow-hidden">
      <Head>
        <title>YSS | Yeti Secret Society</title>
        <meta name="description" content="Join the Yeti Secret Society today!" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://yetis.com/"/>
        <meta property="og:title" content="YSS | Yeti Secret Society"/>
        <meta property="og:description" content="Join the Yeti Secret Society today!"/>       
        <meta property="og:image" content="https://yetis.com/images/metaImg.png"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://yetis.com/"/>
        <meta property="twitter:title" content="YSS | Yeti Secret Society"/>
        <meta property="twitter:description" content="Join the Yeti Secret Society today!"/>
        <meta property="twitter:image" content="https://yetis.com/images/metaImg.png"/>      
        
        
      </Head>
      <LandingHero/>
      <About/>
      <HolderBenefitsSection/>
      <CompRm/>
      <Team/>
      {/* <Gallery/> */}
      <FAQ/>
      
    </div>
  )
}
