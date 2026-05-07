export type KeyService = {
  title: string
  description: string
}

export type PracticeArea = {
  slug: string
  number: string
  title: string
  heroLines: string[]
  tagline: string
  image: string
  overview: string
  keyServices: KeyService[]
  approach: string
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: 'litigation',
    number: '01',
    title: 'Litigation',
    heroLines: ['Litigation.'],
    tagline: 'Representation in civil and commercial disputes, with a focus on achieving practical and efficient outcomes.',
    image: '/services/litigation.jpg',
    overview:
      'When disputes escalate beyond negotiation, you need advocates who combine sharp legal strategy with courtroom confidence. Our litigation team represents individuals and businesses before the Federal High Court, State High Courts, and appellate tribunals — pursuing resolutions that protect your interests at every stage of the process.',
    keyServices: [
      {
        title: 'Civil Litigation',
        description: 'Representation across a wide range of civil matters including property disputes, contractual claims, and tortious liability.',
      },
      {
        title: 'Commercial Disputes',
        description: 'Strategic handling of complex business disputes — shareholder conflicts, breach of contract, and enforcement of judgments.',
      },
      {
        title: 'Debt Recovery',
        description: 'Efficient recovery of outstanding debts through pre-litigation demands, court proceedings, and enforcement mechanisms.',
      },
      {
        title: 'Employment & Labour Disputes',
        description: 'Representation of employers and employees in wrongful termination, discrimination, and workplace disputes before the National Industrial Court.',
      },
      {
        title: 'Alternative Dispute Resolution',
        description: 'Mediation and arbitration as cost-effective alternatives to full trial — where appropriate and in the client\'s best interest.',
      },
    ],
    approach:
      'We approach every dispute with a clear-eyed assessment of risk and opportunity. Before any filing, we analyse the merits, identify leverage points, and define what a successful outcome looks like for you. Our goal is not to prolong litigation — it is to resolve it on the best available terms, as efficiently as possible.',
  },
  {
    slug: 'corporate-law',
    number: '02',
    title: 'Corporate Law',
    heroLines: ['Corporate', 'Law.'],
    tagline: 'Advisory on company formation, governance, compliance, and regulatory matters.',
    image: '/services/corporate.jpg',
    overview:
      'Sound corporate structure is the foundation of every successful business. We advise entrepreneurs, growing companies, and established enterprises on the legal frameworks that govern how they operate, make decisions, and stay compliant — from incorporation through to complex governance challenges.',
    keyServices: [
      {
        title: 'Company Formation & Registration',
        description: 'Incorporation of private and public companies with the Corporate Affairs Commission, including structure advisory and constitutional documents.',
      },
      {
        title: 'Corporate Governance',
        description: 'Drafting and review of articles, shareholder agreements, board charters, and policies that define how decisions are made and accountability maintained.',
      },
      {
        title: 'Regulatory Compliance',
        description: 'Guidance on compliance obligations across sectors — from the Securities and Exchange Commission to the Central Bank of Nigeria.',
      },
      {
        title: 'Mergers & Acquisitions',
        description: 'End-to-end advisory on business combinations — due diligence, transaction structuring, regulatory approvals, and post-completion integration.',
      },
      {
        title: 'Board & Executive Advisory',
        description: 'Ongoing counsel to boards and senior executives on fiduciary duties, conflict of interest, and governance best practice.',
      },
    ],
    approach:
      'We believe good corporate law is invisible — it works in the background, ensuring your business can move quickly and confidently. We structure our advice to anticipate problems before they arise, and to give you clarity on the options available at every decision point.',
  },
  {
    slug: 'commercial-law',
    number: '03',
    title: 'Commercial Law',
    heroLines: ['Commercial', 'Law.'],
    tagline: 'Structuring, reviewing, and advising on business transactions and agreements.',
    image: '/services/commercial.jpg',
    overview:
      'Every commercial relationship rests on the quality of its underlying agreements. We work with businesses at all stages — drafting bespoke contracts, reviewing third-party terms, and advising on the legal dimensions of complex transactions — so that your commercial dealings are protected from the outset.',
    keyServices: [
      {
        title: 'Contract Drafting & Review',
        description: 'Preparation and review of commercial contracts — supply agreements, service contracts, licensing arrangements, and more — tailored to your risk appetite.',
      },
      {
        title: 'Transaction Structuring',
        description: 'Legal advisory on how to structure deals — joint ventures, partnerships, and business acquisitions — to achieve your commercial objectives efficiently.',
      },
      {
        title: 'Joint Ventures & Partnerships',
        description: 'Drafting and negotiation of joint venture agreements, consortium arrangements, and partnership deeds.',
      },
      {
        title: 'Distribution & Agency Agreements',
        description: 'Advice on distribution, franchise, and agency arrangements — including exclusivity, territory, and termination provisions.',
      },
      {
        title: 'Supply Chain & Procurement',
        description: 'Legal support for procurement processes — from tender documentation to framework agreements and supplier contracts.',
      },
    ],
    approach:
      'Commercial law advisory is most valuable when it is commercially literate. We read every agreement with an eye on what could go wrong — and structure protections accordingly — without losing sight of the deal you are trying to do. We are problem-solvers, not blockers.',
  },
  {
    slug: 'intellectual-property',
    number: '04',
    title: 'Intellectual Property',
    heroLines: ['Intellectual', 'Property.'],
    tagline: 'Protection of trademarks, copyrights, and other proprietary rights.',
    image: '/services/ip.jpg',
    overview:
      'Your brand, creative work, and proprietary knowledge are among your most valuable business assets. We help individuals, businesses, and creative professionals register, protect, and enforce intellectual property rights in Nigeria — building a shield around what makes your business distinct.',
    keyServices: [
      {
        title: 'Trademark Registration & Protection',
        description: 'Filing, prosecution, and maintenance of trademark applications with the Trademarks, Patents and Designs Registry.',
      },
      {
        title: 'Copyright Advisory',
        description: 'Advice on copyright ownership, licensing, and enforcement for creators, publishers, software developers, and content businesses.',
      },
      {
        title: 'IP Portfolio Management',
        description: 'Strategic management of IP assets — audits, renewals, recordal of assignments, and enforcement planning.',
      },
      {
        title: 'IP Licensing & Commercialisation',
        description: 'Drafting and negotiation of licensing agreements, franchising arrangements, and technology transfer agreements.',
      },
      {
        title: 'IP Enforcement & Disputes',
        description: 'Enforcement of IP rights through cease and desist actions, administrative proceedings, and litigation where necessary.',
      },
    ],
    approach:
      'We take a proactive stance on IP protection — identifying risks early, securing registrations systematically, and acting swiftly when rights are infringed. The best IP strategy combines a strong defensive portfolio with the willingness to enforce it.',
  },
  {
    slug: 'ethics-professional-responsibility',
    number: '05',
    title: 'Ethics & Professional Responsibility',
    heroLines: ['Ethics &', 'Professional', 'Responsibility.'],
    tagline: 'Advisory on ethical compliance, professional standards, and best practices in legal and corporate environments.',
    image: '/services/corporate.jpg',
    overview:
      'In an environment of increasing regulatory scrutiny, the ethical conduct of professionals and organisations is not merely a reputational concern — it carries real legal consequences. We advise businesses and professionals on the frameworks that govern conduct, helping them navigate complex ethical questions before they become legal crises.',
    keyServices: [
      {
        title: 'Ethics & Conduct Advisory',
        description: 'Guidance on professional ethics obligations for lawyers, accountants, directors, and other regulated professionals.',
      },
      {
        title: 'Conflict of Interest Review',
        description: 'Assessment and management of actual and potential conflicts of interest in transactions, appointments, and professional relationships.',
      },
      {
        title: 'Policy Drafting & Implementation',
        description: 'Development of codes of conduct, anti-corruption policies, whistleblower frameworks, and compliance programmes.',
      },
      {
        title: 'Internal Investigations',
        description: 'Discreet handling of internal investigations into alleged misconduct — interviewing, fact-finding, and preparing reports for boards or regulators.',
      },
      {
        title: 'Regulatory Proceedings',
        description: 'Representation before professional regulatory bodies and disciplinary tribunals.',
      },
    ],
    approach:
      'Our approach to ethics advisory is practical, not theoretical. We help you build systems and policies that make right conduct the path of least resistance — and stand ready to advise when difficult situations arise that require careful, considered judgement.',
  },
  {
    slug: 'data-protection-cybersecurity',
    number: '06',
    title: 'Data Protection & Cybersecurity',
    heroLines: ['Data Protection', '& Cybersecurity.'],
    tagline: 'Guidance on data privacy, regulatory compliance, and risk management in an increasingly digital environment.',
    image: '/services/ip.jpg',
    overview:
      'The Nigeria Data Protection Act and its accompanying regulations have transformed how businesses must handle personal data. Simultaneously, cyber threats continue to grow in scale and sophistication. We help organisations understand their obligations, build compliant data practices, and respond effectively when things go wrong.',
    keyServices: [
      {
        title: 'NDPA & NDPR Compliance',
        description: 'Gap analysis, compliance roadmaps, and ongoing advisory to align your operations with Nigeria\'s data protection framework.',
      },
      {
        title: 'Privacy Policies & Data Frameworks',
        description: 'Drafting of privacy notices, data processing agreements, data retention policies, and subject access request procedures.',
      },
      {
        title: 'Data Protection Officer Services',
        description: 'External DPO support for organisations required to designate a Data Protection Officer under applicable regulations.',
      },
      {
        title: 'Cybersecurity Risk & Incident Advisory',
        description: 'Legal advice on cybersecurity governance, incident response planning, and regulatory notification obligations following a data breach.',
      },
      {
        title: 'Cross-Border Data Transfers',
        description: 'Advisory on the legal requirements for transferring personal data outside Nigeria, including appropriate safeguards and contractual mechanisms.',
      },
    ],
    approach:
      'Data protection law is technical and fast-moving. We combine legal expertise with a practical understanding of how technology businesses operate, delivering advice that is compliant in theory and workable in practice — not just a checklist of obligations.',
  },
]
