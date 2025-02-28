import React, { useState } from 'react';
import { Heart, Award, MessageSquare, CheckCircle, Clock, MapPin, Users, AlertCircle } from 'lucide-react';

export const Volunteer = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  
  // Sample data for demonstration
  const tasks = [
    {
      id: 1,
      title: '核实北京市海淀区失踪信息',
      type: '信息核实',
      location: '北京市海淀区',
      deadline: '2025-06-30',
      difficulty: '中等',
      points: 20,
      status: '可领取'
    },
    {
      id: 2,
      title: '在上海市浦东新区发放寻人启事',
      type: '实地走访',
      location: '上海市浦东新区',
      deadline: '2025-06-15',
      difficulty: '简单',
      points: 15,
      status: '进行中'
    },
    {
      id: 3,
      title: '协助整理广州市天河区失踪人口数据',
      type: '数据整理',
      location: '线上任务',
      deadline: '2025-07-10',
      difficulty: '困难',
      points: 30,
      status: '可领取'
    },
    {
      id: 4,
      title: '在社交媒体上分享寻人信息',
      type: '信息传播',
      location: '线上任务',
      deadline: '2025-06-20',
      difficulty: '简单',
      points: 10,
      status: '可领取'
    },
    {
      id: 5,
      title: '参与成都市武侯区寻人活动',
      type: '实地走访',
      location: '成都市武侯区',
      deadline: '2025-07-05',
      difficulty: '中等',
      points: 25,
      status: '已完成'
    },
    {
      id: 6,
      title: '翻译寻人启事为英文版本',
      type: '翻译工作',
      location: '线上任务',
      deadline: '2025-06-25',
      difficulty: '中等',
      points: 20,
      status: '可领取'
    }
  ];
  
  const forumPosts = [
    {
      id: 1,
      title: '如何更有效地开展寻人工作？',
      author: '志愿者小李',
      date: '2025-06-01',
      replies: 15,
      likes: 32
    },
    {
      id: 2,
      title: '分享我参与寻人的成功经验',
      author: '资深志愿者王华',
      date: '2025-05-28',
      replies: 23,
      likes: 47,
      pinned: true
    },
    {
      id: 3,
      title: '招募：北京地区志愿者协调员',
      author: '管理员',
      date: '2025-06-02',
      replies: 8,
      likes: 12
    },
    {
      id: 4,
      title: '使用AI技术辅助寻人的心得',
      author: '技术志愿者小张',
      date: '2025-05-30',
      replies: 19,
      likes: 35
    }
  ];

  return (
    <div className="bg-[#F7F7F7] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-[#4A90E2] to-[#A3D39C] p-8 md:p-12 text-white">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-bold mb-4">志愿者中心</h1>
              <p className="text-xl mb-6">
                加入我们，一起点亮回家的希望。每一份力量都能帮助更多家庭团聚。
              </p>
              <button 
                onClick={() => setShowRegisterModal(true)}
                className="px-6 py-3 bg-white text-[#4A90E2] rounded-md font-medium hover:bg-gray-100 transition duration-300 flex items-center"
              >
                <Heart size={20} className="mr-2 text-[#F5A623]" />
                注册成为志愿者
              </button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F7F7F7] p-4 rounded-lg text-center">
              <div className="w-12 h-12 bg-[#F5A623]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-[#F5A623]" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-1">5,280+</div>
              <div className="text-gray-600">注册志愿者</div>
            </div>
            
            <div className="bg-[#F7F7F7] p-4 rounded-lg text-center">
              <div className="w-12 h-12 bg-[#4A90E2]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="h-6 w-6 text-[#4A90E2]" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-1">12,450+</div>
              <div className="text-gray-600">已完成任务</div>
            </div>
            
            <div className="bg-[#F7F7F7] p-4 rounded-lg text-center">
              <div className="w-12 h-12 bg-[#A3D39C]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="h-6 w-6 text-[#A3D39C]" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-1">320+</div>
              <div className="text-gray-600">成功团聚案例</div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Task List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-[#4A90E2] py-4 px-6">
                <h2 className="text-xl font-bold text-white">任务列表</h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {tasks.map((task) => (
                    <div key={task.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition duration-300">
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          task.status === '可领取' ? 'bg-green-100 text-green-800' :
                          task.status === '进行中' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {task.status}
                        </span>
                      </div>
                      
                      <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1 text-gray-400" />
                          {task.location}
                        </div>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1 text-gray-400" />
                          截止: {task.deadline}
                        </div>
                        <div className="flex items-center">
                          <AlertCircle size={14} className="mr-1 text-gray-400" />
                          难度: {task.difficulty}
                        </div>
                        <div className="flex items-center">
                          <Award size={14} className="mr-1 text-gray-400" />
                          积分: {task.points}
                        </div>
                      </div>
                      
                      <div className="mt-4 flex justify-end">
                        {task.status === '可领取' ? (
                          <button className="px-4 py-2 bg-[#F5A623] text-white rounded-md hover:bg-[#F5A623]/90 transition duration-300 text-sm">
                            领取任务
                          </button>
                        ) : task.status === '进行中' ? (
                          <button className="px-4 py-2 bg-[#4A90E2] text-white rounded-md hover:bg-[#4A90E2]/90 transition duration-300 text-sm">
                            提交成果
                          </button>
                        ) : (
                          <button className="px-4 py-2 bg-[#A3D39C] text-white rounded-md cursor-default text-sm">
                            已完成
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <button className="px-4 py-2 border border-[#4A90E2] text-[#4A90E2] rounded-md hover:bg-[#4A90E2]/10 transition duration-300">
                    查看更多任务
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            {/* Volunteer Profile */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-[#F5A623] py-4 px-6">
                <h2 className="text-xl font-bold text-white">志愿者档案</h2>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                    alt="Volunteer Avatar" 
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#F5A623]"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">志愿者小王</h3>
                    <p className="text-gray-600">加入时间: 2024-03-15</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-[#F7F7F7] p-3 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">积分</span>
                      <span className="text-[#F5A623] font-bold">350</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-[#F5A623] h-2.5 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1 text-right">
                      距离下一等级还需150积分
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-[#F7F7F7] p-3 rounded-lg">
                      <div className="text-2xl font-bold text-gray-800">12</div>
                      <div className="text-gray-600 text-sm">已完成任务</div>
                    </div>
                    <div className="bg-[#F7F7F7] p-3 rounded-lg">
                      <div className="text-2xl font-bold text-gray-800">3</div>
                      <div className="text-gray-600 text-sm">进行中任务</div>
                    </div>
                  </div>
                  
                  <div className="bg-[#F7F7F7] p-3 rounded-lg">
                    <div className="text-gray-700 font-medium mb-2">获得的徽章</div>
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 bg-[#F5A623] rounded-full flex items-center justify-center" title="信息核实专家">
                        <CheckCircle size={16} className="text-white" />
                      </div>
                      <div className="w-8 h-8 bg-[#4A90E2] rounded-full flex items-center justify-center" title="社区活跃者">
                        <MessageSquare size={16} className="text-white" />
                      </div>
                      <div className="w-8 h-8 bg-[#A3D39C] rounded-full flex items-center justify-center" title="新人志愿者">
                        <Award size={16} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Forum */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-[#4A90E2] py-4 px-6">
                <h2 className="text-xl font-bold text-white">交流论坛</h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {forumPosts.map((post) => (
                    <div key={post.id} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                      <div className="flex items-start">
                        {post.pinned && (
                          <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full mr-2 flex-shrink-0">
                            置顶
                          </span>
                        )}
                        <h3 className="text-base font-medium text-[#4A90E2] hover:text-[#F5A623] transition duration-300 cursor-pointer">
                          {post.title}
                        </h3>
                      </div>
                      
                      <div className="mt-2 flex justify-between items-center text-sm text-gray-600">
                        <div>
                          <span>{post.author}</span>
                          <span className="mx-2">•</span>
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <MessageSquare size={14} className="mr-1" />
                            {post.replies}
                          </span>
                          <span className="flex items-center">
                            <Heart size={14} className="mr-1" />
                            {post.likes}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <button className="px-4 py-2 border border-[#4A90E2] text-[#4A90E2] rounded-md hover:bg-[#4A90E2]/10 transition duration-300">
                    查看更多讨论
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Register Modal */}
      {showRegisterModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">注册成为志愿者</h3>
            <p className="text-gray-600 mb-6">
              感谢您愿意加入"宝贝回家"志愿者团队。请填写以下信息，我们将在审核后与您联系。
            </p>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  姓名
                </label>
                <input 
                  type="text" 
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#4A90E2] focus:border-[#4A90E2]"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  联系电话
                </label>
                <input 
                  type="tel" 
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#4A90E2] focus:border-[#4A90E2]"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  电子邮箱
                </label>
                <input 
                  type="email" 
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#4A90E2] focus:border-[#4A90E2]"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  所在城市
                </label>
                <input 
                  type="text" 
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#4A90E2] focus:border-[#4A90E2]"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  可提供的技能/服务
                </label>
                <select className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#4A90E2] focus:border-[#4A90E2]">
                  <option>请选择</option>
                  <option>信息核实</option>
                  <option>实地走访</option>
                  <option>数据整理</option>
                  <option>信息传播</option>
                  <option>翻译工作</option>
                  <option>技术支持</option>
                  <option>其他</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  自我介绍
                </label>
                <textarea 
                  rows={3}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#4A90E2] focus:border-[#4A90E2]"
                ></textarea>
              </div>
              
              <div className="flex items-start">
                <input 
                  type="checkbox" 
                  className="h-4 w-4 text-[#4A90E2] focus:ring-[#4A90E2] border-gray-300 rounded mt-1"
                  required
                />
                <label className="ml-2 block text-sm text-gray-700">
                  我同意遵守志愿者行为准则，并保证提供的信息真实有效
                </label>
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
                  提交申请
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};