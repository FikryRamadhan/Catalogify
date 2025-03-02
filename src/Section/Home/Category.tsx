import { IconDeviceGamepad2, IconDeviceMobile, IconHome, IconShirt } from '@tabler/icons-react';
import React from 'react';

const Category = () => {
  return (
   <>
      {/* Container Kategori */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Card Fashion */}
        <div className="bg-white p-6 rounded-md shadow-md w-60 flex flex-col items-center">
          <IconShirt size={40} className="text-darkpurple mb-2" />
          <p className="text-darkpurple font-semibold">Fashion</p>
        </div>
        
        {/* Card Electronics */}
        <div className="bg-white p-6 rounded-md shadow-md w-60 flex flex-col items-center">
          <IconDeviceMobile size={40} className="text-darkpurple mb-2" />
          <p className="text-darkpurple font-semibold">Electronics</p>
        </div>
        
        {/* Card Home */}
        <div className="bg-white p-6 rounded-md shadow-md w-60 flex flex-col items-center">
          <IconHome size={40} className="text-darkpurple mb-2" />
          <p className="text-darkpurple font-semibold">Home</p>
        </div>
        
        {/* Card Gaming */}
        <div className="bg-white p-6 rounded-md shadow-md w-60 flex flex-col items-center">
          <IconDeviceGamepad2 size={40} className="text-darkpurple mb-2" />
          <p className="text-darkpurple font-semibold">Gaming</p>
        </div>
      </div>
   </>
  );
};

export default Category;
