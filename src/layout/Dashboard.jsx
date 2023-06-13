import React from 'react';
import Sidebar from '../components/Dashboard/Sidebar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='relative min-h-screen md:flex'>
            <Sidebar />
            <div className='flex-1  md:ml-20'>
                <div className='p-5'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;