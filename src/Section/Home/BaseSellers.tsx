import { IconShoppingCart } from '@tabler/icons-react';
import React from 'react';
import truncateWords from '../../Utils/TruncateWords';

const BestSellers = () => {
    const products = [
        {
          id: 1,
          name: 'Laptop Lenovo',
          description: 'Laptop Lenovo dengan prosesor Intel Core i5, RAM 8GB, dan SSD 256GB. Cocok untuk produktivitas harian dan multimedia.',
          price: '$699.99',
          image: '/products/2.png',
        },
        {
          id: 2,
          name: 'CCTV Huawei',
          description: 'Kamera CCTV Huawei beresolusi 1080p dengan fitur night vision dan konektivitas Wi-Fi. Ideal untuk keamanan rumah atau kantor.',
          price: '$249.99',
          image: '/products/8.png',
        },
        {
          id: 3,
          name: 'iPhone 13 Pro',
          description: 'Apple iPhone 13 Pro dengan chip A15 Bionic, sistem kamera canggih, dan desain premium. Pilihan tepat bagi penggemar Apple.',
          price: '$999.99',
          image: '/products/4.png',
        },
        {
          id: 4,
          name: 'Gamepad Rexus',
          description: 'Gamepad Rexus dengan desain ergonomis dan tombol responsif. Cocok untuk bermain game di PC maupun konsol.',
          price: '$59.99',
          image: '/products/7.png',
        },
      ];
      

    return (
        <section className="py-8 ">
            {/* Judul Section */}
            <h2 className="text-2xl font-bold text-center mb-8 text-custom">Best Sellers</h2>

            {/* Grid Container untuk produk */}
            <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-4 min-md:mx-20 mx-10">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-md shadow shadow-gray-100 flex flex-col text-start"
                    >
                        {/* Gambar Produk */}
                        <div className="h-full w-full mb-4 flex items-center justify-center rounded-md bg-gray-200">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-full object-cover rounded-md"
                            />
                        </div>

                        {/* Nama Produk */}
                        <h3 className="text-lg text-start font-semibold ml-2 mb-1">{product.name}</h3>

                        {/* Deskripsi Singkat */}
                        <p className="text-gray-500 text-start text-sm ml-2 mb-2">{truncateWords(product.description, 50)}</p>

                        {/* Harga */}
                        <div className="flex flex-row mt-2">
                            <p className="text-gray-800 font-bold text-md mb-4 py-2 ml-2 ">{product.price}</p>

                            {/* Tombol Add to Cart */}
                            <div className="ml-5 items-end lg:ml-10">
                               <button className="bg-custom flex  text-white py-2 px-2 rounded-md transition-colors">
                                 Add To Cart <span className='ml-3'><IconShoppingCart /></span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BestSellers;
