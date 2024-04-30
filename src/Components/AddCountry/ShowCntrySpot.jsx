import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleSpot from "../showspots/SingleSpot";


const ShowCntrySpot = () => {
    const params = useParams();
    const {country} = params;
    const [spot,setSpot] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/spots/${country}`)
        .then(res=>res.json())
        .then(data=> setSpot(data))
    },[country])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 mt-8 mb-4' >
            {
                spot.map(s => <SingleSpot key={s._id} spot={s}></SingleSpot>)

            }
        </div>
    );
};

export default ShowCntrySpot;