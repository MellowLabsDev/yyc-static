import React, { useEffect } from 'react';
import { Image  } from 'react-bootstrap';
import AOS from '../../node_modules/aos';
import Zoom from 'react-medium-image-zoom'

function CompRm() {
  useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);

      return (
        <>
        <div id='CompRm'>
          <div className="container">

              <div className="container">
                <div className="row align-items-center g-5">
                  <div className="col-lg-4" data-aos="fade-up">
                    <h1 className="display-3 fw-bold lh-1 mb-3 bubblegum">NFT Blue-Chip Comparison Chart</h1>
                    <p className="lead">How does Yeti Secret Society compare to the other blue-chip NFT projects in the space? We lead, that's how! No other project is providing the benefits our collectors receive for joining YSS.</p>
                  </div>  
                                  
                  <div className="col-12 col-sm-12 col-lg-8">
                    <Zoom>
                    <img src="/images/charts/compChart.png" className="d-block mx-lg-auto img-fluid" alt="yetigrid" width="100%" loading="lazy" data-aos="fade-up"></img>
                    </Zoom>
                    <p className="text-center">We greatly respect all NFT projects that honor their community.</p>
                  </div>
                </div>
              <div className="col py-5" data-aos="fade-up">
                <h1 className="display-3 fw-bold lh-1 mb-3 bubblegum">Roadmap</h1>
                <p className="lead">As the Yeti Secret Society develops, we will be continuously updating our roadmap to suit the needs and wants of our community. As many know, the NFT space is ever changing and adapting is a must in this realm of work in order to thrive and prosper. The roadmap is no different when it comes to the ever changing world of Crypto. Our goal is to depict the overall idea of our current plans and what we’ve considered to be a feasible outlook of the future. One thing that is immune to the constant change of crypto is our work ethic and our constant efforts to provide a transparent and premium community.</p>
              </div>  
              <img className='roadmap-chart rm-d' src='/images/charts/roadmapHor.png' alt='roadmap'></img>
              <img className='roadmap-chart rm-m' src='/images/charts/roadmapVert.png' alt='roadmapMobile'></img>
              
              </div>
            

          </div>
        </div>
        </>
      );
    }
export default CompRm;
