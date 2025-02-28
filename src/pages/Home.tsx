import React from 'react';
import { Link } from 'react-router-dom';
import { Upload, Database, Heart, ArrowRight, ArrowLeft, ArrowRight as ArrowRightIcon } from 'lucide-react';

export const Home = () => {
  const successCases = [
    {
      id: 1,
      title: '小明与家人团聚',
      description: '失踪5年后，通过AI年龄增长模拟技术，小明成功与家人团聚。',
      image: 'https://images.unsplash.com/photo-1513279922550-250c2129b13a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
      id: 2,
      title: '张阿姨找到失散多年的女儿',
      description: '张阿姨的女儿在12岁时走失，15年后通过我们的平台找到了彼此。',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
      id: 3,
      title: '李伯伯与孙子重逢',
      description: '李伯伯的孙子在4岁时走失，通过AI模拟长大后的样子，成功在另一个城市找到了他。',
      image: 'https://images.unsplash.com/photo-1529271856964-0740337757a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    }
  ];

  return (
    <div className="bg-[#F7F7F7]">
      {/* Hero Section */}
      <section className="relative">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-[#F5A623]/90 to-[#F5A623]/70"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1536337005238-94b997371b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              用科技点亮回家的路
            </h1>
            <p className="text-xl text-white mb-8">
              "宝贝回家"利用AI大模型技术，帮助失踪人口与家人团聚。我们通过跨年龄人脸生成与匹配，为寻亲之路提供新的希望。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/upload" 
                className="px-6 py-3 bg-white text-[#F5A623] rounded-md font-medium hover:bg-gray-100 transition duration-300 flex items-center transform hover:scale-105"
              >
                <Upload size={20} className="mr-2" />
                上传照片，生成模拟图像
              </Link>
              <Link 
                to="/database" 
                className="px-6 py-3 bg-[#4A90E2] text-white rounded-md font-medium hover:bg-[#4A90E2]/90 transition duration-300 flex items-center transform hover:scale-105"
              >
                <Database size={20} className="mr-2" />
                浏览失踪人口信息
              </Link>
              <Link 
                to="/volunteer" 
                className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-md font-medium hover:bg-white/10 transition duration-300 flex items-center transform hover:scale-105"
              >
                <Heart size={20} className="mr-2" />
                成为志愿者
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">关于"宝贝回家"</h2>
            <div className="w-20 h-1 bg-[#F5A623] mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg">
              "宝贝回家"是一个致力于帮助失踪人口与家人团聚的公益项目。我们利用先进的AI技术，
              通过跨年龄人脸生成与匹配，为寻亲提供新的可能性。无论失踪多久，我们都不放弃希望。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F7F7F7] p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <div className="w-12 h-12 bg-[#F5A623]/20 rounded-full flex items-center justify-center mb-4">
                <Upload className="h-6 w-6 text-[#F5A623]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">AI跨年龄人脸生成</h3>
              <p className="text-gray-600">
                上传照片，我们的AI模型可以模拟不同年龄段的面貌，帮助弥合失踪时间与现在的差距。
              </p>
            </div>
            
            <div className="bg-[#F7F7F7] p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <div className="w-12 h-12 bg-[#4A90E2]/20 rounded-full flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-[#4A90E2]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">全国寻人数据库</h3>
              <p className="text-gray-600">
                我们维护着全国最大的失踪人口数据库之一，支持多维度搜索和AI人脸匹配功能。
              </p>
            </div>
            
            <div className="bg-[#F7F7F7] p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <div className="w-12 h-12 bg-[#A3D39C]/20 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-[#A3D39C]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">志愿者网络</h3>
              <p className="text-gray-600">
                全国各地的志愿者组成强大网络，协助核实信息、实地走访和宣传寻人信息。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Cases */}
      <section className="py-16 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">成功案例</h2>
            <div className="w-20 h-1 bg-[#F5A623] mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg">
              每一次团聚都是希望的见证。以下是通过我们平台成功团聚的真实案例（已获得当事人同意并进行匿名化处理）。
            </p>
          </div>
          
          <div className="relative">
            <div className="flex overflow-x-auto pb-8 space-x-6 hide-scrollbar">
              {successCases.map((item) => (
                <div key={item.id} className="min-w-[300px] max-w-sm bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <Link 
                      to="#" 
                      className="text-[#F5A623] font-medium hover:text-[#F5A623]/80 flex items-center"
                    >
                      了解更多
                      <ArrowRightIcon size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 hidden md:block">
              <button className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition duration-300">
                <ArrowLeft size={20} className="text-gray-600" />
              </button>
            </div>
            
            <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 hidden md:block">
              <button className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition duration-300">
                <ArrowRight size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/database" 
              className="inline-flex items-center px-6 py-3 bg-[#4A90E2] text-white rounded-md font-medium hover:bg-[#4A90E2]/90 transition duration-300"
            >
              查看更多案例
              <ArrowRightIcon size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#4A90E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">加入我们，共同点亮回家的希望</h2>
          <p className="max-w-3xl mx-auto text-white/90 text-lg mb-8">
            无论是上传照片寻找亲人，贡献您的技术专长，还是成为志愿者，每一份力量都能帮助更多家庭团聚。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/upload" 
              className="px-6 py-3 bg-white text-[#4A90E2] rounded-md font-medium hover:bg-gray-100 transition duration-300"
            >
              开始寻亲
            </Link>
            <Link 
              to="/volunteer" 
              className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-md font-medium hover:bg-white/10 transition duration-300"
            >
              成为志愿者
            </Link>
            <Link 
              to="/donate" 
              className="px-6 py-3 bg-[#F5A623] text-white rounded-md font-medium hover:bg-[#F5A623]/90 transition duration-300"
            >
              捐款支持
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};