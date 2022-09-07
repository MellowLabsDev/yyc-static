import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import AOS from 'aos';
import Hero from '../components/sections/Hero.tsx'

export default function Story() { 
  
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
        <title>YSS | Story</title>
        <meta name="description" content="Join the Yeti Secret Society today!" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://yetis.com/"/>
        <meta property="og:title" content="YSS | Story"/>
        <meta property="og:description" content="Join the Yeti Secret Society today!"/>       
        <meta property="og:image" content="https://yetis.com/images/metaImg.png"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://yetis.com/"/>
        <meta property="twitter:title" content="YSS | Story"/>
        <meta property="twitter:description" content="Join the Yeti Secret Society today!"/>
        <meta property="twitter:image" content="https://yetis.com/images/metaImg.png"/>      
        
        
      </Head>
      
      <Hero classname='story-banner' imgSrc='/images/banners/cigarLounge.png' />
      <div id='story'>
      <div className="container">
          <div className="row align-items-center h-100 justify-content-center">
            <div className="col">
              <h1 className="display-3 fw-bold lh-1 mb-3 bubblegum mt-4">Story</h1>
              <p className="lead text-justify">
              Yetis were once nomadic creatures that thrived in the remote mountains of the Himalayas. They led simple lives, jumping over rocks and playing in the snow to kill time.              
              <br/>
              </p>
              <p className="lead text-justify">
              Little did they know their lives would soon change forever. As Civilization encroached closer and closer to the Yeti’s domain, they feared what they saw as small hairless beings. For a long time, they avoided humans, and humans avoided Yetis.              
              <br/>
              </p>
              <p className="lead text-justify">
              Finally, a single curious Yeti, named Bongo, wandered into a nearby town one night. Led by his nose, he snuck into a fine tourist restaurant at the base of a mountain. Bongo opened the fridge and began tasting all these delicious drinks and foods. At the first bite, his taste buds ignited into a dopamine rush that would forever change the course of Yeti kind.
              <br/>
              </p>
              <p className="lead text-justify">
              As word of these new experiences spread in the Yeti society, more and more Yetis would wander into town to try a taste of the finer life.
              <br/>
              </p>
              <p className="lead text-justify">
              Slowly humans accepted the Yetis, and as the Western world found out, the Yetis would come to be treated as celebrities. Large crowds would gather wherever they went. They were hired for commercials, acting gigs, product placements, and private parties. They became symbols of the ultra-elite, the rich and famous. Everyone wanted to be seen with a Yeti.
              <br/>
              </p>
              <p className="lead text-justify">
              Elite Clubs everywhere would invite the Yetis, in the hopes they would come. They were treated to the world’s best and quickly became addicted to the high life. They now lived for fine wines, the Michelin Star dining, and Cuban cigars – they indulged.
              <br/>
              </p>
              <p className="lead text-justify">
              However, Yetis will be Yetis, and soon enough they got tired of the superficial and paparazzi filled life of humans. They’d seen them burn through this world and needed to make a change. And even though the Yetis wanted to live their lives out in comfort and luxury, they wanted to do so with a purpose – to protect humanity from its self-destructive tendencies, to protect our planet, and to protect the Yeti way of life.
              <br/>
              </p>
              <p className="lead text-justify">
              On February 22, 2022, a counsel of Yeti Elders was called. They vowed to build a secret Lodge where Yetis and humans could congregate in peace. Only the best of humanity would be invited – scientists, free thinkers, innovators, business leaders and socialites. By bringing these groups together, in secret and with a purpose, Yetis could really make an impact.
              </p>
              <p className="lead text-justify">
              It was on this very day that the Yeti Secret Society was born.
              </p>

            </div>
          </div>
        </div>
        </div>
      
    </div>
  )
}
