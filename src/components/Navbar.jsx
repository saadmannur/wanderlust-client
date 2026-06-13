import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavSession from './NavSession';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center p-5 bg-white'>
            <ul className='flex justify-center items-center gap-5'>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/destinations'}>Destinations</Link></li>
                <li><Link href={'/'}>My Booking</Link></li>
                <li><Link href={'/add-destination'}>Add Destination</Link></li>
            </ul>
            <div>
                <Image
                    src={'/assets/Wanderlast.png'}
                    alt='logo'
                    width={200}
                    height={200}
                ></Image>
            </div>
            <NavSession></NavSession>
            
        </nav>
    );
};

export default Navbar;