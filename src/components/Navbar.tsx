// import React from 'react'
import { BiCart } from "react-icons/bi"
import logo from '../assets/MenWears.png'
import { useState } from "react"
import { IoCloseCircleOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
// import Image from "next/image"
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

  return (
    <div >
        <nav className="fixed w-full flex lg:justify-around gap-20 z-30 bg-black  items-center justify-around py-6 h-[6vh] px-2">

<Link to='/' className="">
<img src={logo} alt="logo cl" className="sm:w-[50%]"/>
</Link>
         
<article className=" hidden lg:flex flex-row gap-20 items-center">
<div>
            <input placeholder="search" type="text" className="border-[1.5px] rounded-3xl w-[350px] h-[30px] p-2 bg-transparent border-white"/>
          </div>
            <ul className="flex justify-evenly items-center  gap-8 text-white text-[24px] cursor-pointer">
            <Link to='/'>
<li className="bg-[#F5FF32] font-bold text-black cursor-pointer border rounded-lg px-1 text-xl">
   Shop 
</li>
</Link>
<Link to='/wishlist' className="cursor-pointer">Wishlist</Link>
<Link to="/cart" className="flex gap-1 items-center cursor-pointer">Cart <BiCart/></Link>
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
						? "flex flex-col justify-center px-8 fixed top-[4.2rem] bg-slate-100  transition-all duration-500 z-30 h-full w-full "
						: "hidden"}>
				<ul className="flex flex-col gap-5" >
        <Link to='/'>
				<li className="bg-[#F5FF32] w-[20vw] font-bold text-black border rounded-lg px-1 text-xl" onClick={toggleMenu}>
   Shop 
</li>
</Link>
<Link to='/wishlist' className="cursor-pointer" onClick={toggleMenu}>Wishlist</Link>
<Link to="/cart" className="flex gap-1 items-center cursor-pointer" onClick={toggleMenu}>Cart <BiCart/></Link>
<li onClick={toggleMenu}>Profile</li>
            {/* </ul> */}
				</ul>
			</article>

        </nav>

     </div>
  )
}

export default Navbar