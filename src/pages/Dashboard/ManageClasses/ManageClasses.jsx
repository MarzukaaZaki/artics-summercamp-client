import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import { BsInfo } from 'react-icons/bs';
import FeedbackModal from '../../../components/FeedbackModal/FeedbackModal';

const ManageClasses = () => {
    
    // Tanstack Query
    const {data: classes= [], refetch} = useQuery(['classes'], async()=>{
        const res = await fetch('https://artics-summer-camp-server.vercel.app/classes')
        return res.json();
    })

    // Approve a class
    const handleApproval = (classItem) =>{
        fetch(`https://artics-summer-camp-server.vercel.app/classes/approve/${classItem?._id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data=>{
            if(data.modifiedCount){
                refetch();
                toast.success(`The class: ${classItem?.nameOfClass}, is now approved!`)
            }
        })
        
    }
    // Deny a class
    const handleDenial = (classItem) =>{
        fetch(`https://artics-summer-camp-server.vercel.app/classes/deny/${classItem?._id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data=>{
            if(data.modifiedCount){
                refetch();
                
               toast.error(`The class: ${classItem?.nameOfClass}, is denied. Consider sending a feedback.`)
            }
        })
        
    }

    // Send Feedback
    const handleFeedback = (classItem) =>{
        fetch(`http://localhost:5000/classes/feedback/${classItem._id}`,{
            method: 'PATCH',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(classItem)
            
        })
        .then(res =>res.json())
        .then(result =>{
            console.log(result);
            if(result.modifiedCount){
                toast.success('Sent Feedback');
            }
        })
    }
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
                               {
                                classItem?.status == 'approved' || classItem?.status =='denied' ? 
                                <>
                                
                                <button onClick={()=>handleApproval(classItem)} className='btn btn-sm bg-green-500 text-white uppercase' disabled>Approve</button> 
                               <button onClick={()=>{handleDenial(classItem)}} className='btn btn-sm bg-slate-400 text-black uppercase mx-3' disabled>Deny</button> 
                                
                                </>
                                :
                                <>
                                <button onClick={()=>handleApproval(classItem)} className='btn btn-sm bg-green-500 text-white uppercase'>Approve</button> 
                               <button onClick={()=>{handleDenial(classItem)}} className='btn btn-sm bg-slate-400 text-black uppercase mx-3'>Deny</button> 
                                
                                </>
                                }
                                <label htmlFor="update-modal" className="btn btn-ghost btn-outline me-2">Send Feedback</label>
                                <FeedbackModal classItem={classItem} handleFeedback={handleFeedback}></FeedbackModal>

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