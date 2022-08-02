import React, { useEffect } from 'react';
import { Accordion  } from 'react-bootstrap';
import AOS from 'aos';

const faqs = [
  {id:0,
  question : "What is Yeti Secret Society?",
  answer : "The project  is a collection of 10,000 uniquely generated NFTs stored in the Ethereum chain. ",
  eventKey :"0",
  }, 
  {id:1,
  question : "What is the Total Supply?",
  answer : "Total Supply is 10,000 Yetis",
  eventKey :"1",
  }, 
  {id:2,
  question : "Mint Price",
  answer : "Whitelist price: TBA. Public sale: TBA.",
  eventKey :"2",
  }, 
  {id:3,
  question : "Where Can we mint?",
  answer : "Minting will be on a dedicated portal on our website.",
  eventKey :"3",
  }, 
  {id:4,
  question : "Wen Mint?",
  answer : "-White List mint: TBA. -Public mint: TBA",
  eventKey :"4",
  }, 
  {id:5,
  question : "How many NFT's can be minted",
  answer : "-White List: max 10 per wallet. -Public sale: Max 25 per transaction.",
  eventKey :"5",
  }, 
  {id:6,
  question : "How Can I get a White List?",
  answer : "By joining our Discord, being active, and attending our twitter spaces. We continuously monitor the activity of our members on discord , and  reward our active members. Additionally, you can get on our premint list by registering here ",
  eventKey :"6",
  formLinkTrue:true,
  formLink: 'https://www.premint.xyz/yeti-yacht-club/',
  }, 
  {id:7,
  question : "How Can I buy a Yeti?",
  answer : "You can purchase a Yeti either during our minting period, or by purchasing a Yeti on the secondary market",
  eventKey :"7",
  }, 
  {id:8,
  question : "Are you affiliated with any other  NFT project?",
  answer : "Yeti Secret Society is a unique forward-thinking project, and currently has no affiliation with any other NFT project.",
  eventKey :"8",
  }, 
  {id:9,
  question : "Which marketplaces will Yeti Secret Society be listed on?",
  answer : "-OpenSea. -LooksRare. -MemeNFT.",
  eventKey :"9",
  }, 
  {id:10,
  question : "Wen Reveal?",
  answer : "TBA",
  eventKey :"10",
  }, 
];


function FAQ() {
  useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  
      return (
        <>
        <div id='faq'>
          
        <div className="container px-4 py-5">
          
        <h1 className="display-3 fw-bold lh-1 mb-3 bubblegum text-center">FAQs</h1>
          <div className="row">
            <div className="col-md-6 offset-md-3">
            {faqs.map(faq => (
              <div key={faq.id} className='faq-item' data-aos="fade-up">
                <h5 className='faq-title bolder'>{faq.question}</h5>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
          </div>
          </div>
        </div>
        </>
      );
    }
export default FAQ;
