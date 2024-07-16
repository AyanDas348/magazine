'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from '@/public/logo.svg';
import { navbarRoutes } from '@/constants/navbarRoutes';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Sidebar from './sidebar';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY !== lastScrollY  && window.scrollY !== 0) {
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

    return (
        <nav className={`navbar flex w-full px-4 py-3 bg-transparent items-center justify-between xl:px-20 xl:mx-auto overflow-x-hidden text-white fixed top-0 transition-transform duration-300 ${showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
            <div className='flex items-center justify-center'>
                <Link href={'/'}>
                    <Image src={Logo} alt='logo' width={150} height={10} />
                </Link>
            </div>

            <Sheet>
                <SheetTrigger className="">
                    <Menu className='xl:hidden' />
                </SheetTrigger>
                <SheetContent side="top" className="p-0 hover:bg-[#7c7c6c] text-white !bg-[#7c7c6c] h-full">
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
                            {/* <ul className='absolute w-60 -mt-2 -z-50 transition-all ease-in px-3 opacity-0 bg-white group-hover:z-50 group-hover:opacity-100 group-hover:-mt-2'>
                                {route.expandItems.map((item, index) => {
                                    return (
                                        <li key={index} className='py-2'>
                                            <Link href={item}>
                                                {item}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul> */}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
