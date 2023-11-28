import type { Metadata } from "next";
import { Michroma } from "next/font/google";
import { Inter } from "next/font/google";
import { Playfair } from "next/font/google";
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

const playfair = Playfair({
  weight: ["400", "500", "600", "700", "900"],
  subsets: ["latin-ext"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Lukas Klockenhoff",
  description: "My Portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={twMerge(
        "h-full w-full overflow-y-scroll",
        michroma.variable,
        inter.variable,
        playfair.variable,
      )}
      lang="en"
    >
      <body
        className={
          "min-h-screen w-full bg-white dark:bg-background overflow-y-scroll"
        }
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="grid h-full min-h-screen w-full pb-20 bg-white dark:bg-background">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
