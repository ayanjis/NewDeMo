import React from 'react'

function OurPortfolio() {
  return (
    <div className="flex flex-col justify-center items-center mb-[6rem] scale-[1.14]">
      <h1 className="text-[45px] font-bold mb-[1.5rem]">Our Portfolio</h1>
      <div className="mb-[1.5rem]">
        <span className="mr-[3rem] text-[larger]">All</span>
        <span className="mr-[3rem] text-[larger]">Website Design</span>
        <span className="mr-[3rem] text-[larger]">Mobile App</span>
        <span className="mr-[3rem] text-[larger]">Design Branding</span>
        <span className="underline underline-offset-8 text-[#E71D36] text-[larger]">UI/UX</span>
      </div>
      <div className="mb-[4rem]">
        <div className="flex mb-5">
          <div className="transition duration-300 ease-in-out mr-5 hover:drop-shadow-2xl">
            <img src="images/image 8.png" alt="" 
            className='transition duration-300 ease-in-out hover:scale-105'/>
          </div>
          <div className="transition duration-300 ease-in-out mr-5 hover:drop-shadow-2xl">
            <img src="images/image 9.png" alt="" 
            className='transition duration-300 ease-in-out hover:scale-105'/>
          </div>
          <div className="transition duration-300 ease-in-out mr-5 hover:drop-shadow-2xl">
            <img src="images/image 10.png" alt="" 
            className='transition duration-300 ease-in-out hover:scale-105'/>
          </div>
        </div>
        <div className="flex">
        <div className="transition duration-300 ease-in-out mr-5 hover:drop-shadow-2xl">
            <img src="images/image 11.png" alt="" 
            className='transition duration-300 ease-in-out hover:scale-105'/>
          </div>
          <div className="transition duration-300 ease-in-out mr-5 hover:drop-shadow-2xl">
            <img src="images/image 12.png" alt="" 
            className='transition duration-300 ease-in-out hover:scale-105'/>
          </div>
          <div className="transition duration-300 ease-in-out mr-5 hover:drop-shadow-2xl">
            <img src="images/image 13.png" alt="" 
            className='transition duration-300 ease-in-out hover:scale-105'/>
          </div>
        </div>
      </div>
      <button className="bg-[#2EC4B6] rounded-lg py-3 px-[3rem] text-white hover:shadow-lg hover:shadow-[#acf7f0]">View more</button>
    </div>
  )
}

export default OurPortfolio
