import Image from 'next/image'
import type { PortableTextComponents } from '@portabletext/react'

export const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-navy/65 text-lg leading-[1.8] font-sans-ui mb-6">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl lg:text-3xl font-bold text-navy leading-tight tracking-[-0.02em] mt-14 mb-5">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl lg:text-2xl font-bold text-navy leading-tight tracking-[-0.01em] mt-10 mb-4">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-sm font-sans-ui font-semibold text-navy uppercase tracking-[0.15em] mt-8 mb-3">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-gold pl-6 my-10 py-1">
        <span className="block font-display text-2xl lg:text-3xl text-navy/70 italic leading-relaxed">
          {children}
        </span>
      </blockquote>
    ),
  },

  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-navy">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),
    link: ({ value, children }) => {
      const isExternal = value?.href?.startsWith('http')
      return (
        <a
          href={value?.href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="text-gold underline underline-offset-2 hover:no-underline transition-colors duration-200"
        >
          {children}
        </a>
      )
    },
    code: ({ children }) => (
      <code className="font-mono text-sm bg-navy/5 text-navy/70 px-1.5 py-0.5">
        {children}
      </code>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-6 space-y-2 text-navy/65 font-sans-ui text-lg">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-navy/65 font-sans-ui text-lg">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },

  types: {
    image: ({ value }) => (
      <div className="relative w-full aspect-[16/9] overflow-hidden my-10">
        <Image
          src={value.url}
          alt={value.alt || ''}
          fill
          className="object-cover"
          sizes="768px"
        />
      </div>
    ),
  },
}
