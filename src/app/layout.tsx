import type { Metadata } from "next";
import { Michroma } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { ThemeProvider } from "@/components/theme-provider";

const michroma = Michroma({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-michroma",
});

const inter = Inter({
  weight: ["400", "500", "600", "700", "900"],
  subsets: ["latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Lukas Klockenhoff",
  description: "Created with Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={twMerge("h-full w-full overflow-y-scroll", inter.variable)}
    >
      <body className={"h-full w-full bg-white dark:bg-background"}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="grid min-h-full w-full pb-20 bg-white dark:bg-background">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
