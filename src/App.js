import React from 'react';
//components
import Header from './components/Header';
import Footer from'./components/Footer';
//pages
import RoomDetails from './pages/RoomDetails'
import Home from './pages/Home'
//react router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/room/:id',
    element:<RoomDetails/>

  }
])
const App = () => {
  return <>
   <Header/>
   <RouterProvider router={router}/>
   <Footer/>
  </>
};

export default App;
