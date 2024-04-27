import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from 'react-router-dom';
import { useRef } from "react";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
const Nav = () => {
   const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const handleSignOut = () => {
        logOut()
            .then(
                // ()=>{
                //     navigate('/'); 
                // }
            )
            .catch(error => alert(error.message));
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
        console.log(showDropdown)
    };

    const navList = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/tspots">Tourists Spots</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/mylist">My List</NavLink></li> 
             {
                user &&<> <li><NavLink to="/addspot">Add tourist spot</NavLink></li>
                        </>
             }
   
        </>
    );

    return (
        <div className="navbar  w-full md:px-6 mx-auto  py-4 shadow-md fixed z-10 bg-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navList}
                    </ul>
                </div>
                <div className="flex font-bold text-3xl items-center justify-center">
                    
                    <a className="  font-bold text-3xl ">Tour<span className="t-clr">ifY</span></a>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navList}
                </ul>
            </div>
            <div className="navbar-end">
                 {user ? (
                    <>
                        <button onClick={handleSignOut} className="btn  btn-sm py-2 t-bg border-none mr-2" to="/login">Sign Out</button>
                        <img className="w-[40px] h-[40px] rounded-full mr-2 hover:cursor-pointer" src={user.photoURL} alt="" data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} />
                        <Tooltip id="my-tooltip" />
                    </>
                ) : (
                    <>
                        <Link className=" px-3 py-2 text-black text-sm t-bg rounded-md mr-2" to="/register">Sign Up</Link>
                        <Link className=" px-3 py-2 text-sm t-clr border font-semibold  border-green-500  rounded-md" to="/login">Log in</Link>
                    </>
                )} 
            </div>
        </div>
    );
};

export default Nav;
