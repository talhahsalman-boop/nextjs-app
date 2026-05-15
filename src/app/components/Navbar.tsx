import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='Navbr w-[92vw] h-18 mb-8 mt-5 bg-gray-100 flex justify-around items-center ml-15 rounded-2xl'>
        <div className="logo text-[22px] font-bold">Apna Card</div>
        <div className="links ">
            <ul className='flex gap-3'>
                <li className='text-[18px]'> 
                    <Link href="/"> Read</Link>
                    </li>
                <li className='text-[18px]'>
                     <Link href= "/write"> Write</Link>
                     </li>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
