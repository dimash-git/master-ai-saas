"use client";

import { useEffect, useState } from "react";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Sidebar from "./Sidebar";

interface MobSidebarProps {
  limit: number;
  isPro: boolean;
}

const MobSidebar = ({ limit = 0, isPro = false }: MobSidebarProps) => {
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
        <Sidebar limit={limit} isPro={isPro} />
      </SheetContent>
    </Sheet>
  );
};

export default MobSidebar;
