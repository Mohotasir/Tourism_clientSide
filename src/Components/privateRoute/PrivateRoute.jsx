import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <span className=" md:h-[50vh] flex text-center items-center justify-center loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login"></Navigate>
        
   
};

export default PrivateRoute;