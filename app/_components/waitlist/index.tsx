'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from '@/public/logo.svg';
import Logo1 from '@/public/Group.svg';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const Waitlist = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const currentPath = usePathname();

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

    const isSignInPage = currentPath === '/sign-in'

    return (
        <nav className={`navbar flex w-full px-4 py-3 items-center justify-between xl:px-20 xl:mx-auto overflow-x-hidden fixed top-0 transition-transform duration-300 ${showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'} ${isHomePage ? 'text-white border-none' : 'text-black'} border-b`}>
            <div className='flex items-center justify-center w-full pt-10 lg:justify-start'>
                <Link href={'/'}>
                    <Image src={logoToDisplay} alt='logo' width={150} height={10} />
                </Link>
            </div>
            <Button variant='orange' className='hidden'>Join the Waitlist</Button>
        </nav>
    );
};

export default Waitlist;
