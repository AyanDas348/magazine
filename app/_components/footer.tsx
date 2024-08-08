'use client'

import Logo from '@/public/Group.svg';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Footer = () => {
    const currentPath = usePathname();
    const isSignInPage = currentPath === '/sign-in'

    return (
        <div className={`bg-[#4f4138] pt-60 pb-20 px-20 text-white ${isSignInPage ? 'hidden' : ''}`}>
            <div className='flex flex-col gap-y-9'>
                <p className='text-xl'>All Rights Reserved</p>
                <Link href={'/'}>
                    <Image src={Logo} alt='logo' width={150} height={10} />
                </Link>
            </div>
        </div>
    );
}

export default Footer;