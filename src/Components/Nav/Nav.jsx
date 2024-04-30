import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from 'react-router-dom';
import { useRef } from "react";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import ThemeSwitcher from "../ThemeSwithcher/ThemeSwitcher";
import { ThemeContext } from "../ThemeSwithcher/ThemeContext";
const Nav = () => {
    const { theme } = useContext(ThemeContext);
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
            <li><NavLink to="/mylist">My List</NavLink></li>
            {
                user && <> <li><NavLink to="/addspot">Add tourist spot</NavLink></li>
                    <li><NavLink to="/country">Add Country</NavLink></li>
                </>
            }

        </>
    );

    return (
        <div className={`${theme === 'light' ? 'light-theme ' : 'dark-theme bg-black' } navbar   w-full md:px-6 mx-auto  py-4 shadow-md fixed z-10 `}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navList}
                    </ul>
                </div>
                <Link  to="/" className="flex font-bold text-3xl items-center justify-center">

                    <p className="  font-bold text-3xl  dark:text-black ">Tour<span className="t-clr">ifY</span></p>
                </Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navList}
                </ul>
            </div>
            <div className="navbar-end">
                <ThemeSwitcher></ThemeSwitcher>
                {/* <label className="cursor-pointer grid place-items-center mr-1">
                    <input type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label> */}
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
