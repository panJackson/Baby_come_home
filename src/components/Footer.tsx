import React from 'react';
import { Heart, Mail, Phone, Facebook, Twitter, Instagram, Github as GitHub } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Heart className="h-6 w-6 text-[#F5A623]" />
              <span className="ml-2 text-xl font-bold">宝贝回家</span>
            </div>
            <p className="mt-2 text-sm text-gray-300">
              用科技点亮回家的路，帮助失踪人口与家人团聚。
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#F5A623]">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F5A623]">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F5A623]">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F5A623]">
                <GitHub size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">快速链接</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#F5A623]">首页</Link>
              </li>
              <li>
                <Link to="/upload" className="text-gray-300 hover:text-[#F5A623]">上传照片</Link>
              </li>
              <li>
                <Link to="/database" className="text-gray-300 hover:text-[#F5A623]">寻人数据库</Link>
              </li>
              <li>
                <Link to="/volunteer" className="text-gray-300 hover:text-[#F5A623]">志愿者中心</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">资源</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#F5A623]">关于我们</Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-300 hover:text-[#F5A623]">捐款支持</Link>
              </li>
              <li>
                <Link to="/developer" className="text-gray-300 hover:text-[#F5A623]">开发者社区</Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#F5A623]">隐私政策</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">联系我们</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-[#F5A623]" />
                <span className="text-gray-300">contact@babycomehome.org</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-[#F5A623]" />
                <span className="text-gray-300">+86 123 4567 8910</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} 宝贝回家. 保留所有权利.
          </p>
        </div>
      </div>
    </footer>
  );
};