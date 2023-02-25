import React from 'react';
//link
import {Link} from'react-router-dom';
//icons
import {FaExpandArrowsAlt,FaPeopleArrows} from 'react-icons/fa'
const Room = ({room}) => {
  //destructring
  const {id,name,image,size,maxPerson,description,price} =room;
  return <div className=' bg-red-100 min-h-[500px] group mb-4'>
    {/*img*/}
    <div className='overflow-hidden'>
      <img  className=" group-hover:scale-110 transation-ll 
      duration-300 w-full " src={image} alt="img-hotel"/>

    </div>
  {/*details*/}
  <div className='bg-white  -translate-y-1/2 shadow-lg max-w-[300px] mx-auto text-center 
  h-[60px]  tracking-[2px] flex justify-center items-center uppercase font-tertiary font-semibold text-base'>
<div className='flex justify-between w-[80%]'>
   {/*size*/}
 <div className='flex items-center gap-x-3'>
<div className='text-accent'>
<FaExpandArrowsAlt className='text-[15px]'/>
</div>
<div>
  <div>size</div>
  <div>{size}m2</div>
</div>
 </div>
 {/*room capacity*/}
 <div className='flex items-center gap-x-3'>
<div className='text-accent'>
<FaPeopleArrows className='text-[15px]'/>
</div>
<div>
  <div>max People</div>
  <div>{maxPerson}</div>
</div>
 </div>
 <div>

 </div>
</div>


  </div>
  {/*name*/}
  <div className='text-center'>
    <Link to={`/room/${id}`}>
    <h3 className='h3'>{name}</h3>
    </Link>
    <p className='max-w-[300px] mx-auto mb-3 lg:mb-3'>{description.slice(0,56)}</p>
  </div>

{/*btn*/}
<Link to={`/room/${id}`} 
className="btn btn-secondary btn-sm max-w-[240px] mx-auto">Booknow from ${price}</Link>
  </div>;
};

export default Room;
