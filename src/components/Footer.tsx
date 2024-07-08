import { BiCart } from "react-icons/bi"
import logo from '../assets/MenWears.png'

const Footer = () => {
  return (
    <footer className="bg-[#282828] text-white p-6">
        <div>
<ul className="flex justify-evenly items-center gap-4  lg:gap-8 text-white lg:text-[24px] flex-wrap">
<li className="bg-[#F5FF32] font-bold text-black border rounded-lg px-1 text-xl">
   Shop 
</li>
<li>Wishlist</li>
<li className="flex gap-1 items-center">Cart <BiCart/></li>
<li>Profile</li>
            </ul>
            </div>

            <div className="flex justify-center gap-20 lg:text-[24px] py-6">
<p>Terms & conditions</p>
<p>Contact Us</p>

            </div>
            <img src={logo} alt="logo cl" className="sm:w-[60%] mx-auto py-4 "/>
    </footer>
  )
}

export default Footer