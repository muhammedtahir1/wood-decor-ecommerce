import type { Metadata } from "next";

import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Progress Tracker",
  description: "Track progress of team and yourself",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={``}>
      <Navbar />
      {children}
    </main>
  );
}
