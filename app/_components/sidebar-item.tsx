"use client";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface SidebarItemProps {
    label: string;
    href: string;
}

const SidebarItem = ({ label, href }: SidebarItemProps) => {
    const pathname = usePathname();
    const router = useRouter();

    const isActive = (pathname === href) // || pathname?.startsWith(`${href}`)
    const onClick = () => {
        router.push(href)
    }

    return (
        <button
            onClick={onClick}
            type="button"
            className={cn("flex items-center gap-x-2 text-sm font-[500] pl-6 transition-all hover:bg-gray-400 hover:text-white", isActive && "text-white bg-sky-200/20 hover:bg-sky-200/20 hover:text-gray-200")}
        >
            <div className="flex items-center gap-x-2 py-4">
                {label}
            </div>
            <div className={cn("ml-auto opacity-0 border-2 border-white h-full transition-all", isActive && "opacity-100")} />
        </button>
    );
}

export default SidebarItem;