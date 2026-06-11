import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DestinationCard = ({destination}) => {

    const { destinationName, country, departureDate, price, imageUrl, _id } = destination;

    return (
        <div className=' shadow rounded-2xl flex flex-col'>
            <Image
                src={imageUrl}
                alt={destinationName}
                width={300}
                height={300}
                className='mx-auto w-full h-[250px] rounded-t-2xl'
            ></Image>
            <div className=' border-x border-b border-gray-400 p-5 rounded-b-2xl flex-1'>
                <div className='flex justify-between items-center'>
                    <div className='space-y-4'>
                        <p className='text-sm text-gray-400'><small>{country}</small></p>
                        <h2 className='text-2xl font-semibold'>{destinationName}</h2>
                        <p>{departureDate}</p>
                    </div>
                    <div>
                        <h2 className='text-3xl font-semibold'>${price}<span className='text-sm text-gray-400'>/person</span></h2>
                    </div>
                </div>

                <div className='flex justify-between items-center'>
                    <div></div>
                    <div>
                        <Link href={`/destinations/${_id}`}><Button variant='primary'>Book Now</Button></Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default DestinationCard;