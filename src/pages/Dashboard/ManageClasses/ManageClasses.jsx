import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageClasses = () => {
    
    // Tanstack Query
    const {data: classes= [], refetch} = useQuery(['classes'], async()=>{
        const res = await fetch('https://artics-summer-camp-server.vercel.app/classes')
        return res.json();
    })
    return (
        <div className="overflow-x-auto w-full text-center">
            <h1 className=' text-3xl font-bold my-4'> Manage Classes</h1>
            <h3 className='text-xl mb-4'>Total Classes: {classes.length}</h3>
            
            <table className="table w-full">
                {/* head */}
                <thead className='bg-slate-800 text-white uppercase'>
                    <tr>

                        <th>Class Name</th>
                        <th>Instructor Email</th>
                        <th>Status</th>
                        <th>Perform an Action</th>
                      

                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}

                    {classes?.map((classItem) =>
                        <tr classItem={classItem} key ={classItem._id}>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={classItem?.photo} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{classItem?.nameOfClass}</div>
                                       

                                    </div>
                                </div>
                            </td>
                            <td>
                               {classItem.instructorEmail}
                            </td>
                            <td>
                               {classItem?.status}
                            </td>
                            <td>
                               <button className='btn btn-sm bg-green-500 text-white uppercase'>Approve</button> 
                               <button className='btn btn-sm bg-slate-400 text-black uppercase mx-3'>Deny</button> 
                               <button className='btn btn-sm bg-blue-500 text-white uppercase'>Send Feedback</button> 
                            </td>
                            
                            <div className="divider"></div> 
                        </tr>
                        

                    )}
                </tbody>
                

            </table>
            
        </div>
    );
};

export default ManageClasses;