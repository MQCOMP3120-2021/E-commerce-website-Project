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
                      Items are non-exchangeable, but refund can be requested with a logical reason. 
                      If refund request is sent within three days from purchase date, a refund will be issued with no reason required.
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
                        Customers who signed up for an account are allowed to provide a review for all items available. Please leave reviews reasonably as offensive reviews 
                        will be removed from display.
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
                        We reserve the right to change, modify or remove the contents of the site at any time or for any reason (including hiding reviews). We cannot
                        guarantee that the site will be available at all times as we may experience hardware, software or other problems that would require site maintenance.
                        You agree that we have no liability or whatsoever for any loss, damage or inconvenience caused by your inability to access the site.
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
                    If items received are not as expected, please send a message explaining the issues encountered, including an image of it to our customer service.
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
                        If a payment error has occured, customers are encouraged to first verify with their respective banks on whether their accounts have been charged.
                        You are then advised to contact our customer service to check if order has been placed. 
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
                        If order is not received, kindly send an email containing your order ID to our customer service. You will be able to choose if you would like a refund
                        or have the order delivered to you on another day. 
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
                        If your order has been cancelled, you will be refunded automatically within 3 days. If refund has not been received within the period of time, kindly
                        contact our customer service to provide further assistance.
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

      let response = await fetch("/api/FAQ", {
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
                <input type="nameBox" id="name" placeholder="Name" required />
              </div>
              <div>
                <label htmlFor="email"></label>
                <input type="email" id="email" placeholder="Email" required />
              </div>
              <div>
                <label htmlFor="enquiry"></label>
                <textarea id="enquiry" placeholder="Enquiry" required />
              </div>
              <button type="submit">{status} →</button>
            </form>

      </div>
    );
  };


const faqDisplay = {
    Faq, FaqForm
  }

export default faqDisplay;