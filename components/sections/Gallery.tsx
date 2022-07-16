import React from 'react';
import { Image  } from 'react-bootstrap';

const gallery = [
    {
        id:0,
        src:"/images/Yeti.png",
    },
    {
        id:1,
        src:"/images/Yeti.png",
    },
    {
        id:2,
        src:"/images/Yeti.png",
    },
    {
        id:3,
        src:"/images/Yeti.png",
    },
    {
        id:4,
        src:"/images/Yeti.png",
    },
    {
        id:5,
        src:"/images/Yeti.png",
    },
];

function Gallery() {
      return (
        <>
        <div id='gallery'>
        <div className="container px-4 py-5">
          
        <h1 className="display-5 fw-bold ga-section-title">Gallery</h1>

            <div className="row">
            {gallery.map(img => (
                <div key={img.id}  className="col-sm-6 col-md-4 mb-3">
                    <img style={{backgroundColor:"transparent"}} src={img.src} alt="" className="fluid img-thumbnail"/>      
                </div>
            ))}
            </div>
        </div>
        </div>
        </>
        );}
export default Gallery;