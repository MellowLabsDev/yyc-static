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
        <title>YSS | Influencer</title>
        <meta name="description" content="Join the Yeti Secret Society today!" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://yetis.com/"/>
        <meta property="og:title" content="YSS | Influencer"/>
        <meta property="og:description" content="Join the Yeti Secret Society today!"/>       
        <meta property="og:image" content="https://yetis.com/images/metaImg.png"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://yetis.com/"/>
        <meta property="twitter:title" content="YSS | Influencer"/>
        <meta property="twitter:description" content="Join the Yeti Secret Society today!"/>
        <meta property="twitter:image" content="https://yetis.com/images/metaImg.png"/>      
        
        
      </Head>
      
      <Hero classname='story-banner' imgSrc='/images/banners/cigarLounge.png' />
      <div id='story'>
      <div className="container">
          <div className="row align-items-center h-100 justify-content-center pt-5">
            <div className="col">
              {/* <h1 className="display-3 fw-bold lh-1 mb-3 bubblegum mt-4">Story</h1> */}
              <p className="lead">
              Thanks for the quick response! I will explain what we can offer your channel and a bit more about Yeti Secret Society.               <br/>
              </p>
              <p className="lead">
              The Yeti Secret Society provides ultra-exclusive luxury experiences and high-end networking events internationally. We recently launched our membership NFT presale and are now seeking influencers to partner with.               <br/>
              </p>
              <p className="lead">
              We have a system that allows any influencer to use one of our links to generate 10% of every purchase ( approximately $330-$500 USDC profit potential) made during the Yeti sales event.
              <br/>
              </p>
              <p className="lead">
              We believe that a channel of your caliber can generate hundreds of thousands of dollars in a short period of time using this proven model.               <br/>
              </p>
              <p className="lead">
              The core features of Yeti Secret Society Include: 
              <br/>
              </p>
              <h2 className="underline">
              Networking Redefined
              <br/>
              </h2>
              <p className="lead">
              The Yeti Secret Society allows you to brush shoulders with an elite community at members-only events. Our first event will be in Las Vegas December 16-18th, followed by a massive party on a private island in Italy January 27, 2023, and an all-inclusive cruise on the world's largest sailing vessel from Nice to Monaco May 10-13th, 2023.
              
              </p>
              <h2 className="underline">
              Intellectual Property Rights & DAO Membership
              </h2>
              <p className="lead">
              Yeti owners have full intellectual property rights of their individual NFTs, and be eligible for membership of the Yeti DAO - further information on protocols will be revealed.              
              </p>
              <h2 className="underline">
              Giveaways              </h2>
              <p className="lead">
              YSS is giving away a number of Rolex watches to the public in 2022. In 2023, only YSS owners will be eligible to win one supercar and custom merch.              </p>
              <h2 className="underline">
              Collective Influence
              </h2>
              <p className="lead">
              Our secret society meets in power to retain knowledge and share amongst our global network ideas that are dedicated to scientific truth. Some call us a club or an organisation, but this is an elite group of free thinker's that are depicted as living in the shadows and pulling the strings and levers of power. Buyers are given secret locations and mastermind events among exotic trips, cars and prestige experiences. Our story is different then most secret societies but promises superior status and recognition, we are the Yet's Secret Society - loyal, mysterious and full of exciting personality. Are you ready?
              </p>
              <h2 className="underline">
              Recent Media Coverage
              </h2>
              <p className="lead">
              <a href='https://techbullion.com/yeti-yacht-club-a-project-betting-on-mega-yachts-and-nfts/'>https://techbullion.com/yeti-yacht-club-a-project-betting-on-mega-yachts-and-nfts/</a>
              <br/>

              <a href='https://hackernoon.com/the-quest-of-investors-for-the-next-bored-ape-nft-project'>https://hackernoon.com/the-quest-of-investors-for-the-next-bored-ape-nft-project</a>
              <br/>

              <a href='https://finance.yahoo.com/news/yeti-yacht-club-project-wishes-202224717.html'>https://finance.yahoo.com/news/yeti-yacht-club-project-wishes-202224717.html</a>
              <br/>

              <a href='https://cryptoadventure.com/5-bayc-like-nft-projects-to-watch-out-for-in-2022/'>https://cryptoadventure.com/5-bayc-like-nft-projects-to-watch-out-for-in-2022/</a>
              <br/>
            </p>
              <p className="lead">
              To get started, we would be happy to give you a referral link with the10% commission and then get you an information packet to give you the tools you need to sell it.
               </p>
              <p className="lead">
              Let me know if that's something you would be interested in.
              </p>
              <p className="lead">
              Best,
              <br/>
              Arvin Khamseh
              <br/>
              Partnership Director 
              <br/>
              Yeti Secret Society 
              <br/>
              <a href='https://yetis.com/'>Yetis.com</a>          
              </p>

            </div>
          </div>
        </div>
        </div>
      
    </div>
  )
}
