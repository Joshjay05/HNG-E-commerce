// import React from 'react'
import { BiCart } from "react-icons/bi"
import logo from '../assets/MenWears.png'
// import Image from "next/image"
const Navbar = () => {
  return (
    <div >
        <nav className=" bg-black flex items-center justify-around py-4">


          <img src={logo} alt="logo cl"/>

          <div>
            <input placeholder="search" type="text" className="border-[1.5px] rounded-3xl w-[350px] h-[30px] p-2 bg-transparent border-white"/>
          </div>
            <ul className="flex justify-evenly items-center  gap-8 text-white text-[24px]">
<li className="bg-[#F5FF32] font-bold text-black border rounded-lg px-1 text-xl">
   Shop 
</li>
<li>Wishlist</li>
<li className="flex gap-1 items-center">Cart <BiCart/></li>
<li>Profile</li>
            </ul>

        </nav>

     </div>
  )
}

export default Navbar