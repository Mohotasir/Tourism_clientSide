import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { IoIosGlobe } from "react-icons/io";
import { Link } from 'react-router-dom';
const SingleSpot = ({ spot }) => {
    const { _id,img, spotName, country_name, location, sd, ac, seasonality, tt, vr, name, email } = spot;
    return (
        <div className='px-3 shadow-lg py-4'>

            <div className='relative'>
                <img src={img} alt="" />
                <p className='absolute top-2 left-0 t-bg text-white text-sm font-semibold border rounded-r-full border-green-300 px-2 py-1'>{seasonality} trip</p>
            </div>
            <div className='flex justify-between text-gray-700 text-md font-normal py-2 '>
                <p className='flex  items-center justify-center'><IoLocationOutline className='t-clr text-xl mr-1' />{location}</p>
                <p className='flex  items-center justify-center'><IoIosGlobe className='t-clr text-xl mr-1' />{country_name}</p>
            </div>
            <div className='flex flex-col'>
                <div className=' flex-1'>
                    <h1 className='  text-sm font-semibold '> {tt} days tour package in  {spotName}</h1>
                    <p className='font-light text-gray-600 pt-2'>{sd}</p>
                    <h2 className='pb-2 text-md'>Average cost: <span className='font-semibold t-clr'> ${ac}</span></h2>
                </div>

                <Link to={`/viewdetails/${_id}`} className='btn t-bg btn-sm flex-0 w-[40%] '>View Details</Link>
            </div>

        </div>
    );
};

export default SingleSpot;