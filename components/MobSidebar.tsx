"use client";

import { Button } from "./ui/button";
import Sidebar from "./Sidebar";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useEffect, useState } from "react";

const MobSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <span
          className="md:hidden h-10 w-10
            inline-flex items-center justify-center 
            rounded-md text-sm font-medium
            transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <Menu />
        </span>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobSidebar;
