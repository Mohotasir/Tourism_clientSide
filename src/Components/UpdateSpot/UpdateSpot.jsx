import { useLoaderData, useParams } from "react-router-dom";


const  UpdateSpot = () => {
    const loadedSpot = useLoaderData();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const img = form.image.value;
        const spotName = form.tourists_spot_name.value;
        const country_name = form.country_name.value;
        const location = form.location.value;
        const sd = form.sd.value;
        const ac = form.ac.value;
        const seasonality = form.seasonality.value;
        const tt= form.tt.value;
        const vr = form.vr.value;
        const formData = {img,spotName,country_name,location,sd,ac,seasonality,tt,vr}
        console.log(formData);
        const url = `https://tourism-server-9iypyqckm-tahsins-projects-aaa37910.vercel.app/spots/${loadedSpot._id}`;
        console.log(url)
        fetch(url,{
            method: 'PUT',
            headers:{
                'content-type' :'application/json'
            },
            body: JSON.stringify(formData)
        })
         .then(res => res.json())
         .then(data=>{console.log(data)
            if(data.modifiedCount>0){
                swal("Success!", "Data updated succesfully!", "success");
            }
        })
    };
    const {img,spotName,country_name,location,sd,ac,seasonality,tt,vr} = loadedSpot;
    return (
        <div className="l-bg py-12">
            <form onSubmit={handleSubmit} className="border  bg-white p-8 md:w-[80%]  mx-auto shadow-md rounded-md ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="image" className=" font-semibold">Image URL</label>
                        <input
                            type="text"
                            id="image"
                            name="image"
                            defaultValue={img}
                            placeholder="image  URL here.."
                            className=" w-full rounded border outline-none px-3 py-2 "
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="tourists_spot_name" className="font-semibold">Tourists Spot Name</label>
                        <input
                            type="text"
                            id="tourists_spot_name"
                            defaultValue={spotName}
                            name="tourists_spot_name"
                            className=" w-full rounded border outline-none px-3 py-2 "
                            placeholder="Tourist spot name.."
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="country_name" className="block font-semibold">Country Name</label>
                        <input
                            type="text"
                            id="country_name"
                            name="country_name"
                            defaultValue={country_name}
                            className="block w-full rounded border outline-none px-3 py-2 "
                            placeholder="country name"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="location" className="block font-semibold">Location</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            defaultValue={location}
                            className="block w-full rounded border outline-none px-3 py-2 "
                            placeholder="Location.."
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="sd" className="block font-semibold">Short Description</label>
                        <input
                            type="text"
                            id="sd"
                            name="sd"
                            defaultValue={sd}
                            className="block w-full rounded border outline-none px-3 py-2 "
                            placeholder="short description..."
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="ac" className="block font-semibold">Average Cost</label>
                        <input
                            type="text"
                            id="ac"
                            defaultValue={ac}
                            name="ac"
                            className="block w-full rounded border outline-none px-3 py-2 "
                            placeholder="average cost..."
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="seasonality" className="block font-semibold">Seasonality</label>
                        <select
                            id="seasonality"
                            defaultValue={seasonality}
                            name="seasonality"
                            className="block w-full rounded border outline-none px-3 py-2 "
                            required
                        >
                            <option value="">Select Seasonality</option>
                            <option value="Summer">Summer</option>
                            <option value="Winter">Winter</option>
                            <option value="Spring">Spring</option>

                        </select>
                    </div>
                    <div>
                        <label htmlFor="tt" className="block font-semibold">Travel Time(days)</label>
                        <input
                            type="text"
                            id="tt"
                            defaultValue={tt}
                            name="tt"
                            className="block w-full rounded border outline-none px-3 py-2 "
                            placeholder="travel times..(days)"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="vr" className="block font-semibold">Visitors Per Years</label>
                        <input
                            type="text"
                            id="vr"
                            name="vr"
                            defaultValue={vr}
                            className="block w-full rounded border outline-none px-3 py-2 "
                            placeholder="visitors per years.."
                            required
                        />
                    </div>
                </div>

                <div className="my-3 text-center">
                    <button type="submit" className="t-bg text-white py-2 rounded hover:bg-green-600 transition duration-300 px-8">Update</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateSpot ;

//"methods" : ["GET","POST","PUT","PATCH","DELETE","OPTIONS"]