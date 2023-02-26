import React from 'react';
//components
import AdultsDropdown from '../components/AdultsDropdown'
import KidsDropdown from '../components/KidsDropdown'
import CheckIn from '../components/CheckIn'
import CheckOut from '../components/CheckOut'
import { useContext } from 'react';
import { RoomContext } from '../context/RoomContext';
const BookForm = () => {
  const {handleClick}=useContext(RoomContext)
  return (
    <>
    <form className='h-[300px] bg-green-100 w-full lg:h-[70px]'>
      <div className='flex flex-col w-full h-full lg:flex-row'>
        <div className='flex-1 border-r'>
          <CheckIn/>
        </div>
        <div className='flex-1 border-r'>
          <CheckOut/>
        </div>
        <div className='flex-1 border-r'>
          <AdultsDropdown/>
        </div>
        <div className='flex-1 border-r'>
          <KidsDropdown/>
        </div>
        <button 
      onClick={(e)=>handleClick(e)}
      type='submit'
      className='btn btn-primary'>
      Check Now
      </button>

      </div>
      {/*btn*/}
      
    </form>
    </>
  )
};

export default BookForm;
