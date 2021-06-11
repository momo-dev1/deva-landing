import React, { useState } from "react";
import { QuestionsAnswer } from "../../data/QuestionsData";

function AccordionMenu() {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderedQuestionsAnswer = QuestionsAnswer.map((item, index) => {
    const showDescription = index === activeIndex ? "show-description" : "";
    const iconTransform = index === activeIndex ? "rotate" : "";
    const ariaExpanded = index === activeIndex ? "false" : "true";
    return (
      <div className="faq-accordion-container" key={index}>
        <div className="faq-question">
          <dt>
            <button
              aria-expanded={ariaExpanded}
              aria-controls={`faq-${index + 1}-description`}
              data-qa="faq-question-button"
              onClick={() => {
                setActiveIndex(index);
              }}
              className={`faq-question-button ${iconTransform}`}
            >
              {item.question}
            </button>
          </dt>
          <dd>
            <p
              id={`faq-${index + 1}-description`}
              data-ga="faq-description"
              className={`faq-description ${showDescription}`}
            >
              {item.answer}
            </p>
          </dd>
        </div>
      </div>
    );
  });

  return <dl>{renderedQuestionsAnswer}</dl>;
}

export default AccordionMenu;
