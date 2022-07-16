import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import About from '../components/sections/About.tsx'
import FAQ from '../components/sections/FAQ.tsx'
import Team from '../components/sections/Team.tsx'
import Hero from '../components/sections/Hero.tsx'
import Gallery from '../components/sections/Gallery.tsx'

export default function Home() { 
  return (
    <div className="min-h-screen h-full w-full flex flex-col bg-brand-light overflow-hidden">
      <Head>
        <title>YYC | Yeti Yacht Club</title>
        <meta name="description" content="Join the Yeti Yacht Club today!" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://yeticlub.io/"/>
        <meta property="og:title" content="YYC | Yeti Yacht Club"/>
        <meta property="og:description" content="Join the Yeti Yacht Club today!"/>       
        <meta property="og:image" content="https://yeticlub.io/images/metaImg.jpg"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://yeticlub.io/"/>
        <meta property="twitter:title" content="YYC | Yeti Yacht Club"/>
        <meta property="twitter:description" content="Join the Yeti Yacht Club today!"/>
        <meta property="twitter:image" content="https://yeticlub.io/images/metaImg.jpg"/>      
        
        
      </Head>
        <Hero classname='home-banner'/>
      <About/>
      {/* <Gallery/> */}
      <FAQ/>
      
    </div>
  )
}
