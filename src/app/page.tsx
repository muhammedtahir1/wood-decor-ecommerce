import Link from "next/link";

export default function Home() {
  return (
   <main className="flex flex-col gap-5 items-center justify-center min-h-screen">

    <h1 className="text-4xl font-semibold">Team progress tracker</h1>

    <Link href={"/login"} className="underline text-blue-400 ">Login</Link>
    <Link href={"/team"} className="underline text-blue-400 ">Team</Link>
    <Link href={"/dashboard"} className="underline text-blue-400 ">Dashboard</Link>

   </main>
  );
}
