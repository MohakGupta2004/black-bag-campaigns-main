"use client"
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { usePathname } from 'next/navigation'

const Header = () => {
  const { data: session } = useSession()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className='bg-black flex justify-between'>
      <span>
        <img 
          src="https://thumbs.dreamstime.com/b/ngo-letter-logo-design-black-background-ngo-creative-initials-letter-logo-concept-ngo-letter-design-ngo-letter-logo-design-249418889.jpg" 
          width={100} 
          alt="Logo"
        />
      </span>
      <div className='p-9'>
        {session && <>
          <button ref={dropdownRef} onClick={()=>setIsOpen(!isOpen)} className="flex items-center focus:outline-none">
            <img src={session.user.image} className='bg-red-500 w-8 h-8 rounded-full'/>
        </button>
        
          <div className={`${isOpen?'': "hidden"} fixed m-3 top-15 right-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg`}>
            <ul className="py-2">
              <li>
                <Link href="/profile">
                  <p className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</p>
                </Link>
              </li>
              <li>
                <Link href="/settings">
                  <p className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Settings</p>
                </Link>
              </li>
              <li>
                <button onClick={() => signOut()} className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100">
                  Logout
                </button>
              </li>
            </ul>
          </div></>
        }
        {!session && pathname !== '/login' && (
          <Link href="/login">
            <button 
              type="button" 
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md shadow-md shadow-purple-500/50 hover:shadow-lg hover:shadow-purple-600/60 transition-shadow duration-300">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Header
