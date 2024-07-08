// import React from 'react'

// import Navbar from "./Navbar"
import men from '../assets/men.png'
// import React from 'react'

const Hero = () => {
  return (
    <header className="bg-black grid grid-cols-2 items-center sm:grid py- px-[4%]">
    <article className='text-white ml-[4rem]  '>
<p className='flex flex-col  leading-[1rem] py-2'><span className='tracking-wider text-3xl'>Welcome to our
    </span> <br /><b className='leading-[3rem] py-2 tracking-wider text-wrap text-[49px]'>Men Fashion Collection!</b> </p>

<p className='leading-[3rem] mb-4 py-1 max-w-[70%] text-justify tracking-wide'>Explore our curated selection of stylish clothing and accessories, from tailored suits and dress shirts to casual jeans and trendy streetwear. Complete your look with premium watches, belts, and footwear. Discover quality pieces that reflect your personality and enhance your confidence.</p>

<a href="/" className='bg-[#F5FF32] font-bold text-black border rounded-lg p-2 text-xl'>Shop Now !</a>
    </article>

    <article className='ml-[4rem]'>
        <img src={men} alt="men" className='w-[636px] h-[690px]'/>
    </article>s
{/* </section> */}

    </header>
  )
}

export default Hero