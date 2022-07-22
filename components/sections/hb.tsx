import React from 'react';
import { Image  } from 'react-bootstrap';
import Zoom from 'react-medium-image-zoom'

function hbSection() {
      return (
        <>
        <div id='hb-section' className='py-4'>
          <div className="container my-4">
            <div className='row m-auto'>
                <div className="col-md-6">
                    <h1 className="display-3 bubblegum">Holder Benefits</h1>
                    <div className="border-0 mb-4">
                        <div className="d-flex">
                            <div className="me-2 text-success-gradiant icon-size"><img src='/images/icons/hbDiamond.svg'></img></div>
                            <div className="">
                                <h2 className="font-weight-medium bubblegum">Networking Paradise</h2>
                                <p className="mt-3">The Yeti Secret Society allows you to brush shoulders with elite movers and shakers at exclusive events, yacht parties, even concerts on private islands.</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-0 mb-4">
                        <div className="d-flex">
                            <div className="me-2 text-success-gradiant icon-size"><img src='/images/icons/hbChair.svg'></img></div>
                            <div className="">
                                <h2 className="font-weight-medium bubblegum">Exclusive Yeti Lounge</h2>
                                <p className="mt-3">The crown jewel of the Yeti Secret Society is a physical space called “The Club”, available to all holders throughout the year. A hotspot for elite networking. Only holders are given its location.</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-0 mb-4">
                        <div className="d-flex">
                            <div className="me-2 text-success-gradiant icon-size"><img src='/images/icons/hbDrinks.svg'></img></div>
                            <div className="">
                                <h2 className="font-weight-medium bubblegum">Events, Events, Events..</h2>
                                <p className="mt-3">The Yeti Secret Society has massive events, parties, even cruises on a mega yachts planned. The first event kicks off at the end of the year in Las Vegas, followed by a massive party on a private island in Italy next year, and then an all inclusive cruise on the world's largest sailing vessel to Monaco.</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-0 mb-4">
                        <div className="d-flex">
                            <div className="me-2 text-success-gradiant icon-size"><img src='/images/icons/hbPalm.svg'></img></div>
                            <div className="">
                                <h2 className="font-weight-medium bubblegum">MMO Game and Metaverse</h2>
                                <p className="mt-3">Along with parties and events yearly, the Yeti Secret Society is bringing its membership to the virtual world. Having partnered with Sapphire Studios to create a Massive Multiplayer Online mobile game and metaverse.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col text-center'>
                    <Zoom>
                    <img className='holder-chart' src='/images/charts/holderChart.png'></img>
                    </Zoom>
                </div>
            </div>
        </div>
        </div>
        </>
      );
    }
export default hbSection;
