import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/typography.css";
import { Toaster } from "@/components/ui/sonner";
import localFont from "next/font/local";
import { siteConfig } from "@/lib/site";
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta property="og:title" content="Wood Decor" />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:image" content={siteConfig.ogImage} />
        <meta property="og:url" content={siteConfig.url} />
        <meta property="og:type" content="website" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: siteConfig.name,
              url: siteConfig.url,
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} trash:bg-[#ece8e17e] bg-brand-bg-DEFALUT/50 text-brand-text-DEFALUT font-buch ${gt_haptik.variable}`}
      >
        {children} <Toaster richColors />
      </body>
    </html>
  );
}
