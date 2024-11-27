import { NavLink } from "react-router-dom";

import menu from '../images/menu.svg';
import cross from '../images/cross.svg';

import { useState } from "react";
const Navbar = () => {

  const [toggle,setToggle]=useState(false);
  return (

    <>
    <nav className="p-2  bg-white w-full h-20 fixed z-30 left-0 top-0  m-0">
      <div className="flex justify-between p-1 items-center ">
      <div className="flex justify-center w-32 items-center text-white ">
        <span className="text-center bg-slate-400 text-black p-1 rounded w-9 h-9 text-xl font-medium ">
          AI
        </span>
        <span className="text-center  p-1 text-xl font-medium text-black">ChatBot</span>
      </div>

      <div className="flex max-md:hidden justify-center items-center bg-white text-black gap-10 text-lg rounded-3xl border p-3 transition-all">
        <NavLink
          to="/"
          className={({isActive}) =>
            isActive ? "border-b-2 border-indigo-600" : "border-b-2 border-transparent"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/About"
          className={({isActive}) =>
            isActive ? "border-b-2 border-indigo-600" : "border-b-2 border-transparent"
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/Features"
          className={({isActive}) =>
            isActive ? "border-b-2 border-indigo-600" : "border-b-2 border-transparent"
          }
        >
          Features
        </NavLink>
        <NavLink
          to="/Pricing"
          className={({isActive}) =>
            isActive ? "border-b-2 border-indigo-600" : "border-b-2 border-transparent"
          }
        >
          Pricing
        </NavLink>
      </div>

      <div className='flex max-md:hidden justify-center h-14 items-center text-lg font-medium cursor-pointer text-white bg-indigo-600 hover:bg-black hover:text-white p-2 rounded-xl'>
        <span>Get in touch</span>
      </div>

      {
        toggle?  <button className="float-right  w-10 h-10 p-1 rounded md:hidden"
       onClick={()=>{
        setToggle(false)
      }}
      >
        <img src={cross} alt="cross" />
      </button>:<button className="float-right  w-10 h-10 p-1 rounded md:hidden" 
        onClick={()=>{
          setToggle(true)
        }}>
        <img src={menu} alt="menu" />
      </button>
      }
          
      </div>


    </nav>


      {
       toggle?  <div className="fixed top-20 left-0 md:hidden w-full z-30 h-full bg-gray-200 bg-opacity-45">


       <div className="flex  justify-center flex-col items-center bg-white text-black gap-10 text-lg   p-3 transition-all">
           <NavLink
             to="/"
             className={({isActive}) =>
               isActive ? "border-b-2 border-indigo-600" : "border-b-2 border-transparent"
             }

             onClick={()=>{
              setToggle(false)
            }}
           >
             Home
           </NavLink>
           <NavLink
             to="/About"
             className={({isActive}) =>
               isActive ? "border-b-2 border-indigo-600" : "border-b-2 border-transparent"
             }

             onClick={()=>{
              setToggle(false)
            }}
           >
             About Us
           </NavLink>
           <NavLink
             to="/Features"
             className={({isActive}) =>
               isActive ? "border-b-2 border-indigo-600" : "border-b-2 border-transparent"
             }

             onClick={()=>{
              setToggle(false)
            }}
           >
             Features
           </NavLink>
           <NavLink
             to="/Pricing"
             className={({isActive}) =>
               isActive ? "border-b-2 border-indigo-600" : "border-b-2 border-transparent"
             }

             onClick={()=>{
              setToggle(false)
            }}
           >
             Pricing
           </NavLink>
         </div>
   
   
       </div>:'' 
      }
   
    </>
    
  );
};

export default Navbar;
