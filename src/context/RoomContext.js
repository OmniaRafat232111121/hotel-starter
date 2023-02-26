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
    useEffect(()=>{
      setTotal(Number(adults[0])+Number(kids[0]))
    })
    console.log(total)
  console.log(rooms)
  console.log(`adult is${adults} ,Kids is ${kids} and total is ${total}`)
 const handleClick=(e)=>{
  e.preventDefault();
  console.log(total)
  console.log(rooms)
  const newRooms=roomData.filter((room)=>{
    return total<=room.maxPerson;
  })
  setRooms(newRooms);
  console.log(rooms)
 }
  return(
    <div>
      <RoomContext.Provider value={{rooms,adults,setAdults,kids,setKids,handleClick}}>
        {children}
      </RoomContext.Provider>

    </div>
  )
}
export default RoomProvider;