import React from 'react'

function Header() {
  return (
    <div className='flex items-center justify-between px-5 h-16 bg-[#086BAF] text-white'>
        <div>
            <h2 className='text-3xl font-bold'>Geek Support</h2>
        </div>
        <div>
            <ul className='text-base flex gap-6 font-medium'>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Book Appointment</li>
                <li>Contact Us</li>
            </ul>
        </div>
    </div>
  )
}

export default Header