import { BsTrash } from 'react-icons/bs';
import {GrUserAdmin} from 'react-icons/gr'
import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-hot-toast';

const AllUsers = () => {
    // const [users] = useUsers([]);

    // Tanstack Query
    const {data: users= [], refetch} = useQuery(['users'], async()=>{
        const res = await fetch('https://artics-summer-camp-server.vercel.app/users')
        return res.json();
    })

    

    // Make a user an admin
    const handleMakeAdmin = (user) =>{
        fetch(`https://artics-summer-camp-server.vercel.app/users/admin/${user._id}`,
        {
            method:'PATCH',
            
        })
        .then(res =>res.json())
        .then(data =>{
            if(data.modifiedCount){
                refetch();
                toast.success(`${user.email} is an admin now`)
            }
        })
    }

    // Make a user an instructor
    const handleMakeInstructor = (user) =>{

        fetch(`https://artics-summer-camp-server.vercel.app/users/instructor/${user._id}`,
        {
            method:'PATCH',
            
        })
        .then(res =>res.json())
        .then(data =>{
            if(data.modifiedCount){
                refetch();
                toast.success(`${user.email} is an instructor now`)
            }
        })

    }

    // Delete a user
    const handleDelete = (user) =>{

    }
    return (
        <div className="overflow-x-auto w-full text-center">
            <h1 className=' text-3xl font-bold my-4'> Manage Users</h1>
            <h3 className='text-xl mb-4'>Total users: {users.length}</h3>
            
            <table className="table w-full">
                {/* head */}
                <thead className='bg-slate-800 text-white uppercase'>
                    <tr>

                        <th>User</th>
                        <th>Email</th>
                        <th>Current Role</th>
                        <th>Change user to admin or instructor</th>
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
                            <td>
                                {
                                    user? user.role: <><p>student</p></>
                                }
                            </td>
                            <td>
                                {
                                    user.role === 'admin'? <button onClick={()=>{handleMakeAdmin(user)}} className='btn btn-info btn-xs mx-3' disabled> <GrUserAdmin/>Make Admin </button> : <button onClick={()=>{handleMakeAdmin(user)}} className='btn btn-info btn-xs mx-2'> <GrUserAdmin/>Make Admin </button>
                                }
                                {
                                     user.role === 'instructor'? <button onClick={()=>{handleMakeInstructor(user)}} className='btn btn-info btn-xs mx-3' disabled> Make Instructor </button> : <button onClick={()=>{handleMakeInstructor(user)}} className='btn btn-info btn-xs mx-2'> Make Instructor </button>
                                }
                            </td>
                            <td><button onClick={()=>{handleDelete(user)}} className='btn btn-sm bg-red-500 text-white'><BsTrash></BsTrash> Delete</button></td>
                            <div className="divider"></div> 
                        </tr>
                        

                    )}
                </tbody>
                

            </table>
            
        </div>
    );
};

export default AllUsers;