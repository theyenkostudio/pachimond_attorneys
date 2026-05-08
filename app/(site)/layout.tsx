import Navbar from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import { CursorProvider } from '@/components/providers/CursorContext'
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <CursorProvider>
      <CustomCursor />
      <SmoothScrollProvider>
        <Navbar />
        {children}
        <Footer />
      </SmoothScrollProvider>
    </CursorProvider>
  )
}
