import { Link } from "react-router-dom";

const SingleCountry = ({ cntry }) => {
    const { img, country_name, des } = cntry;
    return (
        <Link
        to ={`/showspot/${country_name}`}
            className="bg-cover bg-center px-4 md:px-10 py-16 rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, .8)), url(${img})`

            }}
            
        >
            <div className="text-white">
                <h1 className="text-3xl font-bold">{country_name}</h1>
                <p className="text-sm">{des}</p>
            </div>
        </Link>
    );
};

export default SingleCountry;
