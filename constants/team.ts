export type TeamMemberDetail = {
  name: string
  bio: string
  practiceAreas: { label: string; slug: string }[]
  email: string
  phone: string
}

// Match `name` exactly to the name field in Sanity CMS.
// When hooking to Sanity, move these fields into the teamMember schema.
export const teamDetails: TeamMemberDetail[] = [
  {
    name: 'Glory Ovia Ovrampor',
    bio: 'Glory is the Managing Partner and Founder of Pachimond Attorneys. With over a decade of experience in corporate and commercial law, she has advised some of Nigeria\'s leading businesses on transactions, governance, and regulatory matters.',
    practiceAreas: [
      { label: 'Corporate Law', slug: 'corporate-law' },
      { label: 'Commercial Law', slug: 'commercial-law' },
      { label: 'Ethics & Professional Responsibility', slug: 'ethics-professional-responsibility' },
    ],
    email: 'glory@pachimondattorneys.com',
    phone: '+234 801 234 5678',
  },
  {
    name: 'Emeka Okonkwo',
    bio: 'Emeka is a Senior Associate whose practice spans commercial litigation and dispute resolution. He brings a methodical, evidence-led approach to complex disputes and has appeared before the Federal High Court and several State High Courts.',
    practiceAreas: [
      { label: 'Litigation', slug: 'litigation' },
      { label: 'Commercial Law', slug: 'commercial-law' },
    ],
    email: 'emeka@pachimondattorneys.com',
    phone: '+234 802 345 6789',
  },
  {
    name: 'Adaeze Nwachukwu',
    bio: 'Adaeze advises clients on intellectual property protection and data privacy compliance. She has helped a growing roster of technology companies and creative professionals navigate Nigeria\'s evolving regulatory landscape.',
    practiceAreas: [
      { label: 'Intellectual Property', slug: 'intellectual-property' },
      { label: 'Data Protection & Cybersecurity', slug: 'data-protection-cybersecurity' },
    ],
    email: 'adaeze@pachimondattorneys.com',
    phone: '+234 803 456 7890',
  },
  {
    name: 'Tobenna Eze',
    bio: 'Tobenna is an Associate focused on corporate governance and ethics advisory. He works closely with boards and executive teams to build compliance frameworks that are practical, proportionate, and built to last.',
    practiceAreas: [
      { label: 'Corporate Law', slug: 'corporate-law' },
      { label: 'Ethics & Professional Responsibility', slug: 'ethics-professional-responsibility' },
    ],
    email: 'tobenna@pachimondattorneys.com',
    phone: '+234 804 567 8901',
  },
]
