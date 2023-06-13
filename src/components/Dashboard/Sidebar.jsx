import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdClass, MdLogout } from 'react-icons/md'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-white w-64 p-4 shadow-md ${isOpen ? 'block' : 'hidden'
          } sm:block`}
      >
        {/* Sidebar Content */}
        <div className="flex flex-col items-center">
          <div className="rounded-full overflow-hidden h-32 w-32 mb-4">
            <img
              src="/path/to/image.jpg"
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-xl font-bold mb-2">Username</h1>
          <p className="text-gray-600 mb-4">User Role</p>
        </div>
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
        <div className="mt-auto">
          <Link className="px-4 py-2 flex items-center space-x-2 hover:bg-gray-200">
           <MdLogout/>
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
