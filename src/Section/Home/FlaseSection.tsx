import React from 'react';

const FlashSection = () => {
  return (
    <section className="p-6 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-3 lg:px-20 px-5">
        {/* Bagian New Arrivals (menempati 2 kolom pada md ke atas) */}
        <div className="md:col-span-2 bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-2">New Arrivals</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* Empat placeholder untuk gambar produk */}
            <div className="bg-gray-200 h-40 flex items-center justify-center">
              <img src="/newProduct/1.png" alt="" className='w-full h-full object-center' />
            </div>
            <div className="bg-gray-200 h-40 flex items-center justify-center">
              <img src="/newProduct/2.png" alt="" className='w-full h-full object-center' />
            </div>
            <div className="bg-gray-200 h-40 flex items-center justify-center">
              <img src="/newProduct/3.png" alt="" className='w-full h-full object-center' />
            </div>
            <div className="bg-gray-200 h-40 flex items-center justify-center">
              <img src="/newProduct/4.png" alt="" className='w-full h-full object-center' />
            </div>
          </div>
        </div>

        {/* Bagian Special Offers (menempati 1 kolom pada md ke atas) */}
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-4">Special Offers</h2>
          <div className="mb-6">
            <h3 className="font-semibold">Special Deal</h3>
            <p className="text-sm text-gray-600">Get up to 50% off on selected items</p>
            <a href="#" className="text-blue-500 text-sm hover:underline">
              Shop Now &rarr;
            </a>
          </div>
          <div>
            <h3 className="font-semibold">Flash Sale</h3>
            <p className="text-sm text-gray-600">Limited time offers on premium products</p>
            <a href="#" className="text-blue-500 text-sm hover:underline">
              Shop Now &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlashSection;
