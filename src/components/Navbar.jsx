import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavSession from './NavSession';

const Navbar = () => {
    return (
        <div className=' py-3 bg-white'>
            <nav className='flex justify-between items-center max-w-7xl mx-auto'>
                <ul className='flex justify-center items-center gap-5'>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/destinations'}>Destinations</Link></li>
                    <li><Link href={'/my-bookings'}>My Booking</Link></li>
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
        </div>
    );
};

export default Navbar;