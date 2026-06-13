'use client'
import { authClient } from '@/lib/auth-client';
import { Avatar, Spinner } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const NavSession = () => {

    const { data, isPending } = authClient.useSession()

    const user = data?.user;

    const router = useRouter();
    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/login"); // redirect to login page
                },
            },
        });
    };

    if (isPending) {
        <div className="flex flex-col items-center gap-2">
            <Spinner color="success" />
        </div>
    }

    return (
        <>
            {
                user ? <div className='flex justify-center items-center gap-2'>
                    <h2 className='text-green-800 mr-5 hidden md:block'>Hello, {user?.name}</h2>
                    <Avatar>
                        <Avatar.Image
                            referrerPolicy='no-referrer'
                            alt={user?.name}
                            src={user?.image}
                        />
                        <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                    </Avatar>

                    <button
                        onClick={handleSignOut}>LogOut</button>

                </div> : <ul className='flex justify-center items-center gap-5'>
                    <li><Link href={'/'}>Profile</Link></li>
                    <li><Link href={'/login'}>Login</Link></li>
                    <li><Link href={'/signup'}>Sign Up</Link></li>
                </ul>
            }
        </>
    );
};

export default NavSession;