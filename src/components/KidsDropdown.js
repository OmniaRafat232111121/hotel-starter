import React,{useContext} from 'react';
//room Context
import { RoomContext } from '../context/RoomContext';
//headless ui menu
import {Menu} from '@headlessui/react'
//icons
import { BsChevronDown } from 'react-icons/bs';
const KidsDropdown = () => {
  const {kids,setKids}=useContext(RoomContext);
  const lists=[
    {name:'0 kids'},
    {name:'1 kids'},
    {name:'2 kids'},
    {name:'3 kids'},

  ]
  return (
    <>
    <Menu as='div' className='w-full h-full bg-white relative '>
      <Menu.Button className='w-full h-full  flex items-center justify-between px-8 '>
        {kids === '0 kids' ? 'Not Kids': kids}
        <BsChevronDown className='text-base text-accent-hover'/>

      </Menu.Button>
      {/*item*/}
      <Menu.Items className=' w-full flex  flex-col z-40  bg-white absolute  '>
        {lists.map((list,index)=>{
          return(
            <Menu.Item 
            as='li'
            onClick={()=>setKids(list.name)}
             className=" border-b last-of-type:border-b-0  h-12 hover:bg-accent hover:text-white 
             w-full flex items-center justify-center cursor-pointer" as ='li' key={index}>
              {list.name}
            </Menu.Item>
          )

        })}
      </Menu.Items>
    </Menu>
    </>
  )
};

export default KidsDropdown;
