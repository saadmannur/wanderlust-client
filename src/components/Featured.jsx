import Link from 'next/link';
import React from 'react';
import DestinationCard from './DestinationCard';

const Featured = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`)
    const destinationFeatured = await res.json();
    console.log(destinationFeatured);

    return (
        <div className='max-w-7xl mx-auto mt-10'>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='text-3xl font-bold'>Featured Destinations</h2>
                    <p className='text-gray-400'>Handpicked travel experiences for the adventure seekers</p>
                </div>
                <Link href={'/destinations'}>
                    <button className='border text-blue-500 border-blue-500 p-2'>All Destination</button>
                </Link>
            </div>

            <div className=' grid grid-cols-4 gap-5 p-5 mt-10'>
                {
                    destinationFeatured.map(featured => <DestinationCard key={featured._id}
                        destination={featured}
                    ></DestinationCard>)
                }
            </div>
            
        </div>
    );
};

export default Featured;