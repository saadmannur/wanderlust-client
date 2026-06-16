import BookingCard from '@/components/BookingCard';
import DeleteDestination from '@/components/DeleteDestination';
import EditWithModal from '@/components/EditWithModal';
import Image from 'next/image';
import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';

const DestinationDetailsPage = async ({ params }) => {

    const { id } = await params;

    const res = await fetch(`http://localhost:5000/destination/${id}`, {
        headers: {
            authorization : "logged in"
        }
    });
    const data = await res.json();

    const { destinationName, country, category, price, duration, departureDate, imageUrl, description } = data;

    return (
        <div className='mx-w-7xl mx-auto'>
            <h2 className='font-bold text-3xl my-5 text-center'>Destinations Details Here</h2>
            <div className='flex justify-between items-center my-3'>
                <p className='flex justify-center items-center gap-1'><FaArrowLeftLong /> Back to destinations</p>
                <div className='flex gap-3'>
                    <EditWithModal destination={data}></EditWithModal>
                    <DeleteDestination destination={data}></DeleteDestination>
                </div>
            </div>
            <div>
                <Image
                    src={imageUrl}
                    alt={destinationName}
                    width={1000}
                    height={400}
                    className='w-full h-[400] mx-auto'
                ></Image>
                <div className='flex justify-between items-center'>
                    <div className='space-y-5'>
                        <p>{country}</p>
                        <h2 className='font-semibold text-3xl'>{destinationName}</h2>
                        <p>{category}</p>
                        <p>{duration}</p>
                        <p>{departureDate}</p>
                        <div>
                            <h2 className='text-2xl font-semibold mb-2'>Overview</h2>
                            <p>{description}</p>
                        </div>
                    </div>
                    <BookingCard destination={data}></BookingCard>
                </div>
            </div>
        </div>
    );
};

export default DestinationDetailsPage;