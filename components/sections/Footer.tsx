import React from 'react';
import { Image  } from 'react-bootstrap';
import { FaTwitter, FaDiscord } from 'react-icons/fa';

function Footer() {


      return (
        <>
          <div className="footer-container">
            <footer className="py-3 my-4">
              {/* <a href="#hero">                  
                <Image className="d-block mx-auto" src="/images/logo.png" alt="" width="250"/>
              </a> */}
              <ul className="nav justify-content-center">
                <li className="nav-item"><a href="https://twitter.com/OfficialYetiYC" className="nav-link"><FaTwitter size={"2.5rem"}/></a></li>
                <li className="nav-item"><a href="https://discord.gg/yAVGGzWNSM" className="nav-link"><FaDiscord size={"2.5rem"}/></a></li>
              </ul>   
              {/* <div className='email-form nav justify-content-center'>
                <MailchimpSubscribe url='https://gmail.us12.list-manage.com/subscribe/post?u=f0ff4ce31af65dd7bea0e2d2b&id=f8b4e0b3cb'/>     
              </div> */}
              <p className="text-center">© Copyright | Yeti Secret Society {new Date().getFullYear()} | All Rights Reserved</p>
            </footer>
          </div>
        </>
      );
    }
export default Footer;
