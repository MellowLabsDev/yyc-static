import React, { useEffect } from 'react';
import { Image  } from 'react-bootstrap';
import Link from 'next/link';
import AOS from 'aos';

function Hero(props) {
      return (
        <>        
        <img className='landing-hero-image hero-border' src={props.imgSrc}></img>
        {/* <div id='hero' className={'hero mt-10' + " " +  props.classname}>
        </div> */}
        </>
      );
    }
export default Hero;
