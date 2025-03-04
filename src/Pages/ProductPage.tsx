import React, { useState } from 'react';
import {
  IconStar,
  IconStarFilled,
  IconShoppingCart,
} from '@tabler/icons-react';
import Products from '../Hooks/Products';
import Carousel from '../Component/Carousel';
import cards from '../Hooks/Card';
import { Link, NavLink } from 'react-router-dom';

const ProductPage = () => {
  const [products] = useState(Products);

  // State untuk Search, Kategori, dan Sort
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [sortOption, setSortOption] = useState('Sort by');

  // State untuk Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  // === 1. Filter Berdasarkan Search dan Kategori ===
  const filteredProducts = products.filter((product) => {
    // Jika category bukan 'All Categories', filter sesuai category
    if (selectedCategory !== 'All Categories' && product.category !== selectedCategory) {
      return false;
    }
    // Filter berdasarkan search term (nama produk)
    if (!product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    return true;
  });

  // === 2. Sorting Berdasarkan sortOption ===
  let sortedProducts = [...filteredProducts];
  switch (sortOption) {
    case 'Price: Low to High':
      sortedProducts.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
      break;
    case 'Price: High to Low':
      sortedProducts.sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
      break;
    case 'Best Sellers':
      // Contoh: sort berdasarkan jumlah reviews (semakin banyak reviews, semakin atas)
      sortedProducts.sort((a, b) => b.reviews - a.reviews);
      break;
    default:
      // 'Sort by' atau opsi lain tidak mengubah urutan
      break;
  }

  // === 3. Pagination ===
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = sortedProducts.slice(startIndex, startIndex + productsPerPage);

  // Fungsi untuk menampilkan bintang rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating); // misal rating 4.5 => fullStars = 4
    const hasHalfStar = rating - fullStars >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<IconStarFilled key={`full-${i}`} size={16} className="text-yellow-500" />);
    }
    if (hasHalfStar) {
      // setengah bintang -> sementara gunakan ikon penuh sebagai contoh
      stars.push(<IconStarFilled key="half-star" size={16} className="text-yellow-500" />);
    }

    const totalDisplayedStars = hasHalfStar ? fullStars + 1 : fullStars;
    for (let i = totalDisplayedStars; i < 5; i++) {
      stars.push(<IconStar key={`empty-${i}`} size={16} className="text-yellow-500" />);
    }
    return stars;
  };

  // Handler untuk berpindah halaman
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className='min-md:px-24 mt-20 mb-5 px-10 w-full'>
        <Carousel cards={cards} />
      </div>
      
      <div className="bg-gray-50 h-full md:px-20 px-10 mt-10 pb-10">
        {/* Bagian Atas: Search, Categories, Sort By */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4 pt-10">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // reset ke halaman 1 setelah ganti search
            }}
            className="border border-gray-300 rounded-md p-2 w-full md:w-full focus:outline-none"
          />

          {/* Dropdown All Categories */}
          <select
            className="border border-gray-300 w-full rounded-md p-2 bg-white"
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setCurrentPage(1); // reset ke halaman 1 setelah ganti kategori
            }}
          >
            <option>All Categories</option>
            <option>Laptop</option>
            <option>Computer Accessories</option>
            <option>Web Service</option>
            <option>Computers</option>
            <option>Security</option>
            <option>Gaming</option>
            {/* Tambahkan kategori lain sesuai data */}
          </select>

          {/* Dropdown Sort By */}
          <select
            className="border border-gray-300 rounded-md p-2 w-full bg-white"
            value={sortOption}
            onChange={(e) => {
              setSortOption(e.target.value);
              setCurrentPage(1); // reset ke halaman 1 setelah ganti sort
            }}
          >
            <option>Sort by</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Best Sellers</option>
          </select>
        </div>

        {/* Grid Produk */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
            <NavLink key={product.id} to={`${product.slug}`} className="bg-white rounded-md shadow p-4 flex flex-col">
              {/* Gambar Produk */}
              <div className="bg-gray-200 h-40 mb-4 flex items-center justify-center rounded">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover rounded"
                />
              </div>

              {/* Nama Produk */}
              <h3 className="text-lg font-semibold mb-1">{product.name || 'No Name'}</h3>

              {/* Rating & Reviews */}
              <div className="flex items-center mb-2">
                {renderStars(product.rating)}
                <span className="text-sm text-gray-600 ml-2">
                  ({product.reviews} reviews)
                </span>
              </div>

              {/* Deskripsi */}
              <p className="text-sm text-gray-500 mb-2">{product.description}</p>

              {/* Harga & Tombol */}
              <div className="mt-auto flex items-center justify-between">
                <p className="text-gray-800 font-bold">{product.price}</p>
                <button className="bg-custom text-white px-3 py-1 rounded-md flex items-center gap-1 hover:bg-custom transition-colors">
                  Add to Cart
                  <IconShoppingCart size={18} />
                </button>
              </div>
            </NavLink>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-6">
            <button
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
              disabled={currentPage === 1}
            >
              Previous
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-3 py-1 rounded ${currentPage === i + 1
                    ? 'bg-custom text-white'
                    : 'bg-gray-200 text-gray-800'
                  } hover:bg-custom hover:text-white transition-colors`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductPage;
