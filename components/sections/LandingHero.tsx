import React, { useEffect } from 'react';
import { Image  } from 'react-bootstrap';
import Link from 'next/link';
import AOS from 'aos';

function LandingHero() {
      return (
        <>
        <img className='landing-hero-image' src='/images/banners/home.png'></img>
        <div className='landing-hero-2'>
            <img className='hero-yeti' src='/images/hero-yeti.png'></img>
        </div>
        <div className='landing-hero-3'>
            <div className='mt-6'>
                <div className="justtify-content-center">
                    <div className="row align-items-center justtify-content-center" style={{textAlign:'center'}}>
                      <h1 className='display-3 fw-bold lh-1 mb-3 bubblegum mt-4'>Guaranteed Mint Access</h1> 
                    </div>
                </div>
                
                <div className="justtify-content-center pb-4">
                  <div className="row align-items-center text-align-center" style={{textAlign:'center'}}>
                    <a href='https://mint.yetis.com/' target="_blank"><button className='register-button montreg' >Mint</button></a>
                  </div>
                </div>
              </div>              
        </div> 
        <div className='landing-hero-4'>       
          <div className="justtify-content-center">
              <div className="row align-items-center justtify-content-center" style={{textAlign:'center'}}>
                <h1 className='display-3 fw-bold lh-1 mb-3 my-4'>As Seen On</h1> 
              </div>
          </div>
          <div className="container-fluid">
            <div className="row medium-row align-items=lg=center">
              <div className="col-12">
                <div className="d-inline-block m-2" >
                  <a href="https://www.thecoinrepublic.com/2022/06/30/top-10-nft-collections-you-should-know-about-in-2022/" target="_blank"><img className="brands" src="/images/brands/coinRepublic.svg"></img></a>
                </div>      
                <div className="d-inline-block m-2" >
                  <a href="https://cryptoadventure.com/5-bayc-like-nft-projects-to-watch-out-for-in-2022/" target="_blank"><img className="brands" src="/images/brands/cryptoAdventure.svg"></img></a>
                </div>      
                <div className="d-inline-block m-2" >
                  <a href="https://finance.yahoo.com/news/yeti-yacht-club-project-wishes-202224717.html" target="_blank"><img className="brands" src="/images/brands/yahooFinance.svg"></img></a>
                </div>      
                <div className="d-inline-block m-2" >
                  <a href="https://hackernoon.com/the-quest-of-investors-for-the-next-bored-ape-nft-project" target="_blank"><img className="brands" src="/images/brands/hackernoon.svg"></img></a>
                </div>     
                <div className="d-inline-block m-2" >
                  <a href="https://techbullion.com/yeti-yacht-club-a-project-betting-on-mega-yachts-and-nfts/" target="_blank"><img className="brands" src="/images/brands/techbullion.svg"></img></a>
                </div>     
                {/* <div className="d-inline-block m-2" >
                  <a href=""><img className="brands" src="/images/brands/zcrypto.svg"></img></a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        </>
      );
    }
export default LandingHero;
