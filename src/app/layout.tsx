import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/typography.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/navbar";
import localFont from "@next/font/local";
import Header from "@/components/landingpage/header";
import Footer from "@/components/landingpage/footer";
// import callFont from "./CalSans-SemiBold.woff2";

const gt_haptik = localFont({
  src: [
    {
      path: "../../public/fonts/GTHaptik-Medium1.woff2",
    },
  ],
  variable: "--font-gt_haptik",
});

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
  description: "A Store for all your wood needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#ece8e17e] ${gt_haptik.variable}`}
      >
        {/* <Navbar/> */}
        {children} <Toaster />
        {/* <Footer/> */}
      </body>
    </html>
  );
}
