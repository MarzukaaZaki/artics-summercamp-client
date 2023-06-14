import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdHome, MdClass, MdLogout, MdPaid, MdBook } from 'react-icons/md'
import { SiGoogleclassroom } from 'react-icons/si'
import { LuGraduationCap } from 'react-icons/lu'
import { FaUsers } from 'react-icons/fa'
import { AiOutlineFileDone } from 'react-icons/ai'

import { AuthContext } from '../../providers/AuthProvider';

import logoImg from '../../assets/logo.png'
import { useUsers } from '../../hooks/useUsers';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useIntsructor';


const Sidebar = () => {

  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(true);



  // TODO: make isAdmin dynamic based on data from server
  // const isAdmin = true;
  const [isAdmin, isAdminLoading] = useAdmin();

  const [isInstructor, isInstructorLoading] = useInstructor();
  
  console.log('is admin',isAdmin);
  console.log('is instructor', isInstructor);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 shadow-sm">
      {/* Sidebar */}
      <div
        className={`bg-white w-64 p-4 shadow-md ${isOpen ? 'block' : 'hidden'
          } sm:block`}
      >

        <div className='flex'>

          <div className="rounded-full overflow-hidden h-12 w-12 mb-4">
            <img
              src={logoImg}
              className="object-cover w-full h-full"
            />
          </div>
          <p className='ms-3 text-2xl text-left font-semibold'>Dashboard</p>

        </div>
        <div className="divider -mt-5"></div>
        {/* Sidebar Content */}
        <div className="flex flex-col items-center">
          <div className="rounded-full overflow-hidden h-20 w-20 mb-4">
            <img
              src={user?.photoURL}
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-xl font-bold mb-2">{user?.displayName}</h1>
          <p className="text-gray-400 mb-4 font-semibold">{user?.email}</p>
        </div>
        <div className="divider -mt-1"></div>
        {
          isAdmin ? <>
            <ul className="mb-auto">
            <li className="py-2">
                  <Link to='/dashboard/admin-home' className="px-4 py-2 flex items-center space-x-2 hover:bg-gray-200" >
                    <MdHome />

                    <span>Admin Home</span>
                  </Link>
                </li>
              <li className="py-2">
                <Link to='/dashboard/allusers' className="px-4 py-2 flex items-center space-x-2 hover:bg-gray-200" >
                  <FaUsers />

                  <span>Manage Users</span>
                </Link>
              </li></ul>
          </> 
          :
          isInstructor ?
            <>
              <ul className="mb-auto">
                
                <li className="py-2">
                  <Link to='/dashboard/admin-home' className="px-4 py-2 flex items-center space-x-2 hover:bg-gray-200" >
                    <MdClass />

                    <span>Manage Classes</span>
                  </Link>
                </li>


              </ul>



              <ul className="mb-auto">
                <li className="py-2">
                  <Link to='/dashboard/addclass' className="px-4 py-2 flex items-center space-x-2 hover:bg-gray-200" >
                    <MdAdd />

                    <span>Add a Class</span>
                  </Link>
                </li>
                <li className="py-2">
                  <Link to='/dashboard/myclasses' className="px-4 py-2 flex items-center space-x-2 hover:bg-gray-200" >
                    <MdClass />

                    <span>My Classes</span>
                  </Link>
                </li>

              </ul>



             
              </>
              :
              <>
               <ul className="mb-auto">
                <li className="py-2">
                  <Link to='/dashboard/myclasses' className="px-4 py-2 flex items-center space-x-2 hover:bg-gray-200" >
                    <MdBook></MdBook>

                    <span>Booked Classes</span>
                  </Link>
                </li>

                <li className="py-2">
                  <Link to='/dashboard/myclasses' className="px-4 py-2 flex items-center space-x-2 hover:bg-gray-200" >
                    <MdPaid></MdPaid>

                    <span>Enrolled Classes</span>
                  </Link>
                </li>
          </ul>

                <ul className="mb-auto">
                  <li className="py-2">
                    <Link to='/dashboard/addclass' className="px-4 py-2 flex items-center space-x-2 hover:bg-gray-200" >
                      <AiOutlineFileDone />

                      <span>Payment History</span>
                    </Link>
                  </li>


                </ul>

              
              </>

        }

        <div className="divider"></div>
        <div className="mt-auto">
          <Link to='/' className="px-4 py-2 flex items-center space-x-2 hover:bg-gray-200">
            <MdHome />
            <span>Home</span>
          </Link>
          <Link to='/allclasses' className="px-4 py-2 flex items-center space-x-2 hover:bg-gray-200">
            <SiGoogleclassroom />
            <span>Classes</span>
          </Link>

          <Link to='/allinstructors' className="px-4 py-2 flex items-center space-x-2 hover:bg-gray-200">
            <LuGraduationCap />
            <span>Instructors</span>
          </Link>

          <Link className="px-4 py-2 flex items-center space-x-2 hover:bg-gray-200">
            <MdLogout />
            <span>Logout</span>
          </Link>
        </div>

      </div>

      {/* Toggle Button */}
      <button
        className="sm:hidden fixed top-4 right-4 bg-gray-200 p-2 rounded-md"
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        )}
      </button>
    </div>
  );
};

export default Sidebar;
