'use client';

// import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from './theme-provider';
import NextTopLoader from 'nextjs-toploader';

export default function Providers({ children }) {
  return (
    <>
      {/* <Toaster /> */}
      <NextTopLoader showSpinner={false} />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
}
