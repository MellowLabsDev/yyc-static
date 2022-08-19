import React from 'react';
import { Image  } from 'react-bootstrap';
import Zoom from 'react-medium-image-zoom'

function RoadmapComp() {
      return (
        <>
        <div id='roadmap'>
        <div className="container">
          <div className="row align-items-center h-100 justify-content-center">
            <div className="col">
              <h1 className="display-3 fw-bold lh-1 mb-3 bubblegum mt-4">Roadmap</h1>
              <p className="lead text-justify">
              We’re committed to the Yeti community and our goal is to depict the overall idea of our current plans and a feasible outlook of the future. Together we grow. 
              </p>
                
              <div className='rm-d'>
                <Zoom>
                  <img className='roadmap-chart' src='/images/charts/roadmapHor.png'  width="100%" alt='roadmap'></img>
                </Zoom>
              </div> 

              <div className='rm-m'>
                <Zoom>
                  <img className='roadmap-chart' src='/images/charts/roadmapVert.png' width="100%" alt='roadmapMobile'></img>
                </Zoom>
              </div>
              
            </div>
          </div>
        </div>
        </div>
        </>
      );
    }
export default RoadmapComp;
