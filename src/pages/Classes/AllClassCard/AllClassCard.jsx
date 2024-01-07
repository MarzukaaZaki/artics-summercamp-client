import React from 'react';
import { AttentionSeeker, Slide } from 'react-awesome-reveal';
import {BsFillPeopleFill} from 'react-icons/bs'
import {GiTeacher} from 'react-icons/gi'
import {ImPriceTag} from 'react-icons/im'
import { useAuth } from '../../../hooks/useAuth';
import useAdmin from '../../../hooks/useAdmin';
import useInstructor from '../../../hooks/useInstructor';
import toast from 'react-hot-toast'
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom';

const AllClassCard = ({singleClass}) => {
    const [isAdmin] = useAdmin();
    const [isInstructor]=useInstructor();
    const {nameOfClass, instructorName, photo, seats, price,_id} = singleClass;
    const navigate = useNavigate();
    const location = useLocation();
    
    const {user} = useAuth();
    
    const handleSelect = (singleClass) =>{
        console.log(singleClass);
        if(user && user.email){
            const selectedItem = {itemId: _id, price, nameOfClass, seats, photo, email:user.email}
            fetch('http://localhost:5000/carts',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedItem)
            })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
                 toast.success('Added to Cart!')   
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please log in to add to cart',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Log In'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    navigate('/login', {state:{from: location}})
                  )
                }
              })
        }
    }
    
    
    return (
        <Slide>
        <div className="card card-compact w-96 bg-base-100 shadow-xl text-center">
            <figure><img src={photo} alt={nameOfClass} style={{maxHeight: '200px'}}/></figure>
            <div className="card-body">
                <h2 className="card-title justify-center">{nameOfClass}</h2>
                
                <p className='text-gray-500 font-semibold my-3 flex justify-center'><GiTeacher className='my-1 me-3'/>Instructor: {instructorName ? instructorName:'N/A'}</p>
                <div className='flex mb-3'>
                    <p className='flex justify-center'><ImPriceTag className='my-1 me-1'/>Price: ${price}</p>
                    <p className='flex justify-center'> <BsFillPeopleFill className='my-1 me-3'/> Available Seats: {seats}</p>
                   
                </div>
                
                <div className="card-actions justify-center">
                    { isAdmin || isInstructor ?
                    <>
                    <button className='btn' disabled>Select</button>
                    </>:
                        
                        <button onClick={()=> handleSelect(singleClass)} className="btn btn-secondary">Select</button>}
                </div>
            </div>
        </div></Slide>
    );
};

export default AllClassCard;