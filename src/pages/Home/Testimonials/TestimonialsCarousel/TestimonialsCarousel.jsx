import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Carousel } from 'react-responsive-carousel';
import studentImg1 from '../../../../assets/kid2.jpg'
import studentImg2 from '../../../../assets/student2.jpg'
import studentImg3 from '../../../../assets/student3.jpg'


const TestimonialsCarousel = () => {

  return (
    <div className='bg-indigo-200' style={{maxWidrh:'400px'}}>
      <Carousel
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        className='p-10'
        
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const defStyle = {
          
            marginBottom:10,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "white",
            cursor: "pointer"
          };
          const style = isSelected ? { ...defStyle, backgroundColor: "red" } : { ...defStyle };
          return (
            <div className='flex justify-end'>
            <div
              style={style}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
            />
          </div>
          );
        }}
      >
        <div className='slide'>
          <img src={studentImg1} alt="Slide 1" className="rounded-full border-blue-900 mt-10 mb-2" style={{ height: '100px', width: '100px' }} />
          <div>
            <p className='md:text-xl px-4 mt-6 mb-6 italic sm:text-sm'>Artics = Best summer ever! Pottery, painting, and recycling arts were a blast. Thanks for the creativity and new pals!</p>
            <p className='text-red-500 mb-10'>Josh Briggs, Student</p>
          </div>

        </div>
        <div className='slide' >
          <img src={studentImg2} alt="Slide 1" className="rounded-full mt-4 mb-2" style={{ height: '100px', width: '100px' }} />
          <div>
            <p className='md:text-xl px-4 mt-6 mb-6 italic sm:text-sm'>"I love Artics! I made colorful paintings and clay animals that are so cool. My teachers are fun, and I'm so happy I can make stuff I imagine!</p>
            <p className='text-red-500 mb-4'>Max Stevenson, Student</p>
          </div>

        </div>

        <div className='slide'>
          <img src={studentImg3} alt="Slide 1" className="rounded-full mt-4 mb-2" style={{ height: '100px', width: '100px' }} />
          <div>
            <p className='md:text-xl px-4 mt-6 mb-6 italic sm:text-sm'>I built towers with clay and made a picture puzzle. The teachers are funny, and I'm like an art superhero now!</p>
            <p className='text-red-500 mb-4'>Chester Peters, Student</p>
          </div>

        </div>


        


      </Carousel>
    </div>
  );
};

export default TestimonialsCarousel;