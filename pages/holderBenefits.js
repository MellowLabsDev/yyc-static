import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import AOS from 'aos';
import Hero from '../components/sections/Hero.tsx'

export default function HolderBenefits() { 
  
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
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
        <title>YSS | Holder Benefits</title>
        <meta name="description" content="Join the Yeti Secret Society today!" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://yetis.com/"/>
        <meta property="og:title" content="YSS | Tokenomics"/>
        <meta property="og:description" content="Join the Yeti Secret Society today!"/>       
        <meta property="og:image" content="https://yetis.com/images/metaImg.jpg"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://yetis.com/"/>
        <meta property="twitter:title" content="YSS | Tokenomics"/>
        <meta property="twitter:description" content="Join the Yeti Secret Society today!"/>
        <meta property="twitter:image" content="https://yetis.com/images/metaImg.jpg"/>      
        
        
      </Head>
      
      
      <Hero classname='holder-banner' imgSrc='/images/banners/yachtParty.png'/>
      <div id='holder-benefits'>
        <div className="container">
          <div className="row align-items-center h-100 justify-content-center text-center">
            <div className="col">
              <div style={{textAlign:"left!important"}}>
                <h1 className="display-3 bubblegum">Holder Benefits</h1>
                <p className="lead">
                <span className="bold-list">Yeti Secret Society is looking to enhance our investor's lifestyle by providing only the most luxurious amenities. As with all aspects of this project, we are looking to deliver a first-class experience and value to our community.
                </span><br/><br/>
                <span className="bold-list">Yeti Secret Society</span> - The Most Exclusive NFT club on Earth
                <br/><br/>
                </p>
              </div>
              <img src='/images/charts/holderChart.png' style={{maxWidth:'90vw'}}></img>

            </div>
          </div>
        </div>
        </div>

      
    </div>
  )
}
