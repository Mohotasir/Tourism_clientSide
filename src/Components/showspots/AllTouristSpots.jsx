import { useLoaderData } from "react-router-dom";
import SingleSpot from "./SingleSpot";

const AllTouristSpots = () => {
    const loadedSpots = useLoaderData();
    return (
        <div className="container mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    loadedSpots.map(spot => <SingleSpot key={spot._id} spot={spot}></SingleSpot>)
                }
            </div>
            
        </div>
    );
};

export default AllTouristSpots;