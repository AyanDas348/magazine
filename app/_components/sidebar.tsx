import { navbarRoutes } from "@/constants/navbarRoutes";
import Image from "next/image";
import SidebarItem from "./sidebar-item";
import Logo from '@/public/logo.svg';

const Sidebar = () => {
    return (
        <div className="h-full border-r flex flex-col overflow-y-auto bg-[#7c7c6c] text-[#f4f4f6] shadow-sm">
            <div className="p-0">
                <Image
                    alt="logo"
                    src={Logo}
                    width={150}
                />
            </div>
            <div className="flex flex-col w-full">
                {navbarRoutes.map((route) => (
                    <SidebarItem
                        key={route.href}
                        label={route.title}
                        href={route.href}
                    />
                ))}
            </div>
        </div>
    );
}

export default Sidebar;