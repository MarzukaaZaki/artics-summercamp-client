import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../../assets/logo.png'
import toast from 'react-hot-toast';
import './NavBar.css'
import { AuthContext } from '../../../providers/AuthProvider';
import ThemeToggle from '../../../components/ThemeToggle/ThemeToggle';
import { Tooltip } from 'react-tooltip'


const NavBar = () => {

    const navLinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/allclasses'>Classes</Link></li>
        <li><Link to='/allinstructors'>Instructors</Link></li>
        <li><ThemeToggle/></li>
      


    </>

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(
             
            )
            .catch(error => console.log(error.message))
    }
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
            {user ?
                <div className="navbar-end">
                    
                    <div className='flex'>
                    <Tooltip/>
                    <img src={user?.photoURL} alt="" className='h-8 w-8 me-2 rounded-full'  data-tooltip-content={user?.displayName} /> 
                   
                    <Link to='/dashboard/addclass' className='me-5'>Dashboard</Link>
                    <Link className='me-5' onClick={handleLogOut}>Log Out</Link>
                    </div>  
                    

                    
                </div>
                : <div className="navbar-end"><Link to='/login' className='me-5'>Log In</Link>
                    <Link to='/register' className='me-5'>Register</Link></div>
            }
        </div>
    );
};

export default NavBar;