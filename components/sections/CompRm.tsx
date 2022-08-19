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
                {/* <div className="row align-items-center g-5">
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
                </div> */}
              <div className="col py-5" data-aos="fade-up">
                <h1 className="display-3 fw-bold lh-1 mb-3 bubblegum">Roadmap</h1>
                <p className="lead text-justify">We’re committed to the Yeti community and our goal is to depict the overall idea of our current plans and a feasible outlook of the future. Together we grow.</p>
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
