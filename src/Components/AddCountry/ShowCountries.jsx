import { useEffect, useState } from "react";
import SingleCountry from "./SingleCountry";


const ShowCountries = () => {
    const [country,setCountry]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/country')
         .then(res=>res.json())
         .then(data=>setCountry(data))
    },[country])
    return (
        
        <div className="container mx-auto my-12">
            <div>
                <h1 className='text-2xl font-semibold '>Explore World</h1>
                <h1 className='text-3xl font-semibold t-clr '> Countries</h1>
                <p className='w-[90px] h-[3px] t-bg mt-1'></p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {
                    country.map((cntry)=> <SingleCountry key={cntry._id} cntry={cntry}></SingleCountry>)
                }
            </div>

        </div>
    );
};

export default ShowCountries;