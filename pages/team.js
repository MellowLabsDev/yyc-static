import React, { useEffect, useState } from 'react';
import { Card  } from 'react-bootstrap';
import Head from 'next/head'
import AOS from 'aos';
import Hero from '../components/sections/Hero.tsx'
import TeamComponent from '../components/sections/Team.tsx'
import { FaTwitter, FaLinkedin } from 'react-icons/fa';

const teamMembers = [
  {id:0,
  name : "David",
  title : "CEO/Co-Founder",
  desc : "",
  twitter : true,
  twitterHref : "https://twitter.com/davidjustin84",
  linkedin : true,
  linkedinHref : "https://www.linkedin.com/in/davidjwoodbury",
  img : "/images/team/david.png",
  }, 
  {id:1,
  name : "Dan",
  title : "Marketing/Co-Founder",
  desc : "",  
  twitter : true,
  twitterHref : "https://twitter.com/DansRoadToRichs",
  linkedin : true,
  linkedinHref : "https://www.linkedin.com/in/dan-comeau-1378a21a9/",
  img : "/images/team/dan.png",
  }, 
  {id:2,
  name : "Noah",
  title : "Mellow Labs Developer/Executive Team",
  desc : "",  
  twitter : true,
  twitterHref : "https://twitter.com/ElderPyke",
  linkedin : true,
  linkedinHref : "https://www.linkedin.com/in/nallenweb3/",
  img : "/images/team/noah.png",
  }, 
  {id:3,
  name : "Arvin",
  title : "CMO",
  desc : "",  
  twitter : true,
  twitterHref : "https://twitter.com/arvinknft",
  linkedin : true,
  linkedinHref : "https://www.linkedin.com/in/arvinkhamseh/",
  img : "/images/team/arvin.jpg",
  }, 
  {id:4,
  name : "Alec",
  title : "Mellow Labs Developer",
  desc : "",  
  twitter : true,
  twitterHref : "https://twitter.com/wutangdev",
  linkedin : true,
  linkedinHref : "https://www.linkedin.com/in/alecb/",
  img : "/images/team/alec.png",
  }, 
  {id:5,
  name : "Meagan",
  title : "Community Manager",
  desc : "",  
  twitter : true,
  twitterHref : "https://twitter.com/DogeGirl420",
  linkedin : false,
  linkedinHref : "",
  img : "/images/team/meagan.png",
  }, 
  {id:6,
  name : "Ayesha",
  title : "Moderator",
  desc : "",  
  twitter : true,
  twitterHref : "https://twitter.com/AShawThing_",
  linkedin : false,
  linkedinHref : "",
  img : "/images/team/ayesha.png",
  }, 
];

export default function Team() { 
  useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  
  
  
  return (
    <div id='team' className="min-h-screen h-full w-full flex flex-col bg-brand-light overflow-hidden">
      <Head>
        <title>YSS | Team</title>
        <meta name="description" content="Join the Yeti Secret Society today!" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://yeticlub.io/"/>
        <meta property="og:title" content="YSS | Team"/>
        <meta property="og:description" content="Join the Yeti Secret Society today!"/>       
        <meta property="og:image" content="https://yeticlub.io/images/metaImg.jpg"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://yeticlub.io/"/>
        <meta property="twitter:title" content="YSS | Team"/>
        <meta property="twitter:description" content="Join the Yeti Secret Society today!"/>
        <meta property="twitter:image" content="https://yeticlub.io/images/metaImg.jpg"/>      
        
        
      </Head>
      <Hero classname='team-banner' imgSrc='/images/banners/beachParty.png'/>
          
        <div className="container">
        <div className="px-4 py-5">
              <h1 className="display-5 fw-bold bubblegum text-left" >Team</h1>
            <div className="row team-row justify-content-center">

            {teamMembers.map(member => (
              <div  key={member.id} className="col-sm-6 col-lg-4 team-container text-center" data-aos="fade-up">
              <Card style={{ backgroundColor:"transparent", width: '18rem', margin:'auto', height:'100%', borderRadius:'0', border:'0', overflow:'hidden' }}>
                <Card.Img variant="top" className='team-image' src={member.img} />
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Text>
                    {member.title} 
                    {/* <br></br><br></br>
                    {member.desc} */}
                  </Card.Text>
                  <ul className="nav col-md-4 justify-content-center list-unstyled d-flex" style={{margin:'auto'}}>
                  { member.twitter == true ? (
                  <li><a href={member.twitterHref}><FaTwitter  size={"1.5rem"} color={"#f903a5"} style={{marginRight:'1rem'}} /></a></li>
                  ) : (
                    
                  <li style={{width:0}}></li> 
                  ) }
                  { member.linkedin == true ? (
                  <li><a href={member.linkedinHref}><FaLinkedin  size={"1.5rem"} color={"#f903a5"} /></a></li>
                  ) : (
                    
                  <li style={{width:0}}></li> 
                  ) }
                  </ul>
                </Card.Body>
              </Card>
              </div>
            ))}
              
            </div>
          </div>
        </div>
      
      
    </div>
  )
}
