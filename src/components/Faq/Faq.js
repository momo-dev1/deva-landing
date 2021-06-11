import React from "react";
import AccordionMenu from "../AccordionMenu/AccordionMenu";

function Faq({renderedQuestionsAnswer}) {
  return (
    <section className="faq">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-heading">Frequently Asked Questions</h2>
          <p className="faq-description">
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
        </div>
        <AccordionMenu />
      </div>
    </section>
  );
}

export default Faq;
