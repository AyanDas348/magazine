import Image from 'next/image';
import Logo from '@/public/logo.svg';
import { navbarRoutes } from '@/constants/navbarRoutes';
import Link from 'next/link';
import { Home, Tv, Presentation, Phone, Info, Calendar, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Sidebar from './sidebar';

const Navbar = () => {
    const icons = [Home, Info, Tv, Calendar, Presentation, Phone];
    return (
        <nav className="navbar flex w-full px-4 py-3 border-b shadow-md items-center justify-between xl:px-20 xl:mx-auto overflow-x-hidden">
            <div className='flex items-center justify-center'>
                <Image src={Logo} alt='logo' width={150} height={10} />
            </div>

            <Sheet>
                <SheetTrigger className="">
                    <Menu className='xl:hidden' />
                </SheetTrigger>
                <SheetContent side="top" className="p-0 hover:bg-[#7c7c6c] text-white !bg-[#7c7c6c]">
                    <Sidebar />
                </SheetContent>
            </Sheet>
            <ul className='hidden xl:flex pl-16'>
                {navbarRoutes.map((route, index) => {
                    return (
                        <li key={index} className='inline-block list-none mx-8 cursor-pointer last:mr-0 group'>
                            <Link href={route.href} className='uppercase py-4 inline-block transition-all ease-in'>
                                {route.title}
                            </Link>
                            <ul className='absolute w-60 -mt-2 -z-50 transition-all ease-in px-3 opacity-0 bg-white group-hover:z-50 group-hover:opacity-100 group-hover:-mt-2'>
                                {route.expandItems.map((item, index) => {
                                    return (
                                        <li key={index} className='py-2'>
                                            <Link href={item}>
                                                {item}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
}

export default Navbar;
