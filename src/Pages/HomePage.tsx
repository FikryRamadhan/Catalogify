import React from 'react'
import Carousel from '../Component/Carousel';
import Category from '../Section/Home/Category';

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
    <div className='mt-20 min-md:px-24 px-10 w-full'>
      <Carousel cards={cards} />
      <div className="mt-10">
        <div className="justify-items-center text-center text-gray-900 text-3xl font-bold ">
          Category Product
        </div>
        <div className="mt-10">
        <Category />
        </div>

        
      </div>
    </div>
  )
}

export default HomePage