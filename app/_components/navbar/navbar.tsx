'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from '@/public/logo.svg';
import Logo1 from '@/public/Group.svg';
import { navbarRoutes } from '@/constants/navbarRoutes';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ChevronDown, Menu, Search } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Sidebar from './sidebar';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const currentPath = usePathname();
    const router = useRouter();
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const isHomePage = currentPath === '/';
    const logoToDisplay = isHomePage ? Logo1 : Logo;

    useEffect(() => {
        const handleScroll = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY !== lastScrollY && window.scrollY !== 0) {
                    setShowNavbar(false);
                } else {
                    setShowNavbar(true);
                }
                setLastScrollY(window.scrollY);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    useEffect(() => {
        setIsSheetOpen(false);
    }, [currentPath])


    const isSignInPage = currentPath === '/sign-in'

    return (
        <nav className={`navbar flex w-full px-4 py-3 items-center justify-between xl:px-20 xl:mx-auto overflow-x-hidden fixed top-0 transition-transform duration-300 ${showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'} ${isHomePage ? 'text-white border-none' : 'text-black'} border-b`}>
            <div className='flex items-center justify-center'>
                <Link href={'/'}>
                    <Image src={logoToDisplay} alt='logo' width={150} height={10} />
                </Link>
            </div>

            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger className="" onClick={() => setIsSheetOpen(true)}>
                    <Menu className='xl:hidden' />
                </SheetTrigger>
                <SheetContent side="top" className="p-0 hover:bg-[#7c7c6c] text-white !bg-[#7c7c6c] h-full">
                    <Sidebar />
                </SheetContent>
            </Sheet>
            <ul className={`hidden xl:flex pl-16 ${isSignInPage ? 'hidden' : ''}`}>
                <div id='search' className={`rounded-[16px] flex justify-center items-center border w-[300px] ${isHomePage ? 'border-white' : 'border-black'}`}>
                    <div className='flex items-center justify-start gap-x-5 px-4 w-full'>
                        <Search />
                        <span>Search MGZN</span>
                    </div>
                </div>
                {navbarRoutes.map((route, index) => {
                    const isActiveRoute = currentPath === route.href;
                    return (
                        <li key={index} className='inline-flex list-none mx-8 cursor-pointer last:mr-0 group items-center gap-x-2'>
                            <Link href={route.href} className={`uppercase py-4 inline-block transition-all ease-in ${isActiveRoute ? 'text-[#DD6545]' : ''}`}>
                                {route.title}
                            </Link>
                            {route.expand && <ChevronDown />}
                        </li>
                    );
                })}
                <li className='flex justify-center items-center cursor-pointer' key='user'>
                    <Link href={'/sign-in'}>
                        <div className='rounded-full bg-gray-400 h-8 w-8'>
                            {/* User Icon or Avatar */}
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
