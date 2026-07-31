"use client";

import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import {
  User,
  Mail,
  Shield,
  CalendarDays,
  BadgeCheck,
  Pencil,
} from "lucide-react";

type CurrentUser = {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: string | null;
  emailVerified?: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export default function MyProfile() {
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user as CurrentUser | undefined;

  if (isPending) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-purple-600" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-8 text-center text-red-400">
        User session not found.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Profile */}
      <div className="relative rounded-3xl border border-purple-500/20 bg-white/5 p-8 backdrop-blur-xl shadow-lg shadow-purple-900/10">

        {/* Edit Button */}
        <Link
          href="/dashboard/profile/edit"
          className="absolute right-6 top-6 flex px-5 py-2 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 transition-all duration-300 hover:scale-105 hover:border-purple-400"
        >
          Eidt<Pencil size={16} className="ml-1"/>
        </Link>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">

          {/* Image */}
          <div className="flex justify-center">
            <div className="h-44 w-44 overflow-hidden rounded-full border-4 border-purple-500 shadow-xl shadow-purple-500/20">
              <Image
                src={user.image || "/default-avatar.png"}
                alt={user.name || "User"}
                width={176}
                height={176}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Details */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-white">
              {user.name}
            </h1>            <p className="mt-2 text-gray-400">
              Welcome to your MentorAI dashboard.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">

              <div className="rounded-xl border border-purple-500/20 bg-white/5 p-4">
                <div className="flex items-center gap-2 text-purple-400">
                  <User size={18} />
                  <span>Name</span>
                </div>
                <p className="mt-2 text-white">
                  {user.name || "N/A"}
                </p>
              </div>

              <div className="rounded-xl border border-purple-500/20 bg-white/5 p-4">
                <div className="flex items-center gap-2 text-purple-400">
                  <Mail size={18} />
                  <span>Email</span>
                </div>
                <p className="mt-2 break-all text-white">
                  {user.email || "N/A"}
                </p>
              </div>

              <div className="rounded-xl border border-purple-500/20 bg-white/5 p-4">
                <div className="flex items-center gap-2 text-purple-400">
                  <Shield size={18} />
                  <span>Role</span>
                </div>
                <p className="mt-2 capitalize text-white">
                  {user.role || "User"}
                </p>
              </div>

              <div className="rounded-xl border border-purple-500/20 bg-white/5 p-4">
                <div className="flex items-center gap-2 text-purple-400">
                  <BadgeCheck size={18} />
                  <span>Email Status</span>
                </div>
                <p className="mt-2 text-white">
                  {user.emailVerified
                    ? "Verified ✅"
                    : "Not Verified ❌"}
                </p>
              </div>

              <div className="rounded-xl border border-purple-500/20 bg-white/5 p-4">
                <div className="flex items-center gap-2 text-purple-400">
                  <CalendarDays size={18} />
                  <span>Joined</span>
                </div>
                <p className="mt-2 text-white">
                  {user.createdAt
                    ? new Date(user.createdAt).toLocaleDateString()
                    : "N/A"}
                </p>
              </div>

              <div className="rounded-xl border border-purple-500/20 bg-white/5 p-4">
                <div className="flex items-center gap-2 text-purple-400">
                  <CalendarDays size={18} />
                  <span>Last Updated</span>
                </div>
                <p className="mt-2 text-white">
                  {user.updatedAt
                    ? new Date(user.updatedAt).toLocaleDateString()
                    : "N/A"}
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>      {/* About MentorAI */}
      <div className="rounded-3xl border border-purple-500/20 bg-white/5 p-8 backdrop-blur-xl">
        <h2 className="mb-4 text-2xl font-bold text-white">
          Welcome to <span className="text-purple-400">MentorAI</span>
        </h2>

        <p className="leading-8 text-gray-300">
          MentorAI is an AI-powered learning platform designed to help
          students, developers, and professionals improve their skills
          through intelligent guidance. Our goal is to provide personalized
          learning, smart recommendations, and an easy-to-use dashboard
          where you can manage your profile, explore powerful AI features,
          and grow your knowledge with the help of artificial intelligence.
        </p>
      </div>
    </div>
  );
}