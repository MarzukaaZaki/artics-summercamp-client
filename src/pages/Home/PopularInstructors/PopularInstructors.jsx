import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useInstructors } from '../../../hooks/useInstructors';
import InstructorCard from '../../../components/InstructorCard/InstructorCard';
import { useUsers } from '../../../hooks/useUsers';

const PopularInstructors = () => {
    const [users] = useUsers();
    const instructors = users.filter(user => user.role == 'instructor')
    const popularInstructors = instructors.slice(0,6)
    console.log(popularInstructors);
    return (

        <div className="flex flex-col items-center ms-10">

            <SectionTitle heading="Top Instructors" subHeading="Enrich your Knowledge With the Best Mentors"></SectionTitle>
            <div className='grid md:grid-cols-3 gap-8'>
            {
               popularInstructors.map(popularInstructor =><InstructorCard key={popularInstructor._id} popularInstructor={popularInstructor}></InstructorCard>)
            }
            </div>
        </div>


    );
};

export default PopularInstructors;