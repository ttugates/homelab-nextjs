import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/reusable/theme-selector";


export const metadata: Metadata = {
  title: "Michael Stramel learning NextJS",
  description: "This site is the prodcut of learning React and related current"
  + "libraries including NextJS, shadcn/ui, Tailwind, etc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>

          <header className="bg-blue-950 p-4 text-white text-center flex justify-between">
            <h1 className="text-xl font-bold">My Mobile-Friendly Layout</h1>
            <ModeToggle/>
          </header>
         
          <main className="flex-grow container mx-auto p-4">
            {children}
          </main>

          <footer className="p-4 text-white text-center">
            <p>© 2024 Mikes Home Lab Nextjs</p>
          </footer>
          
        </ThemeProvider>
      </body>
    </html>
  );
}