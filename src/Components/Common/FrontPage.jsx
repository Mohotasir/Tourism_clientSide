import React from 'react';
import Home from '../Home';
import Spots from '../showspots/Spots';
import { useLoaderData } from 'react-router-dom';

const FrontPage = () => {
    const loadedSpots = useLoaderData();
    return (
        <div>
            <Home></Home>
            <Spots loadedSpots={loadedSpots}></Spots>
        </div>
    );
};

export default FrontPage;