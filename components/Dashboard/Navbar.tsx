import React from "react";
import { UserButton } from "@clerk/nextjs";
import MobSidebar from "./MobSidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const Navbar = async () => {
  const isPro = await checkSubscription();
  const limit = await getApiLimitCount();
  return (
    <div className="flex items-center p-3">
      <MobSidebar isPro={isPro} limit={limit} />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
