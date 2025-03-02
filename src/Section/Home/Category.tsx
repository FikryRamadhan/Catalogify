import { IconDeviceCctv, IconDeviceGamepad2, IconDeviceLaptop, IconDeviceMobile, IconHome, IconShirt } from '@tabler/icons-react';
import React from 'react';

const Category = () => {
    return (
        <>
            {/* Container Kategori */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* Card Fashion */}
                <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center">
                    <IconDeviceLaptop size={40} className="text-darkpurple mb-2" />
                    <p className="text-darkpurple font-semibold">Laptop</p>
                </div>

                {/* Card Electronics */}
                <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center">
                    <IconDeviceMobile size={40} className="text-darkpurple mb-2" />
                    <p className="text-darkpurple font-semibold">Mobile</p>
                </div>

                {/* Card Home */}
                <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center">
                    <IconDeviceCctv size={40} className="text-darkpurple mb-2" />
                    <p className="text-darkpurple font-semibold">CCTV</p>
                </div>

                {/* Card Gaming */}
                <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center">
                    <IconDeviceGamepad2 size={40} className="text-darkpurple mb-2" />
                    <p className="text-darkpurple font-semibold">Gaming</p>
                </div>
            </div>
        </>
    );
};

export default Category;
