import React,{createContext,useState,useEffect} from 'react';
//data
import {roomData} from '../data'
//createContext
export const RoomContext=createContext();
const RoomProvider=({children})=>{
  const [rooms,setRooms]=useState(roomData);
  const [adults,setAdults]=useState(' 1 Adult');
  const [kids,setKids]=useState(' 0 Kids');
  const [total,setTotal]=useState(0);

  console.log(rooms)
  console.log(`adult is${adults} ,Kids is ${kids}`)
  return(
    <div>
      <RoomContext.Provider value={{rooms,adults,setAdults,kids,setKids}}>
        {children}
      </RoomContext.Provider>

    </div>
  )
}
export default RoomProvider;