// import React from 'react'
import { BiCart } from "react-icons/bi"
import logo from '../assets/MenWears.png'
import { useState } from "react"
import { IoCloseCircleOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
// import Image from "next/image"
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

  return (
    <div >
        <nav className="fixed w-full flex lg:justify-around gap-20 z-30 bg-black  items-center justify-around py-4 h-[6vh]">


          <img src={logo} alt="logo cl" className="sm:w-[30%]"/>
<article className=" hidden lg:flex flex-row gap-20 items-center">
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
</article>
        

{/* small screen */}
<div
				className="lg:hidden inline-block bg-white cursor-pointer z-30"
				onClick={toggleMenu}>
				{showMenu ? (
					<IoCloseCircleOutline className="h-4 w-4 z-30" />
				) : (
					<GiHamburgerMenu className="h-4 w-4 z-30" />
				)}
			</div>
			<article
				className={
					showMenu
						? "flex flex-col justify-center px-8 fixed top-[3rem] bg-slate-100  transition-all duration-500 z-30 h-full w-full "
						: "hidden"}>
				<ul className="flex flex-col gap-5">
				<li className="bg-[#F5FF32] w-[20vw] font-bold text-black border rounded-lg px-1 text-xl">
   Shop 
</li>
<li>Wishlist</li>
<li className="flex gap-1 items-center">Cart <BiCart/></li>
<li>Profile</li>
				</ul>
			</article>

        </nav>

     </div>
  )
}

export default Navbar