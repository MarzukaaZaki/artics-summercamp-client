import React from 'react';
import { useUsers } from '../../../hooks/useUsers';
import { BsTrash } from 'react-icons/bs';
import { useQuery } from '@tanstack/react-query'

const AllUsers = () => {
    // const [users] = useUsers([]);

    // Tanstack Query
    const {data: users= [], refetch} = useQuery(['users'], async()=>{
        const res = await fetch('https://artics-summer-camp-server.vercel.app/users')
        return res.json();
    })
    return (
        <div className="overflow-x-auto w-full">
            <h1 className='text-center text-3xl font-bold my-4'> Manage Users</h1>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>

                        <th>User Name with Picture</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                      

                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}

                    {users?.map((user) =>
                        <tr user={user} key ={user._id}>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{user?.displayName}</div>
                                       

                                    </div>
                                </div>
                            </td>
                            <td>
                                {user?.email}

                            </td>
                            <td>role</td>
                            <td><button className='btn btn-error'><BsTrash></BsTrash></button></td>
                            
                        </tr>

                    )}
                </tbody>
                

            </table>
            
        </div>
    );
};

export default AllUsers;