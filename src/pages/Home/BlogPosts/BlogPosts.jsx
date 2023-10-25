import React from 'react';
import oilPaintingImg from '../../../../src/assets/blog-images/oilpainting.jpg'
import artSupplyImg from '../../../../src/assets/blog-images/art-craft-supplies.jpg'
import paintingImg from '../../../../src/assets/blog-images/painting.jpeg'
import {BsArrowRight} from 'react-icons/bs'
import './BlogPosts.css'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const BlogPosts = () => {
    return (
        <>
        <SectionTitle heading='Featured Blog Posts'/>
        <div className='grid md:grid-cols-3 gap-6 m-5'>
            <div className='px-4 py-3'>
                <img src={oilPaintingImg} className='rounded-tr-md'/>
                <div className='bg-red-600 text-white px-4 py-2 w-20 -mt-3 absolute rounded-tr-md mb-5 -ms-2 shadow-lg'>Painting</div>
                <p className='text-xl font-semibold mt-10'>10 Things You Need to Know Before You Get Started with Oil Painting</p>
                <p className='mb-5 text-gray-500 mt-3'>When it comes to painting of any kind, it can take a lot of practice, patience and precision before you are able to create your artistic vision. While oil paints may not be...</p>
                <div className='flex text-red-500 fonr-semibold underline'>Read More <BsArrowRight className='mt-1 ms-2'/></div>
            </div>
            <div className='px-4 py-3'>
                <img src={paintingImg} className='blog-img rounded-tr-md object-fill'/>
                <div className='bg-red-600 text-white px-4 py-2 w-20 -mt-3 absolute rounded-tr-md mb-5 -ms-2 shadow-lg'>Painting</div>
                <p className='text-xl font-semibold mt-10'>How to Get Better at Handling the Wacom Pen: Digital Art 101</p>
                <p className='mb-5 text-gray-500 mt-3'>The practice of arts and crafts is a spiritual practice through which we honour the material world, and while we do that we develop a sense of beauty and...</p>
                <div className='flex text-red-500 fonr-semibold underline'>Read More <BsArrowRight className='mt-1 ms-2'/></div>
            </div>
            <div className='px-4 py-3'>
                <img src={artSupplyImg} className='blog-img rounded-tr-md'/>
                <div className='bg-red-600 text-white px-4 py-2 w-20 -mt-3 absolute rounded-tr-md mb-5 -ms-2 shadow-lg'>Painting</div>
                <p className='text-xl font-semibold mt-10'>Artist Paint Brushes: A Guide to Choosing the Right Brush</p>
                <p className='mb-5 text-gray-500 mt-3'> Artist paint brushes become beloved tools the more you use them! As you paint, you will become increasingly familiar with the way the brushes handle the paint...</p>
                <div className='flex text-red-500 fonr-semibold underline'>Read More <BsArrowRight className='mt-1 ms-2'/></div>
            </div>
        </div>
    </>
    );
};

export default BlogPosts;