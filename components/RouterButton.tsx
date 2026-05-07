'use client'

import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'

interface RouterButtonProps {
  path: string
  label?: string
  variant?: 'light' | 'dark'
}

export default function RouterButton({
  path,
  label = 'Book a Consultation',
  variant = 'light',
}: RouterButtonProps) {
  const router = useRouter()

  const isLight = variant === 'light'

  return (
    <button
      onClick={() => router.push(path)}
      className={`group relative inline-flex items-center gap-3 border px-7 py-3.5 text-sm font-medium overflow-hidden transition-colors duration-300 ${
        isLight
          ? 'border-white text-white'
          : 'border-navy text-navy'
      }`}
    >
      {/* Slide-fill on hover */}
      <span
        className={`absolute inset-0 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out ${
          isLight ? 'bg-white' : 'bg-navy'
        }`}
      />
      <span
        className={`relative transition-colors duration-300 ${
          isLight
            ? 'group-hover:text-navy'
            : 'group-hover:text-white'
        }`}
      >
        {label}
      </span>
      <ArrowRight
        className={`relative h-4 w-4 transition-colors duration-300 ${
          isLight
            ? 'group-hover:text-navy'
            : 'group-hover:text-white'
        }`}
      />
    </button>
  )
}
