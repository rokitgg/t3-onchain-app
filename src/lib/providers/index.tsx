'use client'

import { config } from "@/server/wagmi"
import { useState, type ReactNode } from 'react'


import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from '@/lib/providers/theme'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';


export function ContextProvider(props: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {props.children}
            <ProgressBar height="4px" color="#fffd00" options={{ showSpinner: false }} shallowRouting />
        </ThemeProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
