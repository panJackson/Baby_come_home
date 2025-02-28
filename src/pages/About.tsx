import React from 'react';
import { Users, Code, Award, Heart, ExternalLink, Mail, Phone, MapPin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About = () => {
  const teamMembers = [
    {
      name: '张教授',
      role: '项目负责人',
      bio: '人工智能领域专家，致力于将AI技术应用于社会公益事业。',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      name: '李博士',
      role: '技术总监',
      bio: '计算机视觉专家，负责AI模型的研发与优化。',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      name: '王工程师',
      role: '全栈开发',
      bio: '资深软件工程师，负责平台的设计与开发。',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      name: '陈设计师',
      role: 'UI/UX设计',
      bio: '用户体验专家，致力于创造简洁易用的界面。',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ];
  
  const partners = [
    {
      name: '"团圆"系统',
      description: '公安部儿童失踪信息紧急发布平台',
      logo: 'https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: '宝贝回家寻子网',
      description: '国内知名的寻亲公益组织',
      logo: 'https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: '人工智能研究院',
      description: '提供技术支持与研发合作',
      logo: 'https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: '志愿者联盟',
      description: '全国性志愿者组织网络',
      logo: 'https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="bg-[#F7F7F7] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-[#4A90E2] to-[#4A90E2]/70 p-8 md:p-12 text-white">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-bold mb-4">关于我们</h1>
              <p className="text-xl mb-6">
                "宝贝回家"是一个致力于帮助失踪人口与家人团聚的公益项目。我们利用先进的AI技术，
                通过跨年龄人脸生成与匹配，为寻亲提供新的可能性。
              </p>
            </div>
          </div>
        </div>
        
        {/* Project Background */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-[#F5A623] mr-2" />
              <h2 className="text-2xl font-bold text-gray-800">项目背景</h2>
            </div>
            
            <div className="border-l-4 border-[#F5A623] pl-4 mb-6">
              <p className="text-gray-600 italic">
                "每一个失踪的人，都是一个家庭的希望。我们希望用科技的力量，点亮回家的路。"
              </p>
            </div>
            
            <div className="prose max-w-none text-gray-600">
              <p className="mb-4">
                在中国，每年有大量儿童和成人失踪。根据公安部数据，仅2023年就有超过2万起失踪报告。
                这些失踪人口中，有相当一部分是长期未能找到的，给家庭带来巨大痛苦。
              </p>
              
              <p className="mb-4">
                传统的寻人方式主要依靠发布照片和信息，但对于失踪多年的案例，这种方法效果有限，
                因为人的外貌会随着年龄增长而发生显著变化，特别是儿童。
              </p>
              
              <p className="mb-6">
                "宝贝回家"项目应运而生，我们利用AI大模型技术，实现跨年龄人脸生成与匹配，
                帮助弥合失踪时间与现在的差距，为寻亲工作提供新的技术手段和希望。
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-[#F7F7F7] p-4 rounded-lg">
                <div className="w-12 h-12 bg-[#F5A623]/20 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#F5A623]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">使命</h3>
                <p className="text-gray-600">
                  运用科技力量，帮助失踪人口与家人团聚，让每个家庭重获完整。
                </p>
              </div>
              
              <div className="bg-[#F7F7F7] p-4 rounded-lg">
                <div className="w-12 h-12 bg-[#4A90E2]/20 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-[#4A90E2]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">愿景</h3>
                <p className="text-gray-600">
                  成为中国领先的寻人公益平台，让AI技术真正服务于社会公益事业。
                </p>
              </div>
              
              <div className="bg-[#F7F7F7] p-4 rounded-lg">
                <div className="w-12 h-12 bg-[#A3D39C]/20 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-[#A3D39C]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">价值观</h3>
                <p className="text-gray-600">
                  科技向善、开放透明、尊重隐私、合作共赢。
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Technology */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <Code className="h-6 w-6 text-[#4A90E2] mr-2" />
              <h2 className="text-2xl font-bold text-gray-800">技术优势</h2>
            </div>
            
            <div className="prose max-w-none text-gray-600 mb-6">
              <p className="mb-6">
                "宝贝回家"项目基于最先进的AI技术，为寻人工作提供了全新的解决方案：
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">跨年龄人脸生成</h3>
                <p className="text-gray-600 mb-4">
                  基于StyleGAN2-ADA的深度学习模型，能够根据照片模拟不同年龄段的面貌特征，
                  帮助弥合失踪时间与现在的差距。
                </p>
                <div className="flex items-center text-sm text-[#4A90E2]">
                  <span className="px-2 py-1 bg-[#4A90E2]/10 rounded-full">深度学习</span>
                  <span className="px-2 py-1 bg-[#4A90E2]/10 rounded-full ml-2">GAN</span>
                  <span className="px-2 py-1 bg-[#4A90E2]/10 rounded-full ml-2">计算机视觉</span>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">人脸匹配引擎</h3>
                <p className="text-gray-600 mb-4">
                  高效的跨年龄人脸匹配算法，能够比较不同年龄段的人脸图像，
                  识别潜在的匹配对象，大幅提高寻人效率。
                </p>
                <div className="flex items-center text-sm text-[#4A90E2]">
                  <span className="px-2 py-1 bg-[#4A90E2]/10 rounded-full">人脸识别</span>
                  <span className="px-2 py-1 bg-[#4A90E2]/10 rounded-full ml-2">特征提取</span>
                  <span className="px-2 py-1 bg-[#4A90E2]/10 rounded-full ml-2">相似度计算</span>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">全国寻人数据库</h3>
                <p className="text-gray-600 mb-4">
                  维护全面的失踪人口信息数据库，支持多维度搜索和AI匹配，
                  与公安部"团圆"系统等平台对接，形成强大的信息网络。
                </p>
                <div className="flex items-center text-sm text-[#4A90E2]">
                  <span className="px-2 py-1 bg-[#4A90E2]/10 rounded-full">大数据</span>
                  <span className="px-2 py-1 bg-[#4A90E2]/10 rounded-full ml-2">信息整合</span>
                  <span className="px-2 py-1 bg-[#4A90E2]/10 rounded-full ml-2">数据安全</span>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">开源技术框架</h3>
                <p className="text-gray-600 mb-4">
                  项目采用开源模式开发，鼓励社区贡献，不断优化算法和功能，
                  同时确保数据安全和隐私保护。
                </p>
                <div className="flex items-center text-sm text-[#4A90E2]">
                  <span className="px-2 py-1 bg-[#4A90E2]/10 rounded-full">开源协作</span>
                  <span className="px-2 py-1 bg-[#4A90E2]/10 rounded-full ml-2">社区驱动</span>
                  <span className="px-2 py-1 bg-[#4A90E2]/10 rounded-full ml-2">持续优化</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                to="/developer" 
                className="inline-flex items-center px-6 py-3 bg-[#4A90E2] text-white rounded-md font-medium hover:bg-[#4A90E2]/90 transition duration-300"
              >
                了解技术细节
                <ExternalLink size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Team */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-[#F5A623] mr-2" />
              <h2 className="text-2xl font-bold text-gray-800">团队介绍</h2>
            </div>
            
            <div className="prose max-w-none text-gray-600 mb-6">
              <p>
                "宝贝回家"由一群热爱科技、关注公益的专业人士组成，团队成员来自人工智能、
                软件开发、用户体验设计等不同领域，致力于将各自的专业知识用于解决社会问题。
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-[#F7F7F7] rounded-lg overflow-hidden hover:shadow-md transition duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                    <p className="text-[#4A90E2] mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-[#F7F7F7] p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">志愿者团队</h3>
              <p className="text-gray-600">
                除了核心团队，我们还有超过5,000名志愿者分布在全国各地，他们是"宝贝回家"项目的重要力量。
                志愿者们负责信息核实、实地走访、宣传推广等工作，为项目的顺利开展提供了坚实支持。
              </p>
              <div className="mt-4">
                <Link 
                  to="/volunteer" 
                  className="text-[#F5A623] hover:text-[#F5A623]/80 font-medium flex items-center"
                >
                  了解如何成为志愿者
                  <ExternalLink size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Partners */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <Award className="h-6 w-6 text-[#4A90E2] mr-2" />
              <h2 className="text-2xl font-bold text-gray-800">合作伙伴</h2>
            </div>
            
            <div className="prose max-w-none text-gray-600 mb-6">
              <p>
                "宝贝回家"与多家机构和组织建立了合作关系，共同推进寻人工作的开展：
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {partners.map((partner, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition duration-300 flex flex-col items-center">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="w-16 h-16 object-contain mb-4 grayscale hover:grayscale-0 transition duration-300"
                  />
                  <h3 className="text-lg font-semibold text-gray-800 text-center">{partner.name}</h3>
                  <p className="text-gray-600 text-sm text-center">{partner.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 border border-[#4A90E2] text-[#4A90E2] rounded-md font-medium hover:bg-[#4A90E2]/10 transition duration-300"
              >
                成为合作伙伴
                <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Contact */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <Mail className="h-6 w-6 text-[#F5A623] mr-2" />
              <h2 className="text-2xl font-bold text-gray-800">联系我们</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="prose max-w-none text-gray-600 mb-6">
                  <p>
                    如果您有任何问题、建议或合作意向，欢迎通过以下方式联系我们：
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-[#4A90E2] mr-3" />
                    <span className="text-gray-600">contact@babycomehome.org</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-[#4A90E2] mr-3" />
                    <span className="text-gray-600">+86 123 4567 8910</span>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-[#4A90E2] mr-3 mt-1" />
                    <span className="text-gray-600">
                      北京市海淀区中关村科技园<br />
                      创新大厦B座 5层 501室
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <Github className="h-5 w-5 text-[#4A90E2] mr-3" />
                    <a href="#" className="text-[#4A90E2] hover:underline">
                      github.com/babycomehome
                    </a>
                  </div>
                </div>
                
                <div className="mt-6 flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-[#F5A623]">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#F5A623]">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#F5A623]">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      您的姓名
                    </label>
                    <input 
                      type="text" 
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#4A90E2] focus:border-[#4A90E2]"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      电子邮箱
                    </label>
                    <input 
                      type="email" 
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#4A90E2] focus:border-[#4A90E2]"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      主题
                    </label>
                    <select className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#4A90E2] focus:border-[#4A90E2]">
                      <option>请选择</option>
                      <option>寻人咨询</option>
                      <option>技术合作</option>
                      <option>志愿者咨询</option>
                      <option>媒体合作</option>
                      <option>其他问题</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      留言内容
                    </label>
                    <textarea 
                      rows={4}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#4A90E2] focus:border-[#4A90E2]"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full px-4 py-2 bg-[#F5A623] text-white rounded-md hover:bg-[#F5A623]/90 transition duration-300"
                  >
                    发送留言
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};