import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const MyClasses = () => {
    const { user } = useContext(AuthContext);
    const [myClasses, setMyClasses] = useState([]);

    console.log(user?.email);
    useEffect(()=>{
        fetch(`http://localhost:5000/myclasses/${user?.email}`)
        .then(res =>res.json())
        .then(result =>{
            setMyClasses(result);
        })
    }, [user])

    console.log(myClasses)



    return (
         <div className="overflow-x-auto w-full">
            <h1 className='text-center text-3xl font-bold my-4'> My classes</h1>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>

                        <th>Class Name with Picture</th>
                        <th>Status</th>
                        <th>Price</th>
                        <th>Available Seats</th>
                        <th>Action</th>
                      

                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}

                    {myClasses?.map((classItem) =>
                        <tr classItem={classItem} key ={classItem._id}>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={classItem.photo} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{classItem.nameOfClass}</div>
                                       

                                    </div>
                                </div>
                            </td>
                            <td>
                                {classItem.status}

                            </td>
                            <td>${classItem.price}</td>
                            <td>{classItem.seats}</td>
                            <td><button className='btn btn-sm uppercase'>Update</button></td>
                            
                        </tr>

                    )}
                </tbody>
                

            </table>
            
        </div>
    );
};

export default MyClasses;