import React from 'react';
import { ShoppingBag, Menu } from 'lucide-react';
import { Link } from 'react-router';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Menu className="h-6 w-6 mr-4 lg:hidden" />
            <Link to="/" className="text-xl font-bold text-gray-800">
              StyleStore
            </Link>
          </div>
          <div className="hidden lg:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link to="/products" className="text-gray-600 hover:text-gray-900">
              Products
            </Link>
          </div>
          <div className="flex items-center">
            <ShoppingBag className="h-6 w-6 text-gray-600" />
            <span className="ml-2 text-sm font-medium text-gray-700">0</span>
          </div>
        </div>
      </div>
    </nav>
  );
}