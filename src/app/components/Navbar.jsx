"use client"
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image'
import red_logo from '../../../public/tft-red.svg'
import white_logo from '../../../public/tft-white.svg'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
    
    <nav className="flex justify-between items-center nav">
      {/* Logo */}
      <div className="text-white text-xl font-bold">
        <Link href="/">
      <Image src={white_logo} className='w-16' alt='red_logo'/>
      </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="sm:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-black bg-white px-4 py-2 text-4xl focus:outline-none rounded-full"
        >
          &#8801; {/* Hamburger Icon */}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:flex space-x-6 font-semibold">
        <Link href="/" className="text-white">likes</Link>
        <Link href="/" className="text-white">followers</Link>
        <Link href="/" className="text-white">views</Link>
        <Link href="/" className="text-white">support</Link>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          mobileMenuOpen ? 'block' : 'hidden'
        } lg:hidden fixed inset-0 bg-white h-screen p-4 transition-all duration-500 ease-in-out`}
      >
        <div className="flex justify-between items-center">
        <Link href="/">
        <Image src={red_logo} className='w-16' alt='red_logo'/>
        </Link>
          <button
            onClick={closeMobileMenu}
            className="text-black text-xl focus:outline-none"
          >
            &#x2716; {/* Close Icon */}
          </button>
        </div>
        <div className="flex flex-col items-start mt-10 space-y-4 pl-2 font-semibold text-[30px]">
          <Link href="/" className="text-black hover:text-[#ec3454] transition-all delay-150">likes</Link>
          <Link href="/" className="text-black hover:text-[#ec3454] transition-all delay-150">followers</Link>
          <Link href="/" className="text-black hover:text-[#ec3454] transition-all delay-150">views</Link>
          <Link href="/" className="text-black hover:text-[#ec3454] transition-all delay-150">support</Link>
        </div>
      </div>
    </nav>
    
    
    </>
    
  );
};

export default Navbar;