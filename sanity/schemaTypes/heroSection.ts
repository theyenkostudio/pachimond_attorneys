import {defineType, defineField} from 'sanity'
import {HomeIcon} from '@sanity/icons'

export const heroSectionType = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
    }),
    defineField({
      name: 'subHeading',
      type: 'text',
      title: 'Sub-heading',
      rows: 3
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title}) {
      return {
        title,
        subtitle: 'Hero Section',
      }
    },
  },
})
