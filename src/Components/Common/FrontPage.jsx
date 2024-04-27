import React from 'react';
import Home from '../Home';
import Spots from '../showspots/Spots';
import { useLoaderData } from 'react-router-dom';
import TourType from '../TourType/TourType';
import NewsLetter from '../NewsLetter/NewsLetter';
import Client from '../Clientrply/Client';

const FrontPage = () => {
    const loadedSpots = useLoaderData();
    return (
        <div className=''>
            <Home></Home>
            <TourType></TourType>
            <Spots loadedSpots={loadedSpots}></Spots>
            <NewsLetter></NewsLetter>
            <Client></Client>
        </div>
    );
};

export default FrontPage;