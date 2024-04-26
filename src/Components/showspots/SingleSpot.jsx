import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { IoIosGlobe } from "react-icons/io";
const SingleSpot = ({spot}) => {
    const {img,spotName,country_name,location,sd,ac,seasonality,tt,vr,name,email} = spot;
    return (
        <div className='px-2'>
            <img src={img} alt="" />
            <div className='flex justify-between text-lg font-semibold py-2 '>
            <p className='flex  items-center justify-center'><IoLocationOutline className='t-clr text-xl mr-1' />{spotName}</p>
            <p className='flex  items-center justify-center'><IoIosGlobe className='t-clr text-xl mr-1' />{country_name}</p>
            </div>
            <p className='font-light text-gray-600'>{sd}</p>
            <h1> {location}</h1>
        </div>
    );
};

export default SingleSpot;