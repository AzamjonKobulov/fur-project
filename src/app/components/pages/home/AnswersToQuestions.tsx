"use client";

import { useState } from "react";

import Button from "../../shared/Button";
import AccordionItem from "../../shared/AccordionItem";

const faqData = [
  {
    question: "Сколько длится мебельный тур?",
    answer:
      "По нашему опыту, обычно мебельный тур занимает от 5 до 7 дней. В редких случаях срок может быть увеличен.",
  },
  {
    question: "Как составить план поездки?",
    answer:
      "По нашему опыту, обычно мебельный тур занимает от 5 до 7 дней. В редких случаях срок может быть увеличен.",
  },
  {
    question: "Можно ли продлить мебельный тур во время поездки?",
    answer:
      "По нашему опыту, обычно мебельный тур занимает от 5 до 7 дней. В редких случаях срок может быть увеличен.",
  },
  {
    question: "Что делать, если нет дизайн-проекта?",
    answer:
      "По нашему опыту, обычно мебельный тур занимает от 5 до 7 дней. В редких случаях срок может быть увеличен.",
  },
  {
    question: "Как получить визу в Китай?",
    answer:
      "По нашему опыту, обычно мебельный тур занимает от 5 до 7 дней. В редких случаях срок может быть увеличен.",
  },
];

export default function AnswersToQuestions() {
  const [openIndex, setIsOpenIndex] = useState(0);

  const handleAccordionClick = (index) => {
    setIsOpenIndex(openIndex === index ? null : index);
  };

  // Calculate the middle index to split the data
  const middleIndex = Math.ceil(faqData.length / 2);
  const firstHalf = faqData.slice(0, middleIndex);
  const secondHalf = faqData.slice(middleIndex);

  return (
    <section>
      <div className="container section-space !px-0">
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-30px">
          <h2 className="pl-30px">
            <span className="text-brand-red">Ответы</span> на <br /> вопросы
          </h2>

          <div className="no-scroll flex items-center gap-5 overflow-auto">
            <Button
              variant="redOutline"
              className="w-full sm:w-auto h-10 sm:h-12 xl:h-14 3xl:h-[73px] flex items-center justify-center ml-30px px-4 sm:px-5 xl:px-[26px] 3xl:px-10"
            >
              #длительность
            </Button>
            <Button
              variant="grayOutline"
              className="w-full sm:w-auto h-10 sm:h-12 xl:h-14 3xl:h-[73px] flex items-center justify-center px-4 sm:px-5 xl:px-[26px] 3xl:px-10"
            >
              #стоимость
            </Button>
            <Button
              variant="grayOutline"
              className="w-full sm:w-auto h-10 sm:h-12 xl:h-14 3xl:h-[73px] flex items-center justify-center mr-30px px-4 sm:px-5 xl:px-[26px] 3xl:px-10"
            >
              #дизайн
            </Button>
          </div>
        </div>

        {/* AnsToQues */}
        <div className="w-full flex flex-col lg:flex-row gap-5 px-30px">
          <div className="w-full space-y-5">
            {firstHalf.map((faq, index) => (
              <AccordionItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onClick={() => handleAccordionClick(index)}
              />
            ))}
          </div>
          <div className="w-full space-y-5">
            {secondHalf.map((faq, index) => (
              <AccordionItem
                key={index}
                faq={faq}
                isOpen={openIndex === index + middleIndex} // Adjust index for second half
                onClick={() => handleAccordionClick(index + middleIndex)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
