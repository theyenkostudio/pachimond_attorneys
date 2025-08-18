import {defineType, defineField} from 'sanity'
import {UserIcon} from '@sanity/icons'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({name: 'name', type: 'string', title: 'Name'}),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {hotspot: true},
      fields: [
        {name: 'alt', type: 'string', title: 'Alternative text'},
      ]
    }),
    defineField({name: 'title', type: 'string', title: 'Title/Position'}),
    defineField({name: 'text', type: 'text', title: 'Testimonial Text', rows: 4}),
  ],
  preview: {
    select: {title: 'name', subtitle: 'title', media: 'image'},
  },
})
