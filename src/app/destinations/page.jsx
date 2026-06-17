import DestinationCard from '@/components/DestinationCard';
import React from 'react';

const getDestination = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`);
    const data = await res.json();
    return data;
}

const DestinationsPage = async () => {

    const destinations = await getDestination()
    // console.log(destinations)

    return (
        <div className='max-w-7xl mx-auto'>
            <div className='text-center'>
                <h2 className='text-4xl font-semibold'>Explore All Destinations</h2>
                <p className='text-gray-400'>Find your perfect travel experience from our curated collection</p>
            </div>
            <div className='grid grid-cols-3 gap-5 m-5'>
                {
                    destinations.map(destination => <DestinationCard
                        key={destination._id}
                        destination={destination}
                    ></DestinationCard>)
                }
            </div>
        </div>
    );
};

export default DestinationsPage;