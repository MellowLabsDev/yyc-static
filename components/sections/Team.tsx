import React, { useEffect } from 'react';
import { Card  } from 'react-bootstrap';
import AOS from 'aos';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';

const teamMembers = [
  // {id:0,
  // name : "Volen",
  // title : "Executive Team",
  // desc : "",
  // twitter : true,
  // twitterHref : "https://twitter.com/VT_NFT",
  // linkedin : false,
  // linkedinHref : "",
  // img : "/images/team/volenPic.png",
  // }, 
  // {id:1,
  // name : "David",
  // title : "Marketing/Executive Team",
  // desc : "",
  // twitter : true,
  // twitterHref : "https://twitter.com/davidjustin84",
  // linkedin : true,
  // linkedinHref : "https://www.linkedin.com/in/davidjwoodbury",
  // img : "/images/team/david.png",
  // }, 
  {id:2,
  name : "Dan",
  title : "Marketing/Executive Team",
  desc : "",  
  twitter : true,
  twitterHref : "https://twitter.com/DansRoadToRichs",
  linkedin : true,
  linkedinHref : "https://www.linkedin.com/in/dan-comeau-1378a21a9/",
  img : "/images/team/dan.png",
  }, 
  {id:3,
  name : "Noah",
  title : "Mellow Labs Developer/Executive Team",
  desc : "",  
  twitter : true,
  twitterHref : "https://twitter.com/ElderPyke",
  linkedin : true,
  linkedinHref : "https://www.linkedin.com/in/nallenweb3/",
  img : "/images/team/noah.png",
  mellow : true,
  }, 
  {id:4,
  name : "Arvin",
  title : "CMO",
  desc : "",  
  twitter : true,
  twitterHref : "https://twitter.com/arvinknft",
  linkedin : true,
  linkedinHref : "https://www.linkedin.com/in/arvinkhamseh/",
  img : "/images/team/arvinPic.png",
  }, 
  {id:5,
  name : "Alec",
  title : "Mellow Labs Developer",
  desc : "",  
  twitter : true,
  twitterHref : "https://twitter.com/wutangdev",
  linkedin : false,
  linkedinHref : "https://www.linkedin.com/in/alecb/",
  img : "/images/team/alec.png",
  mellow : true,
  }, 
  {id:6,
  name : "Meagan",
  title : "Community Manager",
  desc : "",  
  twitter : true,
  twitterHref : "https://twitter.com/DogeGirl420",
  linkedin : false,
  linkedinHref : "",
  img : "/images/team/meagan.png",
  }, 
  {id:7,
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


function TeamComponent() {
  useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  

      return (
        <>
        <div className='team'>
          
        <div className="container">
        <div className="px-4 py-5">
              <h1 className="display-3 fw-bold lh-1 mb-3 bubblegum text-left" >Team</h1>
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
                  <ul className="nav col-md-12 justify-content-center list-unstyled d-flex" style={{margin:'auto'}}>
                  { member.twitter == true ? (
                  <li><a href={member.twitterHref} target="_blank"><FaTwitter  size={"1.5rem"} color={"#f903a5"} /></a></li>
                  ) : (
                    
                  <li style={{width:0}}></li> 
                  ) }
                  { member.linkedin == true ? (
                  <li><a href={member.linkedinHref} target="_blank"><FaLinkedin  size={"1.5rem"} color={"#f903a5"} style={{marginLeft:'1rem'}} /></a></li>
                  ) : (
                    
                  <li style={{width:0}}></li> 
                  ) }
                  
                  { member.mellow == true ? (
                  <li><a href="https://mellowlabs.dev/"><img height="24" width="24" style={{marginLeft:'1rem'}} src='/images/icons/mellow.svg'></img></a></li>
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
        </>
      );
    }
export default TeamComponent;
