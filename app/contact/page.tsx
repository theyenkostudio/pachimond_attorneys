import ContactMain from '@/components/contact/ContactMain'
import FAQSection from '@/components/FAQSection'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'Contact Us',
};


export default function Contact() {
  return (
    <div>
        <ContactMain/>
        <FAQSection/>
    </div>
  )
}
