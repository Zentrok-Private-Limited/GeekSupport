import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <div className='flex items-center justify-between px-5 h-16 bg-[#086BAF] text-white'>
        <div>
            <h2 className='text-3xl font-bold'>Geek Support</h2>
        </div>
        <div>
            <ul className='text-base flex gap-6 font-medium'>
                <li>Home</li>
                <li className="hover:text-gray-300 cursor-pointer">
                    <Link href="/about">About Us</Link>
                </li>
                <li className="hover:text-gray-300 cursor-pointer">
                    <Link href="/services">Services</Link>
                </li>
                <li>Book Appointment</li>
                <li>Contact Us</li>
            </ul>
        </div>
    </div>
  )
}

export default Header