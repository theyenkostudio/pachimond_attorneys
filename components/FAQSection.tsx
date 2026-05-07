import FAQAccordion from './FAQAccordion'
import FAQHeading from './FAQHeading'

export default function FAQSection() {
  return (
    <section className="bg-white py-24 lg:py-36">
      <div className="px-6 sm:px-10 lg:px-16">
        <div className="lg:grid lg:grid-cols-[1fr_1.6fr] lg:gap-20 xl:gap-28 items-start">
          <FAQHeading />
          <FAQAccordion />
        </div>
      </div>
    </section>
  )
}
