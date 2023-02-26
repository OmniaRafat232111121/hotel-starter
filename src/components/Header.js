import React,{useState} from 'react';
//logo
import LogoWHite from '../assets/img/logo-white.svg';
import LogoDark from '../assets/img/logo-dark.svg';
import { useEffect } from 'react';
const Header = () => {
  const [header,setHeader]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY >50 ? setHeader(true):setHeader(false);
    })
  })
  return (
    <header className={`${header ?'bg-white  py-6 shadow-lg':'bg-transparent py-10' } fixed z-50 w-full transation-all duration-300 `}>
      <div className='container mx-auto'>
        {/*logo*/}
        <a href='/'>
          {header ? 
          ( <img className='w-[160px]' src={LogoDark} />):
          (<img  className='w-[160px]' src={LogoWHite}/>)}

        </a>
        {/*nav*/}
        <nav className={`${header ? 'text-primary':'text-white'} flex  items-center justify-center   lg:gap-x-10 gap-x-4 font-tertiary  text-[15px]  tracking-[3px]`}>
        <a href='' className='hover:text-accent transation'>
           Home
        </a>
        <a href='' className='hover:text-accent transation'>
           Rooms
        </a>
        <a href='' className='hover:text-accent transation'>
           Restaurant
        </a>
        <a href='' className='hover:text-accent transation'>
           SPa
        </a>
        </nav>

      </div>
    </header>

  );
};

export default Header;
