

import Sidebar from "@/Components/dashboard/Sidebar";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-black text-white">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <header className=" border-b flex items-center px-6">
         
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}