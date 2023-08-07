import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ScheduleCard from '../../../components/ScheduleCard/ScheduleCard';


const Schedule = () => {
    const schedules = [
        {
            nameOfClass: 'Painting',
            imgOfClass: 'https://i.ibb.co/8D0vZKw/artclass-schedule.jpg',
            scheduleList: [
                { day: 'Monday', time: '9:00 AM - 12:00 PM' },
                { day: 'Tuesday', time: '10:00 AM - 1:00 PM' },
                { day: 'Wednesday', time: '8:00 AM - 11:00 AM' },
                { day: 'Thursday', time: '9:00 AM - 12:00 AM' },
                { day: 'Friday', time: '10:00 AM - 1:00 AM' },

            ]
        },
        {
            nameOfClass: 'Sculpting',
            imgOfClass:'https://i.ibb.co/XCgK9TM/sculpting-class-schedule.jpg',
            scheduleList: [
                { day: 'Monday', time: '9:00 AM - 12:00 PM' },
                { day: 'Tuesday', time: '10:00 AM - 1:00 PM' },
                { day: 'Wednesday', time: '8:00 AM - 11:00 AM' },
                { day: 'Thursday', time: '9:00 AM - 12:00 AM' },
                { day: 'Friday', time: '10:00 AM - 1:00 AM' },

            ]
        },
        {
            nameOfClass: 'Pottery',
            imgOfClass:'https://i.ibb.co/K6ZWjdx/pottery-class-schedule.jpg',
            scheduleList: [
                { day: 'Monday', time: '10:00 AM - 12:00 PM' },
                { day: 'Tuesday', time: '10:00 AM - 1:00 PM' },
                { day: 'Wednesday', time: '8:00 AM - 11:00 AM' },
                { day: 'Thursday', time: '9:00 AM - 12:00 AM' },
                { day: 'Friday', time: '10:00 AM - 1:00 AM' },

            ]
        }
    ]
    return (
        <div>
            <SectionTitle heading="Weekly Schedule"></SectionTitle>
            <div className='grid md:grid-cols-3 gap-10 mx-8'>

                {
                    schedules.map((schedule) => <ScheduleCard key={schedule.nameOfClass} nameOfClass={schedule.nameOfClass} imgOfClass={schedule.imgOfClass} scheduleList={schedule.scheduleList}></ScheduleCard>)
                }




            </div>
        </div>
    );
};

export default Schedule;