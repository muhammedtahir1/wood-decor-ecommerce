import { auth } from "@/auth";
import Menu from "@/components/menu";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = async () => {
  const session = await auth();
  return (
    <nav className="flex justify-between items-center py-4 px-6 border-b-2">
      <div>
        <Menu session={session} />
      </div>
      {session ? (
        <Avatar>
          <AvatarImage src="https://github.com" />
          <AvatarFallback className="capitalize">
            {session.user?.email?.split("")[0]}
          </AvatarFallback>
        </Avatar>
      ) : (
        <Link
          href={"/login"}
          className="bg-black px-4 py-2 rounded-full text-sm text-white"
        >
          Login
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
