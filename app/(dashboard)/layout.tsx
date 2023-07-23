import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:w-64 md:flex md:flex-col md:fixed md:inset-y-0 z-[100] bg-gray-900">
        <Sidebar />
      </div>
      <main className="md:pl-64">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
