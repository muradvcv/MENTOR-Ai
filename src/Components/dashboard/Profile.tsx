"use client";

import { authClient, useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { LogOut, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";

const Profile = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const user = session?.user;

  if (!user) return null;

  return (
    <div className="overflow-hidden rounded-xl border border-purple-500/20 bg-purple-500/10 p-3 shadow-lg shadow-purple-500/10">
      <div className="flex items-center gap-3">

        {/* বাম পাশে: গোল এভাটার (ক্লিক করলে প্রোফাইলে যাবে) */}
        <Link
          href={`/dashboard/myprofile`}
          className="group relative shrink-0"
        >
          <Image
            src={user.image || "/default-avatar.png"}
            alt={user.name ?? "User"}
            width={44}
            height={44}
            className="h-11 w-11 rounded-full border-2 border-purple-500 object-cover ring-2 ring-purple-500/20 transition-all duration-300 group-hover:scale-105 group-hover:ring-purple-400"
          />
          {/* অনলাইন ইন্ডিকেটর */}
          <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-green-500 dark:border-slate-900" />
        </Link>

        {/* ডান পাশে: নাম এবং তার নিচে লগআউট বাটন */}
        <div className="flex-1 min-w-0 flex flex-col gap-1">

          {/* ইউজার নেম */}
          <Link
            href="/dashboard/myprofile"
            className="group flex items-center gap-2"
          >
            <h2 className="truncate text-sm font-bold text-white transition-colors duration-300 group-hover:text-purple-400">
              {user.name ?? "Unknown User"}
            </h2>

            {user.role === "admin" && (
              <ShieldCheck className="h-4 w-4 shrink-0 text-purple-500" />
            )}
          </Link>
          
          {/* logout btn */}
          <Button
            onPress={async () => {
              await authClient.signOut({
                fetchOptions: {
                  onSuccess: () => {
                    router.replace("/");
                  },
                },
              });
            }}
            className="flex w-fit items-center gap-1 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 px-2 py-0.5 text-[11px] font-bold text-purple-400 hover:text-purple-300 border border-purple-500/20 h-6 transition-all duration-200"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>

        </div>
      </div>
    </div>
  );
};

export default Profile;