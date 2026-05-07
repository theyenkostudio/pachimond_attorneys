import Image from 'next/image'

type TestimonialCardProps = {
  name: string
  image: string
  title: string
  text: string
}

export default function TestimonialCard({ name, image, title, text }: TestimonialCardProps) {
  return (
    <div className="bg-cream rounded-2xl p-8 flex flex-col h-full">
      <p className="font-playfair text-6xl text-gold leading-none mb-4 select-none">&ldquo;</p>
      <p className="text-navy/80 leading-relaxed flex-1">{text}</p>
      <div className="flex items-center gap-3 mt-8 pt-6 border-t border-navy/10">
        <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 ring-2 ring-gold/30">
          <Image src={image} fill className="object-cover" alt={name} sizes="48px" />
        </div>
        <div>
          <p className="font-semibold text-navy text-sm">{name}</p>
          <p className="text-gray-400 text-sm">{title}</p>
        </div>
      </div>
    </div>
  )
}
