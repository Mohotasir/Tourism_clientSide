import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from 'sweetalert';

const MyList = () => {
    const { user } = useContext(AuthContext);
    const email = user.email;
    const [spot, setSpot] = useState([]);

    useEffect(() => {
        fetch(`https://tourism-server-9iypyqckm-tahsins-projects-aaa37910.vercel.app/spots?email=${email}`)
            .then(res => res.json())
            .then(data => {
                const userSpots = data.filter(spot => spot.email === email);
                setSpot(userSpots);
            });
    }, [user]);

    const handleDelete = async (_id) => {
        const willDelete = await swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        });
        if (willDelete) {
            fetch(`https://tourism-server-9iypyqckm-tahsins-projects-aaa37910.vercel.app/spots/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        swal("Your data has been deleted!", {
                            icon: "success",
                        });
                        const remaining = spot.filter(u => u._id !== _id);
                        setSpot(remaining);
                    }
                })
                .catch(error => console.error("Error deleting data:", error));
        }
    };

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
                        </tr>
                    </thead>
                    <tbody>
                        {spot.map((spt, idx) => (
                            <tr key={spt._id}>
                                <th>{idx + 1}</th>
                                <td>{spt.country_name}</td>
                                <td>{spt.location}</td>
                                <td>{spt.ac}</td>
                                <td><Link to={`/update/${spt._id}`} className="btn btn-sm t-bg">Update</Link> </td>
                                <td><button onClick={() => handleDelete(spt._id)} className="btn btn-sm bg-red-500">Delete</button> </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;
