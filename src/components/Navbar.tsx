import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Upload, Database, Heart, Info, DollarSign, Code, LogIn } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: '首页', path: '/', icon: <Home size={18} /> },
    { name: '上传照片', path: '/upload', icon: <Upload size={18} /> },
    { name: '寻人数据库', path: '/database', icon: <Database size={18} /> },
    { name: '志愿者中心', path: '/volunteer', icon: <Heart size={18} /> },
    { name: '关于我们', path: '/about', icon: <Info size={18} /> },
    { name: '捐款支持', path: '/donate', icon: <DollarSign size={18} /> },
    { name: '开发者社区', path: '/developer', icon: <Code size={18} /> },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Heart className="h-8 w-8 text-[#F5A623]" />
              <span className="ml-2 text-xl font-bold text-gray-800">宝贝回家</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#F5A623] hover:bg-gray-50 rounded-md transition duration-300"
              >
                <span className="mr-1">{item.icon}</span>
                {item.name}
              </Link>
            ))}
            <button className="ml-4 px-4 py-2 rounded-md text-white bg-[#4A90E2] hover:bg-[#F5A623] transition duration-300 flex items-center">
              <LogIn size={18} className="mr-1" />
              登录/注册
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#F5A623] hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-[#F5A623] hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </Link>
            ))}
            <button className="w-full mt-2 px-4 py-2 rounded-md text-white bg-[#4A90E2] hover:bg-[#F5A623] transition duration-300 flex items-center justify-center">
              <LogIn size={18} className="mr-1" />
              登录/注册
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};