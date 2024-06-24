import Image from 'next/image';
import Logo from '@/public/logo.svg';
import { navbarRoutes } from '@/constants/navbarRoutes'
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Navbar = () => {
    return (
        <div className="w-full mx-auto flex my-3 sticky items-center px-10">
            <div id="logo" className='w-[200px] h-[20px]'>
                <Link href={'/'}>
                    <Image
                        src={Logo}
                        alt="Logo"
                        width={200}
                        height={10}
                    />
                </Link>
            </div>
            <div id='navbarRoutes' className='w-full flex justify-center items-center flex-1'>
                <ul className='flex gap-9 mx-8'>
                    {navbarRoutes.map((nav) => {
                        return (
                            <li key={nav.id} className='font-bold'>
                                <Link href={nav.href}>
                                    <h1>{nav.title.toUpperCase()}</h1>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div id='extraLinks' className='font-bold'>
                <Button>
                    <Link href={'/dashboard'}>Get Started</Link>
                </Button>
            </div>
        </div>
    );
}

export default Navbar;
