import React, { useState } from 'react';
import { Search, Filter, Upload as UploadIcon, ChevronLeft, ChevronRight, Phone, MapPin, Calendar, Info } from 'lucide-react';

export const Database = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  
  // Sample data for demonstration
  const missingPersons = [
    {
      id: 1,
      name: '张小明',
      age: 8,
      currentAge: 13,
      gender: '男',
      missingDate: '2018-05-12',
      location: '北京市海淀区',
      description: '失踪时身穿蓝色T恤和牛仔裤，身高约120cm。',
      contact: '13800138000',
      childImage: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      simulatedImage: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
      id: 2,
      name: '李小红',
      age: 5,
      currentAge: 15,
      gender: '女',
      missingDate: '2013-09-23',
      location: '上海市浦东新区',
      description: '失踪时身穿粉色连衣裙，扎着两个小辫子。',
      contact: '13900139000',
      childImage: 'https://images.unsplash.com/photo-1516942164887-6c0c47c2ee50?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      simulatedImage: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
      id: 3,
      name: '王小军',
      age: 10,
      currentAge: 20,
      gender: '男',
      missingDate: '2015-11-05',
      location: '广州市天河区',
      description: '失踪时身穿校服，戴眼镜，身高约140cm。',
      contact: '13700137000',
      childImage: 'https://images.unsplash.com/photo-1555009393-f20bdb245c4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      simulatedImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
      id: 4,
      name: '赵小华',
      age: 7,
      currentAge: 12,
      gender: '女',
      missingDate: '2020-03-18',
      location: '成都市武侯区',
      description: '失踪时身穿黄色外套和黑色裤子，留短发。',
      contact: '13600136000',
      childImage: 'https://images.unsplash.com/photo-1588534510807-e8c4a7fa0992?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      simulatedImage: 'https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
      id: 5,
      name: '刘小伟',
      age: 9,
      currentAge: 19,
      gender: '男',
      missingDate: '2015-07-30',
      location: '深圳市南山区',
      description: '失踪时身穿绿色T恤和短裤，有一颗虎牙。',
      contact: '13500135000',
      childImage: 'https://images.unsplash.com/photo-1588599376442-3cbf9c67449e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      simulatedImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
      id: 6,
      name: '陈小玲',
      age: 6,
      currentAge: 16,
      gender: '女',
      missingDate: '2014-12-10',
      location: '武汉市洪山区',
      description: '失踪时身穿红色羽绒服，扎马尾辫。',
      contact: '13400134000',
      childImage: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      simulatedImage: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    }
  ];

  const filteredPersons = missingPersons.filter(person => 
    person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#F7F7F7] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-[#4A90E2] py-6 px-6">
            <h1 className="text-2xl font-bold text-white">寻人数据库</h1>
            <p className="text-white/90 mt-1">
              浏览失踪人口信息，或上传照片进行匹配
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="搜索姓名、地点或其他关键词..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-[#4A90E2] focus:border-[#4A90E2]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2">
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition duration-300 flex items-center"
                >
                  <Filter size={18} className="mr-2" />
                  高级筛选
                </button>
                
                <button 
                  onClick={() => setShowUploadModal(true)}
                  className="px-4 py-2 bg-[#F5A623] text-white rounded-md hover:bg-[#F5A623]/90 transition duration-300 flex items-center"
                >
                  <UploadIcon size={18} className="mr-2" />
                  上传图片匹配
                </button>
              </div>
            </div>
            
            {showFilters && (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    年龄段
                  </label>
                  <select className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-[#4A90E2] focus:border-[#4A90E2] rounded-md">
                    <option>所有年龄</option>
                    <option>0-5岁</option>
                    <option>6-10岁</option>
                    <option>11-15岁</option>
                    <option>16-20岁</option>
                    <option>20岁以上</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    性别
                  </label>
                  <select className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-[#4A90E2] focus:border-[#4A90E2] rounded-md">
                    <option>全部</option>
                    <option>男</option>
                    <option>女</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    失踪时间
                  </label>
                  <select className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-[#4A90E2] focus:border-[#4A90E2] rounded-md">
                    <option>全部时间</option>
                    <option>最近1年</option>
                    <option>1-5年</option>
                    <option>5-10年</option>
                    <option>10年以上</option>
                  </select>
                </div>
              </div>
            )}
          </div>
          
          {/* Missing Persons List */}
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                失踪人口信息 ({filteredPersons.length})
              </h2>
              
              <button 
                onClick={() => setShowRegisterModal(true)}
                className="px-4 py-2 bg-[#4A90E2] text-white rounded-md hover:bg-[#4A90E2]/90 transition duration-300"
              >
                登记失踪人口信息
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPersons.map((person) => (
                <div key={person.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition duration-300">
                  <div className="flex h-48">
                    <div className="w-1/2 relative">
                      <img 
                        src={person.childImage} 
                        alt={`${person.name} as child`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-xs p-1">
                        失踪时 ({person.age}岁)
                      </div>
                    </div>
                    <div className="w-1/2 relative">
                      <img 
                        src={person.simulatedImage} 
                        alt={`${person.name} simulated`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-xs p-1">
                        模拟现在 ({person.currentAge}岁)
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">{person.name}</h3>
                      <span className="px-2 py-1 bg-[#F5A623]/10 text-[#F5A623] text-xs rounded-full">
                        {person.gender}
                      </span>
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2 text-gray-400" />
                        失踪时间: {person.missingDate}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2 text-gray-400" />
                        失踪地点: {person.location}
                      </div>
                      <div className="flex items-center">
                        <Phone size={16} className="mr-2 text-gray-400" />
                        联系方式: {person.contact}
                      </div>
                    </div>
                    
                    <button className="mt-4 w-full px-4 py-2 bg-[#4A90E2] text-white rounded-md hover:bg-[#4A90E2]/90 transition duration-300 flex items-center justify-center">
                      <Info size={16} className="mr-2" />
                      查看详情
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="mt-8 flex justify-between items-center">
              <div className="text-sm text-gray-600">
                显示 1-{filteredPersons.length} 条，共 {filteredPersons.length} 条
              </div>
              
              <div className="flex space-x-2">
                <button className="p-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition duration-300">
                  <ChevronLeft size={18} />
                </button>
                <button className="px-3 py-1 bg-[#4A90E2] text-white rounded-md">
                  1
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition duration-300">
                  2
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition duration-300">
                  3
                </button>
                <button className="p-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition duration-300">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">上传图片匹配</h3>
            <p className="text-gray-600 mb-4">
              上传照片，我们将使用AI技术在数据库中查找相似的面孔。
            </p>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#4A90E2] transition duration-300 mb-6">
              <div className="mx-auto w-12 h-12 bg-[#4A90E2]/10 rounded-full flex items-center justify-center mb-4">
                <UploadIcon className="h-6 w-6 text-[#4A90E2]" />
              </div>
              <p className="text-gray-700 mb-2">拖拽照片到此处，或</p>
              <label className="inline-block px-4 py-2 bg-[#4A90E2] text-white rounded-md cursor-pointer hover:bg-[#4A90E2]/90 transition duration-300">
                选择文件
                <input 
                  type="file" 
                  className="hidden" 
                  accept="image/*"
                />
              </label>
            </div>
            
            <div className="flex justify-end space-x-4">
              <button 
                onClick={() => setShowUploadModal(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition duration-300"
              >
                取消
              </button>
              <button className="px-4 py-2 bg-[#F5A623] text-white rounded-md hover:bg-[#F5A623]/90 transition duration-300">
                开始匹配
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Register Modal */}
      {showRegisterModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-4">登记失踪人口信息</h3>
            <p className="text-gray-600 mb-6">
              请填写以下信息，我们将在审核后将其添加到数据库中。带 * 的为必填项。
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    姓名 *
                  </label>
                  <input 
                    type="text" 
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#4A90E2] focus:border-[#4A90E2]"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    性别 *
                  </label>
                  <select className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#4A90E2] focus:border-[#4A90E2]">
                    <option>请选择</option>
                    <option>男</option>
                    <option>女</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    失踪时年龄 *
                  </label>
                  <input 
                    type="number" 
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#4A90E2] focus:border-[#4A90E2]"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    失踪日期 *
                  </label>
                  <input 
                    type="date" 
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#4A90E2] focus:border-[#4A90E2]"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    失踪地点 *
                  </label>
                  <input 
                    type="text" 
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#4A90E2] focus:border-[#4A90E2]"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    联系电话 *
                  </label>
                  <input 
                    type="tel" 
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#4A90E2] focus:border-[#4A90E2]"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  失踪时外貌特征描述 *
                </label>
                <textarea 
                  rows={3}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#4A90E2] focus:border-[#4A90E2]"
                  required
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  上传照片（失踪时）
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-[#4A90E2] transition duration-300">
                  <div className="mx-auto w-10 h-10 bg-[#4A90E2]/10 rounded-full flex items-center justify-center mb-2">
                    <UploadIcon className="h-5 w-5 text-[#4A90E2]" />
                  </div>
                  <p className="text-sm text-gray-700 mb-1">拖拽照片到此处，或</p>
                  <label className="inline-block px-3 py-1 bg-[#4A90E2] text-white text-sm rounded-md cursor-pointer hover:bg-[#4A90E2]/90 transition duration-300">
                    选择文件
                    <input 
                      type="file" 
                      className="hidden" 
                      accept="image/*"
                    />
                  </label>
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 flex items-start">
                <AlertCircle className="text-yellow-500 mr-3 flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="text-yellow-800 font-medium">重要提示</h4>
                  <p className="text-yellow-700 text-sm mt-1">
                    提交的信息将经过审核，请确保信息真实准确。如有虚假信息，将承担相应法律责任。
                  </p>
                </div>
              </div>
              
              <div className="flex justify-end space-x-4">
                <button 
                  type="button"
                  onClick={() => setShowRegisterModal(false)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition duration-300"
                >
                  取消
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 bg-[#F5A623] text-white rounded-md hover:bg-[#F5A623]/90 transition duration-300"
                >
                  提交信息
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};