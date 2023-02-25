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
    <DatePicker
    className='w-full h-full'
    selected={startDate}
    placeholderText='Check in'
    onChange={(date)=>setStartDate(date)}
    />

    </>
  )
};

export default CheckIn;
