'use client'

import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

type CursorMode = 'default' | 'drag'

const CursorContext = createContext<{
  mode: CursorMode
  setMode: (mode: CursorMode) => void
}>({ mode: 'default', setMode: () => {} })

export function CursorProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<CursorMode>('default')
  return (
    <CursorContext.Provider value={{ mode, setMode }}>
      {children}
    </CursorContext.Provider>
  )
}

export const useCursor = () => useContext(CursorContext)
