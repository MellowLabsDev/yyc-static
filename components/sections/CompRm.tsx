import React, { useEffect } from 'react';
import { Image  } from 'react-bootstrap';
import AOS from '../../node_modules/aos';

function CompRm() {

      return (
        <>
        <div id='CompRm'>
          <div className="container">

              <div className="container py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                                  
                  <div className="col-10 col-sm-8 col-lg-8">
                    <img src="/images//charts/compChart.png" className="d-block mx-lg-auto img-fluid" alt="yetigrid" width="700" height="500" loading="lazy"></img>
                  </div>
                  <div className="col-lg-4">
                    <h1 className="display-5 fw-bold lh-1 mb-3 bubblegum">NFT Blue-Chip Comparison Chart</h1>
                    <p className="lead">How does Yeti Secret Society compare to teh other blue-chip NFT projects in the space? We lead, that's how! No other project is providing the benefits our collectors receive for joining YSS.</p>
                  </div>  
                </div>
              </div>
              <div className="col">
                <h1 className="display-5 bubblegum">Roadmap</h1>
                <p className="lead">As the Yeti Secret Society develops, we will be continuously updating our roadmap to suit the needs and wants of our community. As many know, the NFT space is ever changing and adapting is a must in this realm of work in order to thrive and prosper. The roadmap is no different when it comes to the ever changing world of Crypto. Our goal is to depict the overall idea of our current plans and what we’ve considered to be a feasible outlook of the future. One thing that is immune to the constant change of crypto is our work ethic and our constant efforts to provide a transparent and premium community.</p>
              </div>  
              <img className='roadmap-chart rm-d' src='/images/charts/roadmap.png'></img>
              <img className='roadmap-chart rm-m' src='/images/charts/roadmapMobile.png'></img>
            

          </div>
        </div>
        </>
      );
    }
export default CompRm;
