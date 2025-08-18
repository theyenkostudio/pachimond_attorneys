import HeadingSection from '@/components/about/HeadingSection'
import ManagingDirectorMsg from '@/components/about/ManagingDirectorMsg'
import StaffMembersSection from '@/components/about/StaffMembersSection'
import { getAbout } from '@/sanity/lib/server-api'
import React from 'react'

export default async function About() {
  const about = await getAbout()
  return (
    <div>
        <HeadingSection about={about.about} />
        <StaffMembersSection staffMembers={about.team}/>
        <ManagingDirectorMsg message={about.message}/>
    </div>
  )
}
