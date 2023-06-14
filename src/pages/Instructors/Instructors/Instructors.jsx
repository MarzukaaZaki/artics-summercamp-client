import React from 'react';
import Cover from '../../../components/Cover/Cover';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import coverImg from '../../../assets/banner_instructors.jpg'
import { useInstructors } from '../../../hooks/useInstructors';
import AllInstrcutorCard from '../AllInstructorCard/AllInstrcutorCard';
import { AttentionSeeker, Bounce } from 'react-awesome-reveal';
import { useUsers } from '../../../hooks/useUsers';

const Instructors = () => {
    
    const [users] = useUsers();
    const instructors = users.filter(user => user?.role === 'instructor')
    console.log(users);
    return (
        <div>
           
           <Cover coverImg={coverImg} heading="Our Instructors"></Cover>
           <SectionTitle heading="List of Instructors"></SectionTitle>
          
           <div className='grid md:grid-cols-3 gap-8 my-10 mx-6'>
            {
                instructors.map(instructor => <AllInstrcutorCard key={instructor._id} instructor={instructor}></AllInstrcutorCard>)
            }
            </div>
            
        </div>
    );
};

export default Instructors;