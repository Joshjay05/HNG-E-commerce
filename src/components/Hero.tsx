// import React from 'react'

// import Navbar from "./Navbar"
import men from '../assets/men.png'
// import React from 'react'

const Hero = () => {
  return (
    <header className="bg-black grid grid-cols-2 items-center sm:flex sm:flex-col-reverse md:flex md:flex-col-reverse gap-4 lg:pt-[8rem] lg:pb-[6rem] py-12 px-[4%] mb-10">
    <article className='text-white lg:ml-[4rem]  '>
<p className='flex flex-col  leading-[1rem] py-2'><span className='tracking-wider lg:text-3xl  text-2xl'>Welcome to our
    </span> <br /><b className='leading-[3rem] py-2 tracking-wider text-wrap lg:text-[49px] text-2xl'>Men Fashion Collection!</b> </p>

<p className='leading-[3rem] mb-4 py-1 lg:max-w-[70%] text-justify tracking-wide'>Explore our curated selection of stylish clothing and accessories, from tailored suits and dress shirts to casual jeans and trendy streetwear. Complete your look with premium watches, belts, and footwear. Discover quality pieces that reflect your personality and enhance your confidence.</p>

<a href="/" className='bg-[#F5FF32] font-bold text-black border rounded-lg p-2 text-xl'>Shop Now !</a>
    </article>

    <article className='lg:ml-[4rem] '>
        <img src={men} alt="men" className='w-[636px] h-[690px] sm:h-[50vh]'/>
    </article>s
{/* </section> */}

    </header>
  )
}

export default Hero