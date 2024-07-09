import { BiCart } from "react-icons/bi"
import logo from '../assets/MenWears.png'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-[#282828] text-white p-6">
        <div>
<ul className="flex justify-evenly items-center gap-4  lg:gap-8 text-white lg:text-[24px] flex-wrap">
<li className="bg-[#F5FF32] font-bold text-black border rounded-lg px-1 text-xl">
   Shop 
</li>
<Link to='/wishlist' className="cursor-pointer" >Wishlist</Link>
<Link to="/cart" className="flex gap-1 items-center cursor-pointer" >Cart <BiCart/></Link>
<li >Profile</li>
            </ul>
            </div>

            <div className="flex justify-center gap-[3rem] lg:text-[24px] py-6">
<p>Terms & conditions</p>
<p>Contact Us</p>

            </div>
            <Link to='/' className="">
            <img src={logo} alt="logo cl" className="sm:w-[60%] mx-auto py-4 "/>
{/* <img src={logo} alt="logo cl" className="sm:w-[50%]"/> */}
</Link>
    </footer>
  )
}

export default Footer