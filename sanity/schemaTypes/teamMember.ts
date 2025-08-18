import {defineType, defineField} from 'sanity'
import {UsersIcon} from '@sanity/icons'

export const teamMemberType = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({name: 'name', type: 'string', title: 'Name'}),
    defineField({name: 'title', type: 'string', title: 'Title/Role'}),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {hotspot: true},
      fields: [
        {name: 'alt', type: 'string', title: 'Alternative text'},
      ]
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'title', media: 'image'},
  },
})
