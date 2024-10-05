"use client"; // Error boundaries must be Client Components

import Footer from "@/components/landingpage/footer";
import Header from "@/components/landingpage/header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <Header />
      <main className="min-h-[70vh] flex flex-col items-center justify-center">
        <h2>Something went wrong!</h2>
        <button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
        <Link href={"/"}>
          <Button className="flex items-center">
            <ArrowLeft className="mr-1" /> Go back to home
          </Button>
        </Link>
      </main>

      <Footer />
    </div>
  );
}
