import React, { useEffect } from 'react';
import { Image  } from 'react-bootstrap';
import AOS from '../../node_modules/aos';
import {FaRegPlayCircle} from 'react-icons/fa';

function About() {
  useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);

      return (
        <>
        <div id='about'>
          <div className="container">
              <div className="container py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5">
                  <div className="col-lg-6" data-aos="fade-up">
                    <h1 className="display-3 fw-bold lh-1 mb-3 bubblegum">About the Yeti Secret Society</h1>
                    <p className="lead">The Yeti Secret Society (YSS) is a collection of 10,000 unique NFTs living on the Ethereum blockchain. Your Yeti is also a membership card to an elite and secretive community. Yetis may live in the shadows, but your YSS NFT will unlock the members-only Yeti Lounge, yacht parties, and events on a private island. YSS has also partnered with a metaverse and gaming studio to create a Massive Multiplayer Online mobile game and metaverse where your Yetis can run wild!
                    </p>
                        {/*<div className="d-grid gap-2 d-md-flex justify-content-md-start">
                      <button type="button" className="btn btn-lg px-4 me-md-2 video-button montreg">Watch Video <FaRegPlayCircle/> </button>
                    </div>*/}
                  </div>                  
                  <div className="col-12 col-sm-12 col-lg-6">
                    <img src="/images/yetiGrid.gif" className="d-block mx-lg-auto img-fluid" alt="yetigrid" width="100%" loading="lazy"></img>
                  </div>
                </div>
              </div>
            

          </div>
        </div>
        </>
      );
    }
export default About;
