import React from "react";
import { UserButton } from "@clerk/nextjs";
import MobSidebar from "./MobSidebar";

const Navbar = () => {
  return (
    <div className="flex items-center p-3">
      <MobSidebar />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
