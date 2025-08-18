import {defineType, defineField} from 'sanity'
import {CogIcon} from '@sanity/icons'

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({name: 'serviceName', type: 'string', title: 'Service Name'}),
    defineField({
      name: 'serviceImage',
      type: 'image',
      title: 'Service Image',
      options: {hotspot: true},
      fields: [
        {name: 'alt', type: 'string', title: 'Alternative text'},
      ]
    }),
  ],
  preview: {
    select: {title: 'serviceName', media: 'serviceImage'},
  },
})
