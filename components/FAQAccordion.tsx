import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { getFaqs } from '@/sanity/lib/server-api'

export default async function FAQAccordion() {
  const faqs = await getFaqs()

  return (
    <Accordion type="single" collapsible>
      {faqs.data?.map((faq: { question: string; answer: string }, i: number) => (
        <AccordionItem
          key={i}
          value={i.toString()}
          className="border-b border-navy/10"
        >
          <AccordionTrigger className="text-xl lg:text-2xl font-bold text-navy text-left py-7 hover:text-gold transition-colors duration-300 hover:no-underline [&>svg]:text-gold [&>svg]:shrink-0">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-navy/55 text-base leading-relaxed pb-8 font-sans-ui">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
