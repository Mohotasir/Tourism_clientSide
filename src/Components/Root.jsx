import { Outlet } from "react-router-dom";
import Nav from "./Nav/Nav";


const Root = () => {
    return (
        <div className="poppin">
            <div className="h-[89px]">
               <Nav></Nav>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;