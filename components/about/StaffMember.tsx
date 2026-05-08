import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

type StaffMemberProps = {
  name: string
  job: string
  image: string
  bio?: string
  practiceAreas?: { label: string; slug: string }[]
  onClick: () => void
  isSelected: boolean
}

export default function StaffMember({
  name,
  job,
  image,
  bio,
  practiceAreas,
  onClick,
  isSelected,
}: StaffMemberProps) {
  return (
    <div
      className="group cursor-pointer"
      onClick={onClick}
    >
      {/* Photo */}
      <div className="relative overflow-hidden aspect-[3/4] w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* White card below photo */}
      <div className="bg-white border border-t-0 border-navy/8 px-5 pt-4 pb-4">

        {/* Always-visible info */}
        <p className={`font-bold text-base leading-tight tracking-[-0.01em] transition-colors duration-300 ${isSelected ? 'text-gold' : 'text-navy'}`}>
          {name}
        </p>
        <p className="text-navy/45 text-xs font-sans-ui mt-1 uppercase tracking-[0.12em]">{job}</p>

        {/* Expandable: hover on desktop, isSelected on mobile */}
        <div className={`overflow-hidden transition-[max-height] duration-500 ease-[cubic-bezier(0.215,0.61,0.355,1)] ${isSelected ? 'max-h-[220px]' : 'max-h-0 group-hover:max-h-[220px]'}`}>
          <div className="border-t border-navy/8 mt-4 pt-4">
            {bio && (
              <p className="text-navy/50 text-xs leading-relaxed font-sans-ui line-clamp-3 mb-3">
                {bio}
              </p>
            )}
            {practiceAreas && practiceAreas.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-4">
                {practiceAreas.slice(0, 2).map((area) => (
                  <span
                    key={area.slug}
                    className="border border-navy/10 px-2 py-1 text-[10px] font-sans-ui text-navy/50 tracking-wide"
                  >
                    {area.label}
                  </span>
                ))}
              </div>
            )}
            <span className="inline-flex items-center gap-1.5 text-[10px] font-sans-ui text-gold tracking-[0.2em] uppercase">
              View profile <ArrowUpRight className="h-3 w-3" />
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}
