import React from 'react';
import { useContext } from 'react';
import Room from './Room'
import { RoomContext } from '../context/RoomContext';
//loader
import { SpinnerDotted } from 'spinners-react';
const Rooms = () => {
  const {rooms,loading}=useContext(RoomContext);
  console.log(loading)
  //console.log(rooms)
  return(
    <section className='py-24'>
      {/*loading*/}

      {loading && 
      (
        <div className='h-screen w-full bg-black/90 fixed  top-0 bottom-0 z-50 flex justify-center items-center'>
          <SpinnerDotted/>
        </div>
      )}
   <div className='container mx-auto '> 
   {/*grid*/}
   <div className='grid grid-cols-1 max-w-sm mx-auto gap-[30px]
   lg:grid-cols-3 lg:max-w-none lg:mx-0'>
    {rooms.map((room)=>{
      console.log(room);
      return <Room  room={room} key={room.id}/>
    })}
   </div>

   </div>
    </section>
  )
};

export default Rooms;
