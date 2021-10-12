import React, {useState, useEffect} from 'react';
import '../css/FaqScreen.css';
import {
    BrowserRouter as Router,
    Switch, Route, Link
  } from "react-router-dom";
import {
  Accordion, AccordionItem,
  AccordionItemHeading, AccordionItemButton,
  AccordionItemPanel, } from 'react-accessible-accordion';
  import productService from '../services/productService';

 

const Faq = () => (

        <div className="faqContainer">
          
            <div className="faq-accordion">
  
              <h3>Frequently Asked Questions</h3>
              <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                      Refund Policies
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                      Product Review Guidelines
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                      Terms of Use
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                      Apply for a Refund
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                      Payment Error
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                      Order not Received
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                      Order cancelled
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    </div>


        </div> 

)

const FaqForm = () => {
    const [status, setStatus] = useState("Submit");
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("Sending...");
      const { name, email, enquiry } = e.target.elements;
      let details = {
        name: name.value,
        email: email.value,
        enquiry: enquiry.value,
      };

      let response = await fetch("http://localhost:3000/FAQ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
      setStatus("Submit");
      let result = await response.json();
      alert(result.status);
    };
    return (

        <div className="enquiryForm">
          <h1>Ask a Question</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name"></label>
                <input type="text" id="name" placeholder="Name" required />
              </div>
              <div>
                <label htmlFor="email"></label>
                <input type="email" id="email" placeholder="Email" required />
              </div>
              <div>
                <label htmlFor="enquiry"></label>
                <textarea id="enquiry" placeholder="Enquiry" required />
              </div>
              <button type="submit">{status}   <i className="inline-icon material-icons">trending_flat</i></button>
            </form>

      </div>
    );
  };


const faqDisplay = {
    Faq, FaqForm
  }

export default faqDisplay;