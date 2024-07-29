import React from 'react'
import NavBar from './NavBar'

function Header() {
  return (
    <div className="px-[10rem] pt-4 mb-[5rem] bg-[url('/public/images/Mask_group-Recovered-Recovered.png')] bg-no-repeat bg-cover 
    max-[425px]:w-full max-[425px]:p-0 max-[425px]:overflow-hidden">
      <div className="mb-5 flex justify-between 
      max-[425px]:flex-col">
        <h1 className='text-[65px] font-bold text-[#E71D36]
        max-[425px]:text-center'>DeMo.</h1>
        <div className="flex items-center 
        max-[425px]:flex-col">
          <div className="list-none mr-5 underline underline-offset-8 text-[#E71D36] text-[larger]
          max-[425px]:mr-0 max-[425px]:mb-5">Services</div>
          <div className="list-none mr-5 text-[larger]
          max-[425px]:mr-0 max-[425px]:mb-5">Packages</div>
          <div className="list-none mr-5 text-[larger]
          max-[425px]:mr-0 max-[425px]:mb-5">Who We Are</div>
          <div className="list-none mr-5 text-[larger]
          max-[425px]:mr-0 max-[425px]:mb-5">Our Protfolio</div>
          <div className="list-none mr-7 text-[larger]
          max-[425px]:mr-0 max-[425px]:mb-5">About Us</div>
          <button className="bg-[#E71D36] text-[larger] rounded-full py-3 px-[3rem] text-white hover:shadow-lg hover:shadow-[#fe9ba7]">Contacts</button>
        </div>
      </div>
      {/* <NavBar/> */}
      <div className="flex justify-between 
      max-[425px]:flex-col max-[425px]:items-center">
        <div className="flex flex-col justify-end">
          <div className="flex flex-col mb-[0.5rem] max-[425px]:items-center">
            <span className='flex'><h1 className='text-[65px] font-bold mr-5
            max-[425px]:text-[40px]'>BEST</h1><h1 className='text-[65px] font-bold text-[#E71D36]
            max-[425px]:text-[40px]'>MARKETING</h1></span><h1 className='text-[65px] font-bold
            max-[425px]:text-[40px]'>COMPANY.</h1>
          </div>
          <h4 className="text-[26px] font-bold my-[2rem]
          max-[425px]:text-[18px]">#1 MARKETING Services Agency in USA & UK</h4>
          <p className="text-[larger] mb-[4rem]
          max-[425px]:text-[small]">If you're looking for the best SEO company for your business,<br />PageTraffic
            is the perfect choice. </p>
          <div className="flex items-center mb-[2rem]
          ">
            <button className="bg-[#E71D36] text-[larger] rounded-full py-3 px-[3rem] text-white mr-8 hover:shadow-lg hover:shadow-[#fe9ba7]
             max-[425px]:mr-5">Get start</button>
            <span className="flex flex items-center">
              <div className="mr-2 animate-pulse">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="52" height="52" rx="26" fill="#E71D36" fill-opacity="0.17"/>
                  <rect x="5" y="6" width="41" height="41" rx="20.5" fill="#E71D36" fill-opacity="0.5" />
                  <rect x="11" y="11" width="30" height="30" rx="15" fill="#E71D36" />
                  <path d="M31.5 25.634C32.1667 26.0189 32.1667 26.9811 31.5 27.366L23.25 32.1292C22.5833 32.5141 21.75 32.0329 21.75 31.2631L21.75 21.7369C21.75 20.9671 22.5833 20.4859 23.25 20.8708L31.5 25.634Z" fill="white" />
                </svg>
              </div>
              <p className="underline underline-offset-8 text-[larger] text-[#E71D36]">Watch Video</p>
            </span>
          </div>
        </div>
        <div className='max-[425px]:hidden'>
          <img src="images/ave.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header
