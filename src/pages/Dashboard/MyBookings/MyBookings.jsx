import React from 'react';
import useCart from '../../../hooks/useCart';

const MyBookings = () => {
    const [cart, refetch] = useCart();
    console.log(cart);

    return (
        <div className="overflow-x-auto w-full text-center">
            <h1 className=' text-3xl font-bold my-4'> Manage Classes</h1>
            <h3 className='text-xl mb-4'>Total Classes: {cart.length}</h3>
            
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
                              <button className='btn bg-red-500 btn-xs text-white'>Delete</button>
                            </td>
                            
                            <div className="divider"></div> 
                        </tr>
                        

                    )}
                </tbody>
                

            </table>
            
        </div>
    );
};

export default MyBookings;