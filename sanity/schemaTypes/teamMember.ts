import {defineType, defineField} from 'sanity'
import {UsersIcon} from '@sanity/icons'

export const teamMemberType = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({name: 'name', type: 'string', title: 'Name'}),
    defineField({name: 'title', type: 'string', title: 'Title / Role'}),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Photo',
      options: {hotspot: true},
      fields: [
        {name: 'alt', type: 'string', title: 'Alternative text'},
      ],
    }),
    defineField({
      name: 'bio',
      type: 'text',
      title: 'Bio',
      rows: 4,
      description: 'A short professional biography (2–3 sentences).',
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Email Address',
    }),
    defineField({
      name: 'phone',
      type: 'string',
      title: 'Phone Number',
    }),
    defineField({
      name: 'practiceAreas',
      type: 'array',
      title: 'Practice Areas',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Litigation', value: 'litigation'},
          {title: 'Corporate Law', value: 'corporate-law'},
          {title: 'Commercial Law', value: 'commercial-law'},
          {title: 'Intellectual Property', value: 'intellectual-property'},
          {title: 'Ethics & Professional Responsibility', value: 'ethics-professional-responsibility'},
          {title: 'Data Protection & Cybersecurity', value: 'data-protection-cybersecurity'},
        ],
      },
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'title', media: 'image'},
  },
})
