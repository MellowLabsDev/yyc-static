import React from 'react';
import { Image  } from 'react-bootstrap';

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
              <img className='roadmap-chart rm-d' src='/images/charts/roadmapHor.png' alt='roadmap'></img>
              <img className='roadmap-chart rm-m' src='/images/charts/roadmapVert.png' alt='roadmapMobile'></img>
            </div>
          </div>
        </div>
        </div>
        </>
      );
    }
export default RoadmapComp;
