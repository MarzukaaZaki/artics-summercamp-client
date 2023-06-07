import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../../assets/logo.png'
import './NavBar.css'
const NavBar = () => {
    const navLinks = <>
        <li><Link>Home</Link></li>
        <li><Link>Classes</Link></li>
        <li><Link>Instructors</Link></li>
        <li><Link>Dashboard</Link></li>


    </>
    return (

        <div className="navbar flex bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"><img className='logo' src={logoImg} alt="logo" /></a>
                <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            </div>
            
            <div className="navbar-end">
                <Link className='me-5'>Log In</Link>
                <Link className='me-5'>Register</Link>
            </div>
        </div>
    );
};

export default NavBar;