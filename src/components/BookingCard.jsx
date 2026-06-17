'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Card, DateField, Label } from '@heroui/react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const BookingCard = ({ destination }) => {
    const { destinationName, country, price, imageUrl, _id } = destination;

    const {data} = authClient.useSession()
    const user = data?.user

    const [departureDate, setDepartureDate] = useState(null)

    const handleBooking = async () => {
        const bookingData = {
            userId: user?.id,
            userName: user?.name,
            userImage: user?.image,
            userEmail: user?.email,
            destinationId: _id,
            destinationName,
            imageUrl,
            price,
            country,
            departureDate: new Date(departureDate)
        };

        const {data:tokenData} = await authClient.token();
        // console.log(tokenData);

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(bookingData)
        });

        const data = await res.json()
        
        if (data.acknowledged === true){
            toast.success('You Successfully Booked')
        }
       
    }

    return (
        <Card className='rounded-none border'>
            <p className='text-sm text-muted'>Starting from</p>
            <h2 className='text-[#15a1bf] font-semibold text-3xl'>${price}</h2>
            <p className='text-sm text-muted'>per person</p>
            <DateField className="w-[256px]" name="date" onChange={setDepartureDate}>
                <Label>Departure Date</Label>
                <DateField.Group>
                    <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                </DateField.Group>
            </DateField>
            <Button onClick={handleBooking} className={'w-full bg-[#15a1bf] rounded-none'}>Book Now</Button>
        </Card>
    );
};

export default BookingCard;