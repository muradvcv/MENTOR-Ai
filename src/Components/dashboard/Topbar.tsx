"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const Topbar = () => {
  return (
    <div className="mb-8 border-b border-purple-600/50 pb-4 flex gap-5 ">

      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-xl border border-purple-600/50 bg-white/5 px-4 py-1 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-purple-500 hover:bg-purple-500/10 hover:text-purple-500"
      >
        <ArrowLeft size={18} />
      </Link>
      <Link
        href="/"
        className="flex items-center gap-3"
      >

        <div>
          <h1 className="text-xl font-bold text-white">
            Mentor<span className="text-purple-600">AI</span>
          </h1>

          <p className="text-xs text-purple-300">
            AI Powered Learning
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Topbar;