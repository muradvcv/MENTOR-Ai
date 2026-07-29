"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoLogOutOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";


type User = {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: string | null;
};


export default function Navbar() {

  const [open, setOpen] = useState<boolean>(false);

  const {
    data: session,
    isPending
  } = authClient.useSession();


  const user = session?.user as User | undefined;


  const pathname = usePathname();


  if (pathname.startsWith("/dashboard")) {
    return null;
  }


  const handleLogout = async (): Promise<void> => {
    await authClient.signOut();
  };


  return (
    <nav className="fixed top-0 z-50 w-full bg-black/95">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">


        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-700 to-purple-500 font-bold text-white shadow-[0_0_25px_rgba(168,85,247,0.5)]">
            AI
          </div>


          <h1 className="text-xl font-bold text-white">
            Mentor<span className="text-purple-500">AI</span>
          </h1>

        </Link>



        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-10">

          <Link href="/" className="text-white hover:text-purple-400">
            Home
          </Link>


          <Link href="/about" className="text-white hover:text-purple-400">
            About
          </Link>


          <Link href="/features" className="text-white hover:text-purple-400">
            Features
          </Link>


          <Link href="/pricing" className="text-white hover:text-purple-400">
            Pricing
          </Link>

        </div>




        {/* Desktop Right */}

        <div className="hidden md:flex items-center gap-4">


          {
            isPending ? (
              <>
                <div className="h-10 w-10 animate-pulse rounded-full bg-purple-700/30" />
                <div className="h-10 w-24 animate-pulse rounded-xl bg-purple-700/30" />
              </>
            )

              :

              user ? (

                <div className="flex items-center gap-4">


                  <Link href={`/dashboard/${user.role}`}>

                    <LuLayoutDashboard
                      className="text-3xl text-purple-500 hover:text-purple-300 transition"
                    />

                  </Link>



                  <Link href="/profile">

                    <Image

                      src={
                        user.image
                        || "/default-avatar.png"
                      }

                      alt={
                        user.name
                        || "User"
                      }

                      width={44}
                      height={44}

                      className="
                    h-11 w-11 rounded-full 
                    border-2 border-purple-500 
                    object-cover
                    "

                    />

                  </Link>




                  <button

                    onClick={handleLogout}

                    className="
                  group flex h-11 w-11
                  items-center justify-center
                  rounded-2xl
                  border border-purple-500/40
                  bg-white/5
                  text-red-500
                
                  "

                  >

                    <IoLogOutOutline className="text-2xl" />

                  </button>



                </div>


              )

                :

                (

                  <>

                    <Link href="/auth/login">

                      <Button className="rounded-xl border border-purple-500/40 bg-black text-white">

                        Login

                      </Button>

                    </Link>



                    <Link href="/auth/register">

                      <Button className="rounded-xl bg-purple-600 text-white">

                        Get Started

                      </Button>

                    </Link>


                  </>

                )

          }


        </div>





        {/* Mobile Button */}

        <button

          onClick={() => setOpen(!open)}

          className="text-white md:hidden"

        >

          {
            open
              ? <X size={28} />
              : <Menu size={28} />
          }


        </button>


      </div>


      <div className="h-[0.5px] w-full bg-[#e973f63f]" />


    </nav>
  );
}