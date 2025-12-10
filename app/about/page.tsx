import HeadingSection from '@/components/about/HeadingSection'
import ManagingDirectorMsg from '@/components/about/ManagingDirectorMsg'
import StaffMembersSection from '@/components/about/StaffMembersSection'
import { getAbout } from '@/sanity/lib/server-api'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'About Us',
};


export default async function About() {
  const aboutRes = await getAbout()
  const about = aboutRes.data;
  return (
    <div>
        <HeadingSection about={about.about} />
        <StaffMembersSection staffMembers={about.team}/>
        <ManagingDirectorMsg message={about.message}/>
    </div>
  )
}
