import React from 'react';
//link
import {Link} from'react-router-dom';
//icons
import {BsArrowFullscreen,BsPeople} from 'react-icons/bs'
const Room = ({room}) => {
  //destructring
  const {id,name,image,size,maxPerson,description,price} =room;
  return <div className=' bg-purple-700 min-h-[500px] group mb-4'>
    {/*img*/}
    <div className='overflow-hidden'>
      <img  className=" group-hover:scale-110 transation-ll 
      duration-300 w-full " src={image} alt="img-hotel"/>

    </div>
  {/*details*/}
  <div className='bg-green-300  shadow-lg max-w-[300px] mx-auto text-center 
  h-[60px]  tracking-[2px] flex justify-center items-center uppercase font-tertiary font-semibold text-base'>
<div className='flex justify-between w-[80%]'>
   {/*size*/}
 <div>
<div>Size</div>
 </div>
 {/*room capacity*/}
 <div>
<div>room capacity</div>
 </div>
</div>


  </div>

  </div>;
};

export default Room;
