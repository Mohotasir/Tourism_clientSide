import { Outlet } from "react-router-dom";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
import  { useContext } from 'react';
import { ThemeContext } from "./ThemeSwithcher/ThemeContext";

const Root = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`${theme === 'light' ? 'light-theme ' : 'dark-theme bg-black' } poppin`}>
            <div className={` h-[89px]`}>
               <Nav></Nav>
               </div>
            <Outlet></Outlet>
            <Footer></Footer> 
        </div>
    );
};

export default Root;