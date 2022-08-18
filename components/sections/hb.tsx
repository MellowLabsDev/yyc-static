import React, { useEffect } from 'react';
import { Image  } from 'react-bootstrap';
import Zoom from 'react-medium-image-zoom';
import AOS from "aos";

function hbSection() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
      return (
        <>
        <div id='hb-section' className='py-4'>
          <div className="container my-4">
            <div className='row m-auto'>
                {/* <div className="col-md-6"> */}
                <div className="col-md-12">
                    <h1 className="display-3 fw-bold lh-1 mb-3 bubblegum">Holder Benefits</h1>
                    <div className="border-0 mb-4" data-aos="fade-up">
                        <div className="d-flex">
                            <div className="me-2 text-success-gradiant icon-size"><img src='/images/icons/hbDiamond.svg'></img></div>
                            <div className="">
                                <h2 className="font-weight-medium bubblegum">Networking Redefined </h2>
                                <p className="mt-3">The Yeti Secret Society allows you to brush shoulders with an elite community at members-only events. Our first event will be the end of the year in Las Vegas, followed by a massive party on a private island in Italy, and an all-inclusive cruise on the world's largest sailing vessel to Monaco.</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-0 mb-4" data-aos="fade-up">
                        <div className="d-flex">
                            <div className="me-2 text-success-gradiant icon-size"><img src='/images/icons/hbChair.svg'></img></div>
                            <div className="">
                                <h2 className="font-weight-medium bubblegum">The Yeti Lounge</h2>
                                <p className="mt-3">The crown jewel of YSS is a physical space called “The Lounge,” available to all holders throughout the year – only Yetis are given access to this secret location.</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-0 mb-4" data-aos="fade-up">
                        <div className="d-flex">
                            <div className="me-2 text-success-gradiant icon-size"><img src='/images/icons/hbGem.svg'></img></div>
                            <div className="">
                                <h2 className="font-weight-medium bubblegum">Intellectual Property Rights & DAO Membership</h2>
                                <p className="mt-3">Yeti owners have full intellectual property rights of their individual NFTs, and be eligible for membership of the Yeti DAO – further information on protocols will be revealed.</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-0 mb-4" data-aos="fade-up">
                        <div className="d-flex">
                            <div className="me-2 text-success-gradiant icon-size"><img src='/images/icons/hbDrinks.svg'></img></div>
                            <div className="">
                                <h2 className="font-weight-medium bubblegum">Giveaways</h2>
                                <p className="mt-3">YSS is giving away a number of Rolex watches to the public in 2022. In 2023, only YSS owners will be eligible to win three supercars and custom merch.  </p>
                            </div>
                        </div>
                    </div>
                    <div className="border-0 mb-4" data-aos="fade-up">
                        <div className="d-flex">
                            <div className="me-2 text-success-gradiant icon-size"><img src='/images/icons/hbPalm.svg'></img></div>
                            <div className="">
                                <h2 className="font-weight-medium bubblegum">MMO Game and Metaverse</h2>
                                <p className="mt-3">Along with our annual member-only events, YSS is bringing its membership to the virtual world. We’ve partnered with a metaverse and gaming studio to create a Massive Multiplayer Online mobile game and metaverse for the Yetis.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='col text-center'>
                    <Zoom>
                    <img className='holder-chart' data-aos="fade-up" src='/images/charts/holderChart.png'></img>
                    </Zoom>
                </div> */}
            </div>
        </div>
        </div>
        </>
      );
    }
export default hbSection;
