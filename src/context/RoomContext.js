import React,{createContext,useState,useEffect} from 'react';
//data
import {roomData} from '../data'
//createContext
export const RoomContext=createContext();
const RoomProvider=({children})=>{
  const [rooms,setRooms]=useState(roomData);
  console.log(rooms)
  return(
    <div>
      <RoomContext.Provider value={{rooms}}>
        {children}
      </RoomContext.Provider>

    </div>
  )
}
export default RoomProvider;