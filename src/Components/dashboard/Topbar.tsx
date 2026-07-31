"use client";

import Image from "next/image";
import Link from "next/link";


const Topbar = () => {
  return (
    <div className="mb-8 border-b border-purple-600/50 pb-1">
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