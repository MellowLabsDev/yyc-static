import React, { useEffect } from 'react';
import { Image  } from 'react-bootstrap';
import AOS from '../../node_modules/aos';
import {FaRegPlayCircle} from 'react-icons/fa';

function About() {

      return (
        <>
        <div id='about'>
          <div className="container">
              <div className="container py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5">
                  <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3 bubblegum">About the Yeti Secret Society</h1>
                    <p className="lead">Introducing the Yeti Secret Society NFT, your golden ticket to one of the most exclusive clubs on Earth. Mega yachts, private islands, and historic parties are just the start. The Yeti Secret Society is the only NFT that gives you access to an actual Yacht Club</p>
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
