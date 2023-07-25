import Navbar from "@/components/Dashboard/Navbar";
import Sidebar from "@/components/Dashboard/Sidebar";
import { checkSubscription } from "@/lib/subscription";
import { getApiLimitCount } from "@/lib/api-limit";

import React from "react";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const limit = await getApiLimitCount();
  const isPro = await checkSubscription();
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:w-64 md:flex md:flex-col md:fixed md:inset-y-0 z-[10] bg-gray-900">
        <Sidebar isPro={isPro} limit={limit} />
      </div>
      <main className="md:pl-64">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
