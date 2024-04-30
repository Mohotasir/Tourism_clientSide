import React, { useContext } from 'react';
import SingleSpot from './SingleSpot';
import { ThemeContext } from '../ThemeSwithcher/ThemeContext';

const Spots = ({loadedSpots}) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div  className={`${theme === 'light' ? 'light-theme' : 'dark-theme' } py-8 md:pb-24 md:pt-12 container mx-auto `}>
            <div>
                <h1 className='text-2xl font-semibold '>Choice Your Interested </h1>
                <h1 className='text-3xl font-semibold t-clr '> Spots</h1>
                <p className='w-[90px] h-[3px] t-bg mt-1'></p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 mt-8'>
                {
                    loadedSpots.slice(0,7).map(spot => <SingleSpot key={spot._id} spot={spot}></SingleSpot>)
                }
            </div>
            <div className='my-3 text-center'>
                <button className='btn  t-bg rounded-full w-[30%] text-white' >Explore More</button>
            </div>

        </div>
    );
};

export default Spots;