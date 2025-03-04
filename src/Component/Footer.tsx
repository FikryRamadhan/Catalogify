import React from 'react';
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandGithub,
  IconUser,
} from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-custom text-white py-8 px-4">
      {/* Container Utama dengan Grid Responsif */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 min-md:px-20 px-10">
        
        {/* 1. StoreName */}
        <div>
          <h3 className="text-xl font-bold">Catalogify</h3>
          <p className="mt-2 text-sm text-gray-100">
            Your one-stop shop for all your needs
          </p>
        </div>

        {/* 2. Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li>
              <NavLink to={"/app"} className="hover:underline">
                 Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"app/products"} className="hover:underline">
                Product
              </NavLink>
            </li>
            <li>
              <NavLink to={"app/about"} className="hover:underline">
                About Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* 3. Customer Service */}
        <div>
          <h4 className="font-semibold text-lg mb-2">Customer Service</h4>
          <ul className="space-y-1">
            <li>
              <NavLink to={"/app"} className="hover:underline">
                Shipping Info
              </NavLink>
            </li>
            <li>
              <NavLink to={"/app"} className="hover:underline">
                Returns
              </NavLink>
            </li>
            <li>
              <NavLink to={"/app"} className="hover:underline">
                Order Status
              </NavLink>
            </li>
          </ul>
        </div>

        {/* 4. Newsletter */}
        <div>
          <h4 className="font-semibold text-lg mb-2">Newsletter</h4>
          <p className="text-sm text-gray-100">
            Stay updated with our latest news
          </p>
          <div className="mt-2 flex">
            <input
              type="email"
              placeholder="Your email"
              className="rounded-l-md p-2 text-white focus:outline-none w-full"
            />
            <button className="bg-gray-900 text-white rounded-r-md px-4 py-2 transition-colors">
              Subscribe
            </button>
          </div>
          
          {/* Social Media Icons */}
          <div className="mt-4 flex space-x-3 text-gray-100">
            <a href="https://github.com/FikryRamadhan" className="hover:text-white transition-colors">
              <IconBrandGithub size={20} />
            </a>
            <a href="https://fikryrdev.vercel.app" className="hover:text-white transition-colors">
              <IconUser size={20} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <IconBrandInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © 2025 Catalogify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
