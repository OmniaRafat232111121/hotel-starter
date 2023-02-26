import React ,{useContext} from 'react';
import{ useParams } from 'react-router-dom';
//components
import AdultsDropfown from '../components/AdultsDropdown';
import CheckIn from '../components/CheckIn';
import CheckOut from '../components/CheckOut';
import KidsDropdown from '../components/KidsDropdown';
//scroll top Component
import ScrollToTop from '../components/ScrollToTop'
//context
import {RoomContext} from '../context/RoomContext';
//icons
import { FaCheck } from 'react-icons/fa';
import AdultsDropdown from '../components/AdultsDropdown';
const RoomDetails = () => {
  const {rooms}=useContext(RoomContext);
  const {id} =useParams();
  console.log(id)
  //get room
  const room=rooms.find(room=>{
    return room.id===Number(id)
  })
  //destructre room
  const {name,description,facilities,imageLg,maxPerson,price}=room;

  console.log(room)
  return (
<div className=''>

    {/*banner*/}
    <div className='bg-room bg-cover bg-center relative h-[560px] flex justify-center items-center'>

     {/*overlay*/}
     <div className='absolute w-full h-full bg-black/70'>

     </div>
     {/*title*/}
     <h1 className='  text-center text-6xl text-white font-primary z-30'>
      {name} Details

     </h1>
 
    </div>
    <div className='container mx-auto'> 
     <div className='flex flex-col lg:flex-row h-full py-24'>
     {/*left*/}
     <div className='w-full h-full  px-6  lg:w-[60%]'>
   <h2>{name}</h2>
   <p>{description}</p>
   <img  clasName="mb-8" src={imageLg}/>
   {/*facilities*/}
   <div className='mt-12 '>
    <h3>Room Facitlities</h3>
    <p className=' mt-4 mb-12'>
    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.

    </p>
    {/*grid*/}
    <div className=' grid grid-cols-4  gap-6 mb-12'>
      {facilities.map((item,index)=>{
        //destructre item
        const {name,icon}=item;
        return (
          <div 
          className='flex bg-yellow-100 p-3 rounded-md items-center  gap-x-3 flex-1'
          key={index}>
           <div className='text-3xl text-accent'>{icon}</div>
           <div className='text-base'>{name}</div>

            </div>
        )
      })}
    </div>

   </div>


     </div>
     <div className='w-full h-full lg:w-[40%]'>
    {/*reservation*/}
    <div className='py-8 px-6 bg-accent/20 mb-12'>
      <div className='flex flex-col space-y-4 mb-4'>
       <h3 className='font-semibold bg-accent p-4 text-white rounded-md'>Your reservation</h3>
       <div className='h-[60px]'>
        <CheckIn/>
       </div>
       <div className='h-[60px]'>
        <CheckOut/>
       </div>
       <div className='h-[60px]'>
        <AdultsDropdown/>
       </div>
       <div className='h-[60px]'>
        <KidsDropdown/>
       </div>
       <button className=' p-4 btn btn-lg btn-primary w-full rounded-md'>
        book now for ${price}
       </button>

       {/*rules*/}
       <div>
        <h3 className='h3'>Hotel Rules</h3>
        <p className='mb-7'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis
        </p>
        <ul>
          <li className='flex  items-center gap-x-4'>
            <FaCheck className='text-accent'/>
            Check-in 3:00 PM- 9:00 PM
          </li>
          <li className='flex items-center gap-x-4'>
            <FaCheck className='text-accent'/>
            Check-Out 10:30 PM
          </li>
          <li className='flex items-center gap-x-4'>
            <FaCheck className='text-accent'/>
            No Pets
          </li>
          <li className='flex items-center gap-x-4'>
            <FaCheck className='text-accent'/>
           No Smoking
          </li>
        </ul>
       </div>
      </div>

    </div>
     </div>
     </div>

     </div>
</div>
  );
};

export default RoomDetails;
