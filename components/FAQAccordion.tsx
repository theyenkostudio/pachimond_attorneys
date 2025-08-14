import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQAccordion() {
  const faqData = [
    {
      id: "fees",
      question: "How are your legal fees structured?",
      answer:
        "Our fees vary based on the complexity of your case. We'll provide clear, upfront information about costs during your initial consultation.",
    },
    {
      id: "schedule",
      question: "How do I schedule a consultation?",
      answer:
        "You can schedule a consultation by calling our office at (555) 123-4567 or using our online booking system. We offer both in-person and virtual consultations to accommodate your needs.",
    },
    {
      id: "bring",
      question: "What should I bring to my first consultation?",
      answer:
        "Please bring any relevant documents related to your case, a list of questions you'd like to discuss, and a form of identification. We'll provide you with a detailed checklist when you schedule your appointment.",
    },
    {
      id: "confidential",
      question: "Will my case remain confidential?",
      answer:
        "Absolutely. All communications between you and our legal team are protected by attorney-client privilege. We maintain strict confidentiality protocols to protect your privacy and sensitive information.",
    },
  ];
  return (
    <div className="lg:h-80 overflow-y-scroll scrollbar-thin  scrollbar-thumb-[#009CFF] scrollbar-track-[#B6DEF8] [direction:rtl]">
      <div className="[direction:ltr] lg:pl-4">
        <Accordion type="single" collapsible>
          {faqData.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="lg:text-lg font-semibold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
