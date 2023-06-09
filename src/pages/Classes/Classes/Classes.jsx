import React from 'react';
import { useClasses } from '../../../hooks/useClasses';
import Cover from '../../../components/Cover/Cover';
import coverImg from '../../../assets/banner_class.jpg'
import AllClassCard from '../AllClassCard/AllClassCard';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Classes = () => {
    const [classes] = useClasses();
    return (
        <div>
           <Cover coverImg={coverImg} heading="Our Classes"></Cover>
           <SectionTitle heading="Find All Classes Here"></SectionTitle>
           <div className='grid md:grid-cols-3 gap-8 my-10 mx-6'>
            {
             classes.map(singleClass=> <AllClassCard key={singleClass._id} singleClass={singleClass}></AllClassCard>)
            }
            </div>
        </div>
    );
};

export default Classes;