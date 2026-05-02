import React from "react";
import ContactForm from "./ContactForm";

export default function ContactMain() {
  return (
    <section className="max-w-7xl lg:mx-auto">
      <div className="grid lg:grid-cols-2 lg:gap-10 mx-4">
       <div className="mb-10 lg:mb-0">
         <h2 className="font-bold text-2xl md:text-3xl mb-3 lg:text-4xl">
          Let&apos;s start the conversation.
        </h2>
        <p className="text-sm lg:text-lg">
          Take the first step with Pachimond Attorneys. Your consultation is
          free — no obligations, just clear legal advice and a strategy focused
          on protecting your interests.
        </p>
        <h4 className="text-sm lg:text-lg mt-4 mb-2 font-bold">Customer Support</h4>
        <p className="text-sm lg:text-lg">
          Need assistance? Our support team is ready to help with any inquiries
          or concerns you may have.
        </p>
        <h4 className="text-sm lg:text-lg mt-4 mb-2 font-bold">Feedback &amp; Questions</h4>
        <p className="text-sm lg:text-lg">
          Have feedback or a question? We&apos;d love to hear from you — share your
          thoughts and we&apos;ll respond promptly.
        </p>
       </div>
       <ContactForm/>
      </div>
    </section>
  );
}
