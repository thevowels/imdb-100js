import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "@/components/Providers";
import NavBar from "@/components/NavBar";
import SearchBox from "@/components/SearchBox";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "IMDB Clone",
  description: "IMDB Clone by THEVOWELS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        <Providers>
          <Header/>

          <NavBar/>

          <SearchBox/>

          {children}

        </Providers>
      </body>
    </html>
  );
}
