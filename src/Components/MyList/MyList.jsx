
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
const MyList = () => {
    const {user} = useContext(AuthContext);
   const email = user.email
    const [spot, setSpot] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/spots?email=${email}`) // Pass email as query parameter
            .then(res => res.json())
            .then(data => {
                const userSpots = data.filter(spot => spot.email === email);
              setSpot(userSpots); 
            })
    }, [user]);
    const {location,country_Name,ac} = spot;
    //console.log(spot)
    return (
        <div className='container mx-auto'>
            <h1 className='text-center font-semibold text-xl t-clr mt-8'>My added spots list</h1>
            <div className="overflow-x-auto my-8">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-sm'>
                            <th></th>
                            <th>Country</th>
                            <th>Location</th>
                            <th>Average Cost</th>
                            <th>Average Cost</th>
                            <th>Average Cost</th>

                        </tr>
                    </thead>
                    <tbody>
                       {
                        spot.map((spt,idx)=> <tr>
                            <th>{idx+1}</th>
                            <td>{spt.country_name}</td>
                            <td>{spt.location}</td>
                            <td>{spt.ac}</td>
                            <td><button className="btn btn-sm t-bg">Update</button> </td>
                            <td><button className="btn btn-sm bg-red-500">Delete</button> </td>
                        </tr> )
                       }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;