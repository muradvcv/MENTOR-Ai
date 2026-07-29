"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

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
        <div className="hidden items-center gap-10 md:flex">

          <Link href="/" className="text-sm font-medium text-white transition hover:text-purple-400">
            Home
          </Link>

          <Link href="/about" className="text-sm font-medium text-white transition hover:text-purple-400">
            About
          </Link>

          <Link href="/features" className="text-sm font-medium text-white transition hover:text-purple-400">
            Features
          </Link>

          <Link href="/pricing" className="text-sm font-medium text-white transition hover:text-purple-400">
            Pricing
          </Link>

        </div>




        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">

          <Link href="/auth/login">
            <Button className="rounded-xl border border-purple-500/40 bg-black px-6 text-white hover:border-purple-500 hover:bg-purple-600/10">
              Login
            </Button>
          </Link>


          <Link href="/auth/register">
            <Button className="rounded-xl bg-purple-600 px-6 font-semibold text-white shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:bg-purple-500">
              Get Started
            </Button>
          </Link>

        </div>




        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>


      </div>




      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-purple-600/20 bg-black px-6 py-5 md:hidden">

          <div className="flex flex-col gap-5">

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


            <div className="flex gap-3 pt-3">

              <Link href="/auth/login" className="w-1/2">
                <Button className="w-full rounded-xl border border-purple-500/40 bg-black text-white">
                  Login
                </Button>
              </Link>


              <Link href="/auth/register" className="w-1/2">
                <Button className="w-full rounded-xl bg-purple-600 text-white">
                  Register
                </Button>
              </Link>

            </div>

          </div>

        </div>
      )}




      {/* Purple Divider */}
      {/* Purple Divider */}
      <div className="h-[0.5px] w-full bg-[#e973f63f]" />
    </nav>
  );
}