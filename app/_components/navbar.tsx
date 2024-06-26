import Image from 'next/image';
import Logo from '@/public/logo.svg';
import { navbarRoutes } from '@/constants/navbarRoutes'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Tv, Presentation, Phone, Info, Calendar, Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Sidebar from './sidebar';

const Navbar = () => {
    const icons = [Home, Info, Tv, Calendar, Presentation, Phone]
    return (
        <nav className="flex w-full px-4 py-5 items-center justify-between lg:container lg:mx-auto lg:px-20">
            <div className='flex items-center justify-center'>
                <Image src={Logo} alt='logo' width={150} height={10} />
            </div>

            <Sheet>
                <SheetTrigger className="">
                    <Menu className='lg:hidden' />
                </SheetTrigger>
                <SheetContent side="top" className="p-0 hover:bg-[#7c7c6c] text-white !bg-[#7c7c6c]">
                    <Sidebar />
                </SheetContent>
            </Sheet>
            <div className='hidden lg:flex pl-16 gap-x-14'>
                {navbarRoutes?.map((item, index) => {
                    const Icon = icons[index];
                    return (
                        <Link
                            href={item.href}
                            key={item.id}
                            className='text-[#36485c] font-medium cursor-pointer flex gap-2 items-center justify-center w-full'
                        >
                            {item.title}
                        </Link>
                    )
                })}
            </div>
        </nav>
    );
}

export default Navbar;
