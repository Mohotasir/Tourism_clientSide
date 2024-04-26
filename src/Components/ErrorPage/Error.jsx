import { Link, useRouteError } from "react-router-dom";

export default function Error() {
    const error = useRouteError();


    return (
        <div className=" ">
            <div id="error-page" className="flex flex-col items-center justify-center h-[100vh] text-2xl font-bold">
                <h1 className="g-color text-6xl mb-4 font-bold">Oops!</h1>
                <p className="g-color">Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <Link className="btn my-3 g-bg text-white " to="/">Go Back</Link> 
            </div>
        </div>
    );
}