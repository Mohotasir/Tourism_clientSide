import React from 'react';
import Home from '../Home';
import Spots from '../showspots/Spots';
import { useLoaderData } from 'react-router-dom';
import TourType from '../TourType/TourType';
import NewsLetter from '../NewsLetter/NewsLetter';
import Client from '../Clientrply/Client';
import ShowCountries from '../AddCountry/ShowCountries';
import  { useContext } from 'react';
import { ThemeContext } from '../ThemeSwithcher/ThemeContext';
const FrontPage = () => {
  const loadedSpots = useLoaderData();
  const { theme } = useContext(ThemeContext);
    return (
        <div className=''>
           <Home></Home>
            <div className={`${theme === 'light' ? 'light-theme' : 'dark-theme' } poppin`}>
            
            <TourType></TourType>
            <ShowCountries></ShowCountries>
            <Spots loadedSpots={loadedSpots}></Spots>
            <NewsLetter></NewsLetter>
            <Client></Client>
            </div>
        </div>
    );
};

export default FrontPage;