import { navbarRoutes } from "@/constants/navbarRoutes";
import Image from "next/image";
import SidebarItem from "./sidebar-item";
import Logo from '@/public/logo.svg';
import Link from "next/link";

const Sidebar = () => {
    return (
        <div className="min-h-full border-r flex flex-col overflow-y-auto bg-[#F7F3F2] text-[#4F4138] shadow-sm">
            <div className="p-0">
                <Link href={'/'}>
                    <Image
                        alt="logo"
                        src={Logo}
                        width={150}
                    />
                </Link>
            </div>
            <div className="flex flex-col w-full text-center gap-y-6">
                {navbarRoutes.map((route) => (
                    <SidebarItem
                        key={route.href}
                        {...route}
                    />
                ))}
            </div>
        </div>
    );
}

export default Sidebar;