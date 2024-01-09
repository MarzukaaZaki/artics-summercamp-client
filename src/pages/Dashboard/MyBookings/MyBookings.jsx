import React from 'react';
import useCart from '../../../hooks/useCart';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
const MyBookings = () => {
    const [cart, refetch] = useCart();
    console.log(cart);
    const totalPrice = cart.reduce((runningTotal, item)=>runningTotal + parseFloat(item.price) , 0 );
    
    
    // Delete cart item
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://artics-summer-camp-server.vercel.app//carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="overflow-x-auto w-full text-center">
            <h1 className=' text-3xl font-bold my-4'> My Booked Classes</h1>
            <h3 className='text-xl mb-4'>Total Classes: {cart.length}, 
            Total Price: {totalPrice}</h3>

            
            <table className="table w-full">
                {/* head */}
                <thead className='bg-slate-800 text-white uppercase'>
                    <tr>

                        <th>#</th>
                        <th>Class</th>
                        <th>Price</th>
                        <th>Perform an Action</th>
                      

                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}

                    {cart?.map((cartItem, index) =>
                        <tr cartItem={cartItem} key ={cartItem._id}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                               {cartItem?.nameOfClass}
                            </td>
                            <td>
                               {cartItem?.price}
                            </td>
                            <td>
                              <button onClick={()=>handleDelete(cartItem)} className='btn bg-red-500 btn-xs text-white'>Delete</button>
                            </td>
                            
                            <div className="divider"></div> 
                        </tr>
                        

                    )}
                </tbody>
                

            </table>
            {
                cart.length ? <Link to ='/dashboard/payment' className='btn text-white bg-teal-500 hover:bg-teal-700 px-4 py-2 uppercase'> Pay Now </Link>
            : ''}
            
        </div>
    );
};

export default MyBookings;