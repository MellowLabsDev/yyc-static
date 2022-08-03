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
              <p className="lead">
                Yetis were once nomadic creatures that thrived in the remote mountains of the Himalayas. They lead simple lives jumping over rocks and playing with sticks to kill time. 
              <br/>
              </p>
              <p className="lead">
                Little did they know their lives would  soon change forever. As Civilization encroached closer and closer to the Yeti’s domain, they feared what they saw as small hairless beings. For a long time they avoided humans, and humans avoided them. 
              <br/>
              </p>
              <p className="lead">
                Finally a single curious yeti, named Bongo, would wander into town one night. Lead by his nose, he wondered into a fine tourist restaurant on the base of a mountain. Bongo opened the fridge and began tasting all of the foods they had stored. At the first bite his taste buds ignited into a dopamine rush that would forever change the course of yeti kind.
              <br/>
              </p>
              <p className="lead">
                As word spread in the Yeti village, more and more yetis would wander into town to try what was described to them as food much better than the sticks and bugs they were used to eating.
              <br/>
              </p>
              <p className="lead">
                Slowly humans accepted the Yetis, and as the western world found out, the yetis would come to be treated as celebrities. Large crowds would gather wherever they went. They were hired for commercials, acting gigs, product placements, and private parties. They became symbols of the ultra elite, the rich and famous. Everyone wanted to be seen with a Yeti. 
              <br/>
              </p>
              <p className="lead">
                Elite Clubs everywhere would invite the Yetis, in the hopes they would come. They were treated to the World’s best. Yetis became addicted to the high life. They now lived for fine wines, 5 star food, and Cuban cigars.
              <br/>
              </p>
              <p className="lead">
                After being in the mountains so long, the Yetis realized they loved the water more than anything else. They were tired of being chased by fans and wanted to get away. For this reason the Yetis decided they would found their own club. One day they decided they wanted a club so exclusive that only other celebrities, free thinkers and the rich and famous could join them. They wanted to live their life out in pure bliss and relaxation. They wanted nothing less than private islands, mega yachts and their own permanent club venue.
              <br/>
              </p>
              <p className="lead">
                It was on this very day that the Yeti Secret Society was born.
              </p>

            </div>
          </div>
        </div>
        </div>
      
    </div>
  )
}
