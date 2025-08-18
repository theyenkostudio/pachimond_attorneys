import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useFaqs } from "@/hooks/useSanityData";
import { getFaqs } from "@/sanity/lib/server-api";

export default async function FAQAccordion() {
const faqs = await getFaqs()

  return (
    <div className="lg:h-80 overflow-y-scroll scrollbar-thin  scrollbar-thumb-[#009CFF] scrollbar-track-[#B6DEF8] [direction:rtl]">
      <div className="[direction:ltr] lg:pl-4">
        <Accordion type="single" collapsible>
          {faqs.map((faq: { question: string; answer: string }, i: number) => (
            <AccordionItem key={i} value={i.toString()}>
              <AccordionTrigger className="lg:text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
