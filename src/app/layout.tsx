import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/typography.css";
import { Toaster } from "@/components/ui/sonner";
import localFont from "@next/font/local";
import Header from "@/components/landingpage/header";
import Footer from "@/components/landingpage/footer";
// import callFont from "./CalSans-SemiBold.woff2";

const gt_haptik = localFont({
  src: [
    {
      path: "../../public/fonts/Sohne_Web_Kraftig_ea964dfd35.woff2",
    },
  ],
  variable: "--font-gt_haptik",
});

const buch = localFont({
  src: [
    {
      path: "../../public/fonts/soehne_web_buch_3d6750e360.woff2",
    },
  ],
  variable: "--font-buch",
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
        className={`${inter.className} trash:bg-[#ece8e17e] bg-brand-bg-DEFALUT text-brand-text-DEFALUT font-buch ${gt_haptik.variable}`}
      >
        {children} <Toaster />
      </body>
    </html>
  );
}
