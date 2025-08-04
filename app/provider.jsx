'use client';
// import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from './theme-provider';

export default function Providers({ children }) {
  return (
    <>
      {/* <Toaster /> */}
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