import React from 'react';
import Rooms from '../components/Rooms'
import BookForm from '../components/BookForm';
import HeroSlider from '../components/HeroSlider';
const Home = () => {
  return (
    <>
    <HeroSlider/>
    <div className='mx-auto container relative'>
<div className='bg-accent/20 mt-4 p-4 lg:shadow-xl lg:absolute lg:left-0 lg:right-0 lg:p-0 lg:z-40 lg:-top-12'>
<BookForm/>
</div>
<Rooms/>
  </div>;
    </>
  )
  
};

export default Home;
