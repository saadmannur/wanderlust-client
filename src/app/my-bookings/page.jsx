import BookingCancel from '@/components/BookingCancel';
import { auth } from '@/lib/auth';
import { Eye, TrashBin } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { TiLocation } from 'react-icons/ti';

const MyBookingsPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;

    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    // console.log(token)

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const bookings = await res.json();

    return (
        <div>
            <h2>my bookings page</h2>
            <div>
                {
                    bookings.map(booking => <div key={booking._id} className='border m-5 p-5 flex items-center gap-10'>
                        <div>
                            <Image
                                src={booking.imageUrl}
                                alt={booking.destinationName}
                                width={300}
                                height={200}
                            ></Image>
                        </div>
                        <div className='space-y-3'>
                            <h2 className='text-3xl font-bold'>{booking.destinationName}</h2>
                            <p className='flex items-center gap-2 text-sm text-gray-500'><FaRegCalendarAlt /> Departure: {new Date(booking.departureDate).toLocaleDateString("en-US", {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}</p>
                            <p className='flex items-center gap-2 text-sm text-gray-500'><TiLocation /> Booking Id: {booking._id}</p>
                            <div className='space-y-5'>
                                <p className='text-[#15a1bf] font-semibold text-3xl'>${booking.price}</p>
                                <div className='flex items-center gap-5'>

                                    <BookingCancel booking={booking}></BookingCancel>

                                    <Button variant='outline' className={'rounded-none bg-[#15a1bf] text-white'}><Eye></Eye> View</Button>
                                </div>
                            </div>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyBookingsPage;