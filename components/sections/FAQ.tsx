import React, { useEffect } from 'react';
import { Accordion  } from 'react-bootstrap';
import AOS from 'aos';

const faqs = [
  {id:0,
  question : "What is Yeti Secret Society?",
  answer : "YSS is a collection of 10,000 uniquely generated NFTs on the Ethereum blockchain, each Yeti represents a membership card to our secret society.",
  eventKey :"0",
  }, 
  {id:1,
  question : "Mint Price",
  answer : "Whitelist Mint: 3.5ETH | Public Mint: 4ETH",
  eventKey :"1",
  }, 
  {id:2,
  question : "Where Can we mint?",
  answer : "Minting will be on a dedicated portal on Yetis.com",
  eventKey :"2",
  }, 
  {id:3,
  question : "Wen Mint?",
  answer : "Whitelist Mint: Secret Date – TBA. | Public Mint: Secret Date – TBA.",
  eventKey :"3",
  }, 
  {id:4,
  question : "How many NFT's can be minted",
  answer : "Whitelist Mint: max 10 per wallet. | Public Mint: Max 25 per wallet.",
  eventKey :"4",
  }, 
  {id:5,
  question : "How Can I get a White List?",
  answer : "By joining our Discord, being active, and attending our Twitter spaces. We continuously monitor the activity of our members on Discord and Twitter, and reward our active members. Additionally, you can get on our pre-mint list by registering here",
  eventKey :"5",
  formLinkTrue:true,
  formLink: 'https://www.premint.xyz/yss/',
  }, 
  {id:6,
  question : "How Can I buy a Yeti?",
  answer : "You can purchase a Yeti either during our minting period, or by purchasing a Yeti on the secondary market.",
  eventKey :"6",
  }, 
  {id:7,
  question : "Are you affiliated with any other  NFT project?",
  answer : "Yeti Secret Society is a unique forward-thinking project, and currently has no affiliation with any other NFT project.",
  eventKey :"7",
  }, 
  {id:8,
  question : "Which marketplaces will Yeti Secret Society be listed on?",
  answer : "-OpenSea. -LooksRare. -MemeNFT.",
  eventKey :"8",
  }, 
  {id:9,
  question : "Wen Reveal?",
  answer : "After Public Mint – it’s a secret.",
  eventKey :"9",
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
                <p>{faq.answer}
                { faq.formLinkTrue == true ? (
                  <a href={faq.formLink}  target="_blank">{faq.formLink}</a>
                  ) : (
                   <></> 
                  )}
                  </p>
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
