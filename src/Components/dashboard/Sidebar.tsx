"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentType, SVGProps } from "react";
import {
  Bars,
  LayoutHeaderCells,
} from "@gravity-ui/icons";
import { House, PackagePlus, Package, ShoppingCart, Users, CircleDollarSign, } from "lucide-react";

import { Button, Drawer } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import Topbar from "./Topbar";
import Profile from "./Profile";


type Role = "user" | "admin";
type NavItem = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  href: string;
};

const navItems: Record<Role, NavItem[]> = {
  user: [
    { icon: LayoutHeaderCells, label: "Overview", href: "/dashboard/user" },
    { icon: PackagePlus, label: "Add Product", href: "/dashboard/admin/additeam" },
    { icon: Package, label: "All Products", href: "/dashboard/admin/allproducts" },
    { icon: Users, label: "My profile", href: "/dashboard/myprofile" },
  ],
  admin: [
    { icon: House, label: "Overview", href: "/dashboard/admin" },
    { icon: PackagePlus, label: "Add Product", href: "/dashboard/admin/additeam" },
    { icon: Package, label: "Manage Products", href: "/dashboard/admin/allproducts" },
    { icon: ShoppingCart, label: "Manage Orders", href: "/dashboard/admin/manageorders" },
    { icon: Users, label: "Manage Users", href: "/dashboard/admin/manageuser" },
    { icon: CircleDollarSign, label: "Total Revenue", href: "/dashboard/admin/revenue" },
    { icon: Users, label: "My Profile", href: "/dashboard/myprofile" },
  ],
};

// ---------- Loading placeholders ----------

// একটা ড্যাশবোর্ড মেনু আইটেম (আইকন + লেবেল) লোড হওয়ার সময় দেখানো placeholder
function DashboardItemLoading() {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-purple-500/20 bg-white/5 px-4 py-3 backdrop-blur-lg shadow-lg shadow-purple-500/10">
      <div className="h-5 w-5 rounded-md bg-purple-400/30 animate-pulse" />
      <div className="h-4 w-28 rounded-md bg-purple-400/30 animate-pulse" />
    </div>
  );
}

// পুরো ড্যাশবোর্ড মেনু (৫টা DashboardItemLoading একসাথে) লোড হওয়ার সময় দেখানো placeholder
function DashboardMenuLoading() {
  return (
    <div className="flex flex-col gap-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <DashboardItemLoading key={i} />
      ))}
    </div>
  );
}

// প্রোফাইল সেকশন (ছবি + নাম) লোড হওয়ার সময় দেখানো placeholder
function ProfileLoading() {
  return (
    <div className="mt-auto overflow-hidden rounded-2xl border border-purple-500/20 bg-white/5 backdrop-blur-xl shadow-lg shadow-purple-500/10">
      {/* Top accent bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-purple-600 via-purple-500 to-violet-500 animate-pulse" />

      {/* Profile row */}
      <div className="flex items-center gap-4 p-4">
        {/* Avatar */}
        <div className="relative shrink-0">
          <div className="h-14 w-14 rounded-full border border-purple-500/20 bg-white/5 backdrop-blur-md animate-pulse" />
          <span className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-2 border-black bg-purple-500 animate-pulse" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="h-4 w-32 rounded-md bg-purple-500/20 animate-pulse" />
          <div className="mt-2 h-3 w-40 rounded-md bg-purple-500/20 animate-pulse" />
          <div className="mt-2 h-5 w-16 rounded-full border border-purple-500/20 bg-white/5 backdrop-blur-md animate-pulse" />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-purple-900" />

      {/* Footer / Logout button placeholder */}
      <div className="flex items-center justify-center py-6">
        <div className="h-4 w-20 rounded-md bg-purple-500/20 animate-pulse" />
      </div>
    </div>
  );
}

// ---------- Sidebar ----------
export default function Sidebar() {
  const { data: session, isPending } = authClient.useSession();
  const pathname = usePathname();

  const role: Role = session?.user?.role === "admin" ? "admin" : "user";
  const items = navItems[role];

  // বর্তমান pathname অনুযায়ী কোন nav item active সেটা চেক করে
  const isActive = (href: string) => {
    if (href === "/dashboard/user" || href === "/dashboard/admin") {
      return pathname === href;
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      {/* Desktop */}
      <aside className="hidden md:flex md:flex-col w-64 border-r border-default-200 min-h-screen h-screen sticky top-0 p-4">
        <Topbar />
        {isPending ? (
          <>
            <DashboardMenuLoading />
            <ProfileLoading />
          </>
        ) : (
          <>
            <nav className="flex flex-col gap-2">
              {items.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group flex items-center gap-3 rounded-xl border px-4 py-3 backdrop-blur-xl transition-all duration-300 ${active
                      ? "border-purple-500/40 bg-purple-500/15 text-white shadow-md shadow-purple-500/20"
                      : "border-white/10 bg-white/5 text-gray-300 hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-white"
                      }`}
                  >
                    <item.icon
                      className={`h-5 w-5 ${active ? "text-purple-400" : "text-gray-400"
                        }`}
                    />
                    <span className={active ? "font-semibold" : "font-medium"}>
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </nav>
            {/* always bottom mt-auto */}
            <div className="mt-auto">
              <Profile />
            </div>
          </>
        )}
      </aside>

      {/* Mobile */}
      <div className="md:hidden">
        <Drawer>
          <Button
            isIconOnly
            isDisabled={isPending}
            className="border border-purple-500/20 bg-black/40 text-pink-500 backdrop-blur-md hover:bg-purple-500/20"
          >
            <Bars className="h-5 w-5" />
          </Button>

          <Drawer.Backdrop className="bg-black/80 backdrop-blur-sm" />

          <Drawer.Content
            placement="left"
            className="!w-72 !bg-black border-r border-purple-500/20"
          >
            <Drawer.Dialog className="flex h-full flex-col !bg-black text-purple-600">
              <Drawer.CloseTrigger className="text-purple-800 hover:text-purple-400" />

              <Drawer.Header className="border-b border-purple-500/20 bg-black">
                <Drawer.Heading className="text-lg font-bold text-white">
                  Mentor<span className="text-purple-500">AI</span>
                </Drawer.Heading>
              </Drawer.Header>

              <Drawer.Body className="flex flex-1 flex-col gap-4 bg-black py-5">
                {isPending ? (
                  <>
                    <DashboardMenuLoading />
                    <ProfileLoading />
                  </>
                ) : (
                  <>
                    <nav className="flex flex-col gap-2">
                      {items.map((item) => {
                        const active = isActive(item.href);

                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 rounded-xl border px-4 py-3 backdrop-blur-md transition-all duration-300 ${active
                              ? "border-purple-500/30 bg-purple-500/20 text-white shadow-lg shadow-purple-500/20"
                              : "border-white/10 bg-white/5 text-gray-300 hover:border-purple-500/20 hover:bg-white/10 hover:text-white"
                              }`}
                          >
                            <item.icon
                              className={`h-5 w-5 ${active ? "text-purple-300" : "text-gray-400"
                                }`}
                            />

                            <span className={active ? "font-semibold" : "font-medium"}>
                              {item.label}
                            </span>
                          </Link>
                        );
                      })}
                    </nav>

                    <div className="mt-auto border-t border-purple-500/20 pt-5">
                      <Profile />
                    </div>
                  </>
                )}
              </Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer>
      </div>
    </>
  );
}