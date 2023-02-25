import React,{useState} from 'react';
//datePicker
import DatePicker from 'react-datepicker'
//datepicker css
import 'react-datepicker/dist/react-datepicker.css';
import '../datepicker.css'
import{BsCalendar} from 'react-icons/bs'
const CheckIn = () => {
  const [startDate,setStartDate]=useState(false);
  return(
    <>
   <div className='relative flex items-center h-full'>
{/*icon*/}
<div className='absolute  ml-2 z-100 pr-8'>
  <div>
    <BsCalendar className='text-accent text-base'/>
  </div>
</div>
<DatePicker
    className='w-full h-full'
    selected={startDate}
    placeholderText='Check in'
    onChange={(date)=>setStartDate(date)}
    />
   </div>

    </>
  )
};

export default CheckIn;
