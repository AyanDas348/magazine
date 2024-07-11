"use client";
import { cn } from "@/lib/utils";
import { ChevronDown, LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface SidebarItemProps {
    href: string;
    title: string;
    expand: Boolean;
    expandItems: string[];
}

const SidebarItem = (item: SidebarItemProps) => {
    const pathname = usePathname();
    const router = useRouter();

    const isActive = (pathname === item.href) // || pathname?.startsWith(`${href}`)
    const onClick = () => {
        router.push(item.href)
    }

    return (
        <button
            onClick={onClick}
            type="button"
            className={cn("flex items-center justify-center text-center text-lg font-[500] transition-all", isActive && "text-[#DD6545]")}
        >
            {item.title}
        </button>
    );
}

export default SidebarItem;