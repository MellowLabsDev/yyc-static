import React, { useEffect } from 'react';
import { Image  } from 'react-bootstrap';
import AOS from '../../node_modules/aos';

function About() {

  useEffect(() => {
    AOS.init({
      startEvent: 'load',
      once: false,
    });
    // AOS.refresh();
  }, []);

      return (
        <>
        <div id='about'>
          <div className="container">
            {/* <h1 className="text-center ga-section-title">About the Yeti Yacht Club</h1> */}

              <div className='mb-6'>
                <div className="justtify-content-center">
                    <div className="row align-items-center justtify-content-center" style={{textAlign:'center'}}>
                      <h3>Get Whitelisted</h3> 
                    </div>
                </div>
                
                <div className="justtify-content-center">
                  <div className="row align-items-center text-align-center" style={{textAlign:'center'}}>
                    <a href='https://www.premint.xyz/yeti-yacht-club/'><button style={{color:'black'}} >Premint</button></a>
                  </div>
                </div>
              </div>

              <div className="row" style={{marginBottom:"4rem"}}>
              <div className="col-md-6">

                <img src="/images/yetigif.gif" alt="" className="left-image m-auto" />
              </div>
              
              <div className="col-md-6">

                <div className="row align-items-center h-100">
                  <div className="col" style={{ textAlign:"center"}}>
                    <h1 className="display-3 bubblegum">About the Yeti Yacht Club</h1>
                    <p className="lead">
                    Introducing the Yeti Yacht Club NFT, your golden ticket to one of the most exclusive clubs on Earth. Mega yachts, private islands, 
                    and historic parties are just the start. The Yeti Yacht Club is the only NFT that gives you access to an actual Yacht Club                      
                    </p>

                  </div>
                </div>

              </div>
              
            </div>
            
            <div className="row align-items-center h-100 justify-content-center">
              <div className="col" style={{maxWidth:"900px", textAlign:"center"}}>
                <h1 className="display-3 bubblegum">Holder Benefits</h1>
                <p className="lead">
                Networking Paradise<br/><br/>

                The Yeti Yacht Club allows you to brush shoulders with elite movers and shakers at exclusive events, yacht parties, even concerts on private islands. <br/><br/>
                

                The Exclusive Yeti Lounge<br/><br/>

                The crown jewel of the Yeti Yacht Club is a physical space called “The Club”, available to all holders throughout the year. A hotspot for elite networking. Only holders are given its location. <br/><br/>
                

                Events, Events, Events..<br/><br/>

                The Yeti Yacht Club has massive events, parties, even cruises on a mega yachts planned. The first event kicks off at the end of the year in Las Vegas, followed by a massive party on a private island in Italy next year, and then an all inclusive cruise on the world's largest sailing vessel to Monaco.<br/><br/>

                MMO Game and Metaverse<br/><br/>
                
                Along with parties and events yearly, the Yeti Yacht Club is bringing its membership to the virtual world. Having partnered with Sapphire Studios to create a Massive Multiplayer Online mobile game and metaverse.                
                </p>

              </div>
              
              <div>
                  <img src="/images/yetiCompChart.png" alt=""   data-aos="fade-up"></img>
                </div>
          </div>
            

          </div>
        </div>
        </>
      );
    }
export default About;
