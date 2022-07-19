import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import AOS from 'aos';
import Hero from '../components/sections/Hero.tsx'

export default function HolderBenefits() { 
  
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

  const heroImg='/images/banner.jpg';
  
  return (
    <div className="min-h-screen h-full w-full flex flex-col bg-brand-light overflow-hidden">
      <Head>
        <title>YYC | Holder Benefits</title>
        <meta name="description" content="Join the Yeti Yacht Club today!" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://yeticlub.io/"/>
        <meta property="og:title" content="YYC | Tokenomics"/>
        <meta property="og:description" content="Join the Yeti Yacht Club today!"/>       
        <meta property="og:image" content="https://yeticlub.io/images/metaImg.jpg"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://yeticlub.io/"/>
        <meta property="twitter:title" content="YYC | Tokenomics"/>
        <meta property="twitter:description" content="Join the Yeti Yacht Club today!"/>
        <meta property="twitter:image" content="https://yeticlub.io/images/metaImg.jpg"/>      
        
        
      </Head>
      
      
      <Hero classname='holder-banner'/>
      <div id='holder-benefits'>
        <div className="container">
          <div className="row align-items-center h-100 justify-content-center">
            <div className="col" style={{maxWidth:"900px", textAlign:'center'}}>
              <h1 className="display-3 bubblegum" style={{textAlign:'center'}}>Holder Benefits</h1>
              <p className="lead">
              <span className="bold-list">Yeti Yacht Club is looking to enhance our investor's lifestyle by providing only the most luxurious amenities. As with all aspects of this project, we are looking to deliver a first-class experience and value to our community.
              </span><br/><br/>
              <span className="bold-list">Yeti Yacht Club</span> - The Most Exclusive NFT club on Earth
              <br/><br/>
              </p>
              <img src='/images/yetiHolderB.png' style={{maxWidth:'90vw'}}  data-aos="fade-up"></img>

            </div>
          </div>
        </div>
        </div>

      
    </div>
  )
}
