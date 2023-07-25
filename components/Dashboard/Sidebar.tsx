"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { routes } from "@/constants";
import { cn } from "@/lib/utils";

import FreeCounter from "../FreeCounter";

interface SidebarProps {
  limit: number;
  isPro: boolean;
}

const Sidebar = ({ limit = 0, isPro = false }: SidebarProps) => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full text-white bg-[#171d2b]">
      <div className="px-3 py-2 flex-1">
        <Link href={"/dashboard"} className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image src="/logo.png" alt="Logo" width={32} height={32} />
          </div>
          <h1 className="text-xl font-bold">Master AI</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((item, idx) => (
            <Link
              href={item.href}
              key={idx}
              className={cn(
                "group text-sm flex p-3 w-full ustify-start font-medium cursor-pointer  hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === item.href
                  ? "text-white bg-white/10"
                  : "text-slate-400"
              )}
            >
              <div className="flex items-center flex-1">
                <item.icon className={cn("h-5 w-5 mr-3", item.color)} />
                {item.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <FreeCounter limit={limit} isPro={isPro} />
      </div>
    </div>
  );
};

export default Sidebar;
