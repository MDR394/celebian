import React from 'react'
import Navbar from './Navbar'
import Link from 'next/link'
import Image from 'next/image'
import stars from '../../../public/trustpilot-5-stars.svg'

const HeaderHome = () => {
  
  return (
    <div className="HeaderHome_bg pt-7">

        <div className=" max-w-5xl px-4 mx-auto h-screen">
            <Navbar />
            <div className="hidden sm:flex h-4/5 items-center ">
              <div className="flex">
              <div className="text w-1/2">
                <h1 className='text-5xl font-bold'>Purchase TikTok followers, likes and views</h1>
                <h2 className='text-2xl mt-7 mb-6'>Celebian is a top-rated TikTok growth platform for a good reason. Explore the quality services we offer below.</h2>
                <div className='border-[1px] p-4 mb-8 flex flex-col  justify-start rounded-md'>
                <Image src={stars} className='w-2/5' alt='stars'/>
                <h2 className='mt-2'>4.8 | Rated Excellent on Trustpilo</h2>
                </div>
                <Link href='/' className='bg-white text-[#CB0973] font-semibold text-xl py-3 px-4 rounded-md'>See all services</Link>
              </div>
             
              <div className="videos w-1/2">
              <h1></h1>
              </div>
            </div>
              </div>
              
            <div className="header_data_mob sm:hidden flex h-4/5 items-center ">
            <div className="flex">
              <div className="text ">
                <h1 className='text-5xl font-bold'>Purchase TikTok followers, likes and views</h1>
                <h2 className='text-2xl mt-7 mb-6'>Celebian is a top-rated TikTok growth platform for a good reason. Explore the quality services we offer below.</h2>
                <div className='border-[1px] p-4 mb-8 flex flex-col  justify-start rounded-md'>
                <Image src={stars} className='w-2/5' alt='stars'/>
                <h2 className='mt-2'>4.8 | Rated Excellent on Trustpilo</h2>
                </div>
                <Link href='/' className='bg-white text-[#CB0973] font-semibold text-xl py-3 px-4 rounded-md'>See all services</Link>
              </div>
             
              <div className="videos w-1/2">
              <h1></h1>
              </div>
            </div>
            </div>
        </div>

    </div>
  )
}

export default HeaderHome