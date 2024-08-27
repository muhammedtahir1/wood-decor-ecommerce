import type { Metadata } from "next";
import Header from "@/components/landingpage/header";
import { Phone } from "lucide-react";

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
    <main className={``}>
      
      <Header />

      {children}
    </main>
  );
}
