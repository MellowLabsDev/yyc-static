import React from 'react';
import { Image  } from 'react-bootstrap';

function RoadmapComp() {
      return (
        <>
        <div id='roadmap'>
        <div className="container">
          <div className="row align-items-center h-100 justify-content-center">
            <div className="col">
              <h1 className="display-3 bubblegum">Roadmap</h1>
              <p className="lead">
              As the Yeti Secret Society develops, we will be continuously updating our roadmap to suit the needs and wants of our community. As many know, the NFT space is ever changing and adapting is a must in this realm of work in order to thrive and prosper. The roadmap is no different when it comes to the ever changing world of Crypto. Our goal is to depict the overall idea of our current plans and what we’ve considered to be a feasible outlook of the future. One thing that is immune to the constant change of crypto is our work ethic and our constant efforts to provide a transparent and premium community. 
              </p>                 
              <img className='roadmap-chart rm-d' src='/images/charts/roadmap.png' alt='roadmap'></img>
              <img className='roadmap-chart rm-m' src='/images/charts/roadmapMobile.png' alt='roadmapMobile'></img>
            </div>
          </div>
        </div>
        </div>
        </>
      );
    }
export default RoadmapComp;
