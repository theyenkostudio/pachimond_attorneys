import {defineType, defineField} from 'sanity'
import {HelpCircleIcon} from '@sanity/icons'

export const faqType = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  icon: HelpCircleIcon,
  fields: [
    defineField({name: 'question', type: 'string', title: 'Question'}),
    defineField({name: 'answer', type: 'text', title: 'Answer', rows: 3}),
  ],
  preview: {
    select: {title: 'question'},
    prepare({title}) {
      return {title, subtitle: 'FAQ'}
    }
  }
})
