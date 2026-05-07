import HeadingSection from '@/components/about/HeadingSection'
import AboutStats from '@/components/about/AboutStats'
import StaffMembersSection from '@/components/about/StaffMembersSection'
import FirmValues from '@/components/about/FirmValues'
import ManagingDirectorMsg from '@/components/about/ManagingDirectorMsg'
import { getAbout } from '@/sanity/lib/server-api'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
}

export default async function About() {
  const aboutRes = await getAbout()
  const about = aboutRes.data
  return (
    <div>
      <HeadingSection about={about.about} />
      <AboutStats />
      <StaffMembersSection staffMembers={about.team} />
      <FirmValues />
      <ManagingDirectorMsg message={about.message} />
    </div>
  )
}
