import type { Metadata } from "next";
import "../config/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AppFooter } from "@/components/app-footer";
import { AppHeader } from "@/components/app-header";
import { Space_Mono  } from 'next/font/google'

export const metadata: Metadata = {
  title: "Michael Stramel's NextJS Project",
  description: "This site is the prodcut of learning React and related current"
  + "libraries including NextJS, shadcn/ui, Tailwind, etc.",
};

const roboto = Space_Mono({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <body className={roboto.className + ' min-h-screen flex flex-col'}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>

          <AppHeader />
         
          <main className="flex-grow container mx-auto p-4">
            {children}
          </main>

          <AppFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}