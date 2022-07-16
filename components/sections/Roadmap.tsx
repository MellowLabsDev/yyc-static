import React from 'react';
import { Image  } from 'react-bootstrap';

function RoadmapComp() {
      return (
        <>
        <div className="container">
          <div className="row align-items-center h-100 justify-content-center">
            <div className="col" style={{maxWidth:"900px"}}>
              <h1 className="display-3 bubblegum" style={{textAlign:"center"}}>Roadmap</h1>
              <p className="lead">
              As the Yeti Yacht Club develops, we will be continuously updating our roadmap to suit the needs and wants of our community. As many know, the NFT space is ever changing and adapting is a must in this realm of work in order to thrive and prosper. The roadmap is no different when it comes to the ever changing world of Crypto. Our goal is to depict the overall idea of our current plans and what we’ve considered to be a feasible outlook of the future. One thing that is immune to the constant change of crypto is our work ethic and our constant efforts to provide a transparent and premium community. 
              </p> 
                <ul className="timeline">
                    <li className="event" data-date="Q3 2022">
                        <p>
                          - Open exclusive chat app for holders called, The Lounge.
                        </p>
                    </li>

                    <li className="event" data-date="Q4 2022">
                        <p>
                        - The Club (Exclusive Club for Yeti holders opens). <br/>
                        - Mega Event in Las Vegas<br/>
                        - Yeti Yacht Club MMO + Metaverse App<br/>
                        - Yeti Hybrids<br/>
                        - Yeti Currency <br/>
                        - Yeti Wallet<br/>
                        - Yeti Staking Launched
                        </p>
                    </li>

                    <li className="event" data-date="Q2 2023">
                        <p>
                        - Private Island Party<br/>
                        - Mega Yacht Trip to Monaco
                        </p>
                    </li>

                    <li className="event" data-date="Q4 2023">
                        <p>
                        - Mega Event in Miami
                         </p>
                    </li>

                    <li className="event" data-date="Q1 2024">
                        <p>
                        - Private Island Concert<br/>
                        - New Event Lineups Announced
                        </p>
                    </li>
                </ul>
            </div>
          </div>
        </div>
        </>
      );
    }
export default RoadmapComp;
