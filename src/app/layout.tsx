import type { Metadata } from "next";
import { Inter, Roboto_Mono  } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/typography.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/navbar";
import localFont from "next/font/local";
import Header from "@/components/landingpage/header";
import Footer from "@/components/landingpage/footer";
// import callFont from "./CalSans-SemiBold.woff2";

const inter = Inter({ subsets: ["latin"] });
// const roboto_mono = Roboto_Mono({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-roboto-mono',
// })

// (TODO: See why its not working)
// const myFont = localFont({
//   src: "./CalSans-SemiBold.woff2",
//   variable: "--calsans",
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Wood Decor",
  description: "Track progress of team and yourself",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* <Navbar/> */}
        <Header/>
        {children} <Toaster />
        {/* <Footer/> */}
      </body>
    </html>
  );
}
