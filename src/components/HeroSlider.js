import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
//import swiper style
import 'swiper/css'

import 'swiper/css/effect-fade'
import Img1 from '../assets/img/heroSlider/1.jpg';
import Img2 from '../assets/img/heroSlider/2.jpg';
import Img3 from '../assets/img/heroSlider/3.jpg';
import { Autoplay, EffectFade } from 'swiper';
const slides=[
  {
    title:'Your Luxury HotelFor Vacation',
    bg:Img1,
    btnText:'See Our Rooms',
  },
  {
    title:'Your Luxury HotelFor Vacation',
    bg:Img2,
    btnText:'See Our Rooms',
  }
  ,{
    title:'Your Luxury HotelFor Vacation',
    bg:Img3,
    btnText:'See Our Rooms',
  }
]
const HeroSlider = () => {
  return (
    <Swiper
    modules={[EffectFade,Autoplay]}
    effect={'fade'}
    loop={true}
    autoplay={{
      delay:1000,
      disableOnInteraction:false
    }}
     className='heroSlider  h-[600px]   lg:h-[860px]'>
      {slides.map((slide,index)=>{
        const {title,bg,btnText}=slide;
        return (
          <SwiperSlide 
          key={index} 
          className='h-full relative flex justify-center items-center bg-pink-500'>
            <div className='z-20 text-white text-center'>
             
              <div className='uppercase font-tertiary tracking-[10px] mb-5'>
                Just Enjoy and Relax
                </div>
                <h1 className=' leading-tight text-[32px] font-primary uppercase  tracking-[2px] max-w-[900px] lg:text-[68px]'>
                  {title}
                </h1>
                <button className='btn btn-lg btn-primary  mx-auto' >{btnText}</button>
            </div>
            <div className='absolute top-0 w-full h-full'>
              <img className='object-cover h-full w-full '
               src={bg} 
                alt=""/>
            </div>
               {/*overlay*/}
               <div className='absolute w-full h-full bg-black/70'>

               </div>
          </SwiperSlide>
        )

      })}
    </Swiper>

 );
};

export default HeroSlider;
