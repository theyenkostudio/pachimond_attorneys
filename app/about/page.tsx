import HeadingSection from '@/components/about/HeadingSection'
import ManagingDirectorMsg from '@/components/about/ManagingDirectorMsg'
import StaffMembersSection from '@/components/about/StaffMembersSection'
import React from 'react'

export default function About() {
  return (
    <div>
        <HeadingSection/>
        <StaffMembersSection/>
        <ManagingDirectorMsg/>
    </div>
  )
}
