"use client";
import { GeistSans } from "geist/font/sans";
import { Playfair } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { usePathname } from "next/navigation";

const playfair = Playfair({
  subsets: ["latin-ext"],
  variable: "--font-playfair",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = usePathname();

  const title =
    location === "/"
      ? "Lukas Klockenhoff"
      : location === "/about"
      ? "About"
      : location === "/projects"
      ? "Projects"
      : location === "/legal"
      ? "Legal"
      : location === "/contact"
      ? "Contact"
      : "Lukas Klockenhoff";
  return (
    <html
      className={twMerge(
        "h-full w-full overflow-y-scroll",
        GeistSans.variable,
        playfair.variable,
      )}
      lang="en"
    >
      <head>
        <title>{title}</title>
        <meta property="og:site_name" content="Lukas Klockenhoff" />
        <meta
          property="og:title"
          content="Computer Science Student @ Tesla in Berlin"
        />
        <meta
          property="og:description"
          content="I am a 19-year-old student from Germany. I am currently studying Computer Science in cooperation with Tesla in Berlin ..."
        />
        <meta property="og:url" content="https://www.lukaskl.com/" />
        <meta property="og:type" content="website" />
        <meta property="article:publisher" content="https://www.lukaskl.com" />
        <meta property="og:image" content="https://www.lukaskl.com/l.png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content="https://www.lukaskl.com/l.png"
        />
        <meta property="twitter:site" content="@lukasklff" />
        <meta property="twitter:creator" content="@lukasklff" />
        <meta property="twitter:title" content="Lukas Klockenhoff" />
        <meta
          property="twitter:description"
          content="I am a 19-year-old student from Germany. I am currently studying Computer Science in cooperation with Tesla in Berlin ..."
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="icon" type="image/png" href="favicon.ico" />
      </head>
      <body
        className={
          "min-h-screen w-full bg-white dark:bg-background overflow-y-scroll select-text selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black"
        }
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="grid h-full min-h-screen w-full pb-20 bg-white dark:bg-background font-sans">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
