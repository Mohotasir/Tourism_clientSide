
import swal from 'sweetalert';
const AddCountry = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const img = form.image.value;
        const des = form.des.value;
        const country_name = form.country_name.value;
       
        const formData = {img,des,country_name}
        console.log(formData);
        fetch("http://localhost:5000/country",{
            method: 'POST',
            headers: {
              'content-type':'application/json'
            },
            body: JSON.stringify(formData)
          })
          .then(res=> res.json())
          .then(data =>{
            console.log(data)
            if(data.insertedId){
                swal({
                    title: "Successfull !",
                    text: "Added data successfully",
                    icon: "success",
                    button: "Ok",
                  });
            }
            form.reset();
          });
    };

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
                            placeholder="image  URL here.."
                            className=" w-full rounded border outline-none px-3 py-2 "
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="des" className="font-semibold">Description</label>
                        <input
                            type="text"
                            id="des"
                            name="des"
                            className=" w-full rounded border outline-none px-3 py-2 "
                            placeholder="short description"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="country_name" className="block font-semibold">Country Name</label>
                        <input
                            type="text"
                            id="country_name"
                            name="country_name"
                            className="block w-full rounded border outline-none px-3 py-2 "
                            placeholder="country name"
                            required
                        />
                    </div>
                   
                </div>
                <div className="my-3 text-center">
                    <button type="submit" className="t-bg text-white py-2 rounded hover:bg-green-600 transition duration-300 px-8">Add</button>
                </div>
            </form>
        </div>
    );
};

export default AddCountry;