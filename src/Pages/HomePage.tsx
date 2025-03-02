import React from 'react'
import Carousel from '../Component/Carousel';
import Category from '../Section/Home/Category';
import BestSellers from '../Section/Home/BaseSellers';
import FlashSection from '../Section/Home/FlaseSection';

const HomePage = () => {

  const cards = [
    {
      id: 1,
      content: (
        <img
          src="/carousel/3.png"
          alt="Teknologi 1"
          className="w-full h-full"
        />
      ),
    },
    {
      id: 2,
      content: (
        <img
          src="/carousel/2.png"
          alt="Teknologi 2"
          className="w-full h-full"
        />
      ),
    },
    {
      id: 3,
      content: (
        <img
          src="/carousel/1.png"
          alt="Teknologi 3"
          className="w-full h-full"
        />
      ),
    },
  ];


  return (
    <>
      <div className='min-md:px-24 mt-20 mb-5 px-10 w-full'>
        <Carousel cards={cards} />
      </div>
      <div className="mt-10 bg-gray-100  min-md:px-24 px-10 py-10 ">
        <div className="justify-items-center text-center max-md:text-xl text-gray-900 text-3xl font-bold">
          Category Product
        </div>
        <div className="mt-10">
          <Category />
        </div>
      </div>
      <BestSellers />
      <FlashSection />
    </>
  )
}

export default HomePage