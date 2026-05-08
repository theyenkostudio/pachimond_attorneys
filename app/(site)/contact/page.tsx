import ContactMain from '@/components/contact/ContactMain'
import ContactInfo from '@/components/contact/ContactInfo'
import FAQSection from '@/components/FAQSection'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
};

export default function Contact() {
  return (
    <div className="overflow-x-hidden">
      <ContactMain />
      <ContactInfo />
      <div className="h-px bg-navy/10" />
      <FAQSection />
    </div>
  )
}
