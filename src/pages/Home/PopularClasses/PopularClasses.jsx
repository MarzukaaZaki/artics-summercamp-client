import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useClasses } from '../../../hooks/useClasses';
import { list } from 'postcss';
import ClassCard from '../../../components/ClassCard/ClassCard';

const PopularClasses = () => {
    const [classes] = useClasses();
    const popularClasses = classes.filter(popularClass => popularClass.studentNo >= 9 && popularClass.status == 'approved');
    console.log(popularClasses);
    return (
        <div className= "flex flex-col items-center">
            <SectionTitle heading="Top Classes" subHeading="Learn, Collaborate and Experiment"></SectionTitle>
            <div className='grid md:grid-cols-3 gap-8'>
            {
                popularClasses.map(popularClass => <ClassCard key={popularClass._id} popularClass={popularClass}></ClassCard>)
            }
            </div>
        </div>
    );
};

export default PopularClasses;