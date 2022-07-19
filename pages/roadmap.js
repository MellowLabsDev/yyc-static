import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import AOS from 'aos';
import Hero from '../components/sections/Hero.tsx'
import RoadmapComp from '../components/sections/Roadmap.tsx'

export default function Roadmap() { 
  
  useEffect(() => {
    AOS.init({
      startEvent: 'load',
      once: false,
    });
    // AOS.refresh();
  }, []);

  const [windowDimension, setWindowDimension] = useState(null)
    
  useEffect(() => {
    setWindowDimension(window.innerWidth)
  }, [])

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  const isBig = windowDimension >= 640
  
  return (
    <div className="min-h-screen h-full w-full flex flex-col bg-brand-light overflow-hidden">
      <Head>
        <title>YYC | Roadmap</title>
        <meta name="description" content="Join the Yeti Secret Society today!" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://yeticlub.io/"/>
        <meta property="og:title" content="YYC | Tokenomics"/>
        <meta property="og:description" content="Join the Yeti Secret Society today!"/>       
        <meta property="og:image" content="https://yeticlub.io/images/metaImg.jpg"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://yeticlub.io/"/>
        <meta property="twitter:title" content="YYC | Tokenomics"/>
        <meta property="twitter:description" content="Join the Yeti Secret Society today!"/>
        <meta property="twitter:image" content="https://yeticlub.io/images/metaImg.jpg"/>      
        
        
      </Head>      
      <Hero classname='roadmap-banner'/>
      <RoadmapComp/>
        
      
      
    </div>
  )
}
