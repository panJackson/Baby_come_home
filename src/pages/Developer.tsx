import React, { useState } from 'react';
import { Code, Github, ExternalLink, BookOpen, MessageSquare, Users, Star, GitBranch, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Developer = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const apiEndpoints = [
    {
      name: 'POST /api/face/generate',
      description: '根据上传的照片生成不同年龄段的模拟图像',
      parameters: [
        { name: 'image', type: 'File', required: true, description: '人脸照片（JPG/PNG格式）' },
        { name: 'targetAge', type: 'Number', required: true, description: '目标年龄（5-60岁）' },
        { name: 'preserveFeatures', type: 'Boolean', required: false, description: '是否保留关键面部特征（默认：true）' }
      ],
      response: '返回生成的图像URL和相关元数据'
    },
    {
      name: 'POST /api/face/match',
      description: '将上传的照片与数据库中的记录进行匹配',
      parameters: [
        { name: 'image', type: 'File', required: true, description: '人脸照片（JPG/PNG格式）' },
        { name: 'ageRange', type: 'Object', required: false, description: '年龄范围筛选（min, max）' },
        { name: 'gender', type: 'String', required: false, description: '性别筛选（male/female）' },
        { name: 'limit', type: 'Number', required: false, description: '返回结果数量限制（默认：10）' }
      ],
      response: '返回匹配度排序的记录列表'
    },
    {
      name: 'GET /api/missing/list',
      description: '获取失踪人口记录列表',
      parameters: [
        { name: 'page', type: 'Number', required: false, description: '分页页码（默认：1）' },
        { name: 'pageSize', type: 'Number', required: false, description: '每页记录数（默认：20）' },
        { name: 'filters', type: 'Object', required: false, description: '筛选条件（年龄、性别、地区等）' }
      ],
      response: '返回分页的失踪人口记录'
    }
  ];
  
  const forumPosts = [
    {
      id: 1,
      title: '如何优化跨年龄人脸识别的准确率？',
      author: '技术开发者小李',
      date: '2025-06-01',
      replies: 12,
      likes: 28
    },
    {
      id: 2,
      title: '分享：我们如何将模型部署到边缘设备',
      author: '资深工程师王华',
      date: '2025-05-28',
      replies: 18,
      likes: 35,
      pinned: true
    },
    {
      id: 3,
      title: '招募：寻找熟悉StyleGAN2-ADA的开发者',
      author: '项目负责人',
      date: '2025-06-02',
      replies: 5,
      likes: 10
    },
    {
      id: 4,
      title: '讨论：如何处理低质量照片的挑战',
      author: '计算机视觉专家小张',
      date: '2025-05-30',
      replies: 22,
      likes: 40
    }
  ];

  return (
    <div className="bg-[#F7F7F7] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-[#4A90E2] to-[#4A90E2]/70 p-8 md:p-12 text-white">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-bold mb-4">开发者社区</h1>
              <p className="text-xl mb-6">
                加入我们的开源项目，用技术的力量帮助失踪人口与家人团聚。我们欢迎各类技术贡献，共同改进AI模型和平台功能。
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#" 
                  className="px-6 py-3 bg-white text-[#4A90E2] rounded-md font-medium hover:bg-gray-100 transition duration-300 flex items-center"
                >
                  <Github size={20} className="mr-2" />
                  GitHub 仓库
                </a>
                <a 
                  href="#" 
                  className="px-6 py-3 bg-[#F5A623] text-white rounded-md font-medium hover:bg-[#F5A623]/90 transition duration-300 flex items-center"
                >
                  <BookOpen size={20} className="mr-2" />
                  开发文档
                </a>
              </div>
            </div>
          </div>
          
          {/* Project Stats */}
          <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-gray-200">
            <div className="text-center">
              <div className="flex items-center justify-center">
                <Star className="h-5 w-5 text-[#F5A623] mr-1" />
                <span className="text-2xl font-bold text-gray-800">1.2k</span>
              </div>
              <div className="text-gray-600 text-sm">GitHub Stars</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center">
                <GitBranch className="h-5 w-5 text-[#4A90E2] mr-1" />
                <span className="text-2xl font-bold text-gray-800">350+</span>
              </div>
              <div className="text-gray-600 text-sm">Forks</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center">
                <Users className="h-5 w-5 text-[#A3D39C] mr-1" />
                <span className="text-2xl font-bold text-gray-800">120+</span>
              </div>
              <div className="text-gray-600 text-sm">贡献者</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center">
                <Code className="h-5 w-5 text-[#F5A623] mr-1" />
                <span className="text-2xl font-bold text-gray-800">85%</span>
              </div>
              <div className="text-gray-600 text-sm">代码覆盖率</div>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                  activeTab === 'overview'
                    ? 'border-[#4A90E2] text-[#4A90E2]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } transition duration-300`}
              >
                项目概览
              </button>
              <button
                onClick={() => setActiveTab('api')}
                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                  activeTab === 'api'
                    ? 'border-[#4A90E2] text-[#4A90E2]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } transition duration-300`}
              >
                API 文档
              </button>
              <button
                onClick={() => setActiveTab('contribute')}
                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                  activeTab === 'contribute'
                    ? 'border-[#4A90E2] text-[#4A90E2]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } transition duration-300`}
              >
                贡献指南
              </button>
              <button
                onClick={() => setActiveTab('forum')}
                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                  activeTab === 'forum'
                    ? 'border-[#4A90E2] text-[#4A90E2]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } transition duration-300`}
              >
                开发者论坛
              </button>
            </nav>
          </div>
          
          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">项目概览</h2>
                
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-4">
                    "宝贝回家"是一个开源的公益项目，旨在利用AI技术帮助失踪人口与家人团聚。项目主要包含以下几个核心组件：
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-[#F7F7F7] p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">跨年龄人脸生成模型</h3>
                      <p className="text-gray-600 mb-3">
                        基于StyleGAN2-ADA的深度学习模型，能够根据照片模拟不同年龄段的面貌特征。
                      </p>
                      <div className="flex items-center text-[#4A90E2]">
                        <Code size={16} className="mr-1" />
                        <span className="text-sm">Python, PyTorch, CUDA</span>
                      </div>
                    </div>
                    
                    <div className="bg-[#F7F7F7] p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">人脸匹配引擎</h3>
                      <p className="text-gray-600 mb-3">
                        高效的跨年龄人脸匹配算法，能够比较不同年龄段的人脸图像，识别潜在的匹配对象。
                      </p>
                      <div className="flex items-center text-[#4A90E2]">
                        <Code size={16} className="mr-1" />
                        <span className="text-sm">Python, TensorFlow, OpenCV</span>
                      </div>
                    </div>
                    
                    <div className="bg-[#F7F7F7] p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Web 平台</h3>
                      <p className="text-gray-600 mb-3">
                        用户友好的网站界面，支持照片上传、生成和匹配功能，以及失踪人口信息管理。
                      </p>
                      <div className="flex items-center text-[#4A90E2]">
                        <Code size={16} className="mr-1" />
                        <span className="text-sm">React, TypeScript, Tailwind CSS</span>
                      </div>
                    </div>
                    
                    <div className="bg-[#F7F7F7] p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">后端 API</h3>
                      <p className="text-gray-600 mb-3">
                        RESTful API 服务，处理图像上传、模型调用和数据库操作。
                      </p>
                      <div className="flex items-center text-[#4A90E2]">
                        <Code size={16} className="mr-1" />
                        <span className="text-sm">Node.js, Express, PostgreSQL</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">技术架构</h3>
                  
                  <div className="bg-[#F7F7F7] p-4 rounded-lg mb-6">
                    <pre className="text-sm text-gray-700 overflow-x-auto">
                      <code>
{`Frontend (React) <--> API Gateway <--> Services:
  |
  ├── Auth Service (JWT)
  ├── Face Generation Service (StyleGAN2-ADA)
  ├── Face Matching Service (CNN)
  └── Database Service (PostgreSQL)
      |
      ├── Users
      ├── Missing Persons
      ├── Generated Images
      └── Match Results`}
                      </code>
                    </pre>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">开源协议</h3>
                  <p className="text-gray-600 mb-6">
                    本项目采用 MIT 许可证开源，欢迎个人和组织在遵循协议的前提下自由使用和贡献代码。
                  </p>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-md p-4 flex items-start">
                    <AlertCircle className="text-blue-500 mr-3 flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <h4 className="text-blue-800 font-medium">重要提示</h4>
                      <p className="text-blue-700 text-sm mt-1">
                        虽然代码是开源的，但请注意：
                        <ul className="list-disc list-inside mt-1 space-y-1">
                          <li>项目中的人脸数据受到严格保护，不包含在开源代码中</li>
                          <li>使用本项目进行二次开发时，请确保遵守相关隐私法规</li>
                          <li>商业用途请先联系项目维护者获得授权</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'api' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-800">API 文档</h2>
                  <a 
                    href="#" 
                    className="px-4 py-2 bg-[#4A90E2] text-white rounded-md hover:bg-[#4A90E2]/90 transition duration-300 flex items-center text-sm"
                  >
                    <BookOpen size={16} className="mr-2" />
                    完整 API 文档
                  </a>
                </div>
                
                <div className="space-y-6">
                  {apiEndpoints.map((endpoint, index) => (
                    <div key={index} className="bg-[#F7F7F7] p-4 rounded-lg">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-[#4A90E2] text-white text-xs rounded-md font-mono">
                          {endpoint.name.split(' ')[0]}
                        </span>
                        <span className="font-mono text-gray-800 font-medium">
                          {endpoint.name.split(' ')[1]}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{endpoint.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">参数：</h4>
                        <div className="bg-white rounded-md overflow-hidden border border-gray-200">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  名称
                                </th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  类型
                                </th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  必填
                                </th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  描述
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {endpoint.parameters.map((param, paramIndex) => (
                                <tr key={paramIndex}>
                                  <td className="px-4 py-2 text-sm font-mono text-gray-800">
                                    {param.name}
                                  </td>
                                  <td className="px-4 py-2 text-sm text-gray-600">
                                    {param.type}
                                  </td>
                                  <td className="px-4 py-2 text-sm">
                                    {param.required ? (
                                      <span className="text-red-500">是</span>
                                    ) : (
                                      <span className="text-gray-500">否</span>
                                    )}
                                  </td>
                                  <td className="px-4 py-2 text-sm text-gray-600">
                                    {param.description}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-2">响应：</h4>
                        <p className="text-sm text-gray-600">{endpoint.response}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'contribute' && (
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">贡献指南</h2>
                
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-4">
                    我们非常欢迎各类贡献，无论是代码、文档还是创意。以下是参与项目的几种方式：
                  </p>
                  
                  <div className="space-y-6 mb-6">
                    <div className="bg-[#F7F7F7] p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">提交代码</h3>
                      <ol className="list-decimal list-inside space-y-2">
                        <li>Fork 项目仓库到您的 GitHub 账号</li>
                        <li>创建新的分支 <code className="bg-gray-100 px-1 py-0.5 rounded">git checkout -b feature/your-feature</code></li>
                        <li>进行代码修改并提交 <code className="bg-gray-100 px-1 py-0.5 rounded">git commit -m "Add feature"</code></li>
                        <li>推送到您的仓库 <code className="bg-gray-100 px-1 py-0.5 rounded">git push origin feature/your-feature</code></li>
                        <li>创建 Pull Request 到主仓库的 develop 分支</li>
                      </ol>
                    </div>
                    
                    <div className="bg-[#F7F7F7] p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">报告问题</h3>
                      <p className="mb-2">
                        如果您发现了 bug 或有改进建议，请在 GitHub Issues 中提交，并尽可能提供：
                      </p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>问题的详细描述</li>
                        <li>复现步骤</li>
                        <li>预期行为与实际行为</li>
                        <li>相关的截图或日志</li>
                      </ul>
                    </div>
                    
                    <div className="bg-[#F7F7F7] p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">改进文档</h3>
                      <p>
                        文档对于项目的可用性至关重要。您可以帮助我们改进 API 文档、使用指南或贡献示例代码。
                      </p>
                    </div>
                    
                    <div className="bg-[#F7F7F7] p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">参与讨论</h3>
                      <p>
                        在开发者论坛中分享您的想法和经验，帮助其他开发者解决问题，或提出新的功能建议。
                      </p>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">代码规范</h3>
                  <p className="mb-4">
                    为保持代码质量和一致性，请遵循以下规范：
                  </p>
                  
                  <div className="bg-[#F7F7F7] p-4 rounded-lg mb-6">
                    <ul className="list-disc list-inside space-y-2">
                      <li>遵循各语言的官方风格指南（PEP 8 for Python, Airbnb for JavaScript）</li>
                      <li>所有代码必须通过现有的单元测试</li>
                      <li>为新功能编写单元测试，确保测试覆盖率不低于当前水平</li>
                      <li>使用有意义的提交信息，遵循 Conventional Commits 规范</li>
                      <li>保持代码简洁，避免不必要的复杂性</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 flex items-start">
                    <AlertCircle className="text-yellow-500 mr-3 flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <h4 className="text-yellow-800 font-medium">开发环境设置</h4>
                      <p className="text-yellow-700 text-sm mt-1">
                        详细的环境设置和本地开发指南请参考 GitHub 仓库中的 <code className="bg-yellow-100 px-1 py-0.5 rounded">CONTRIBUTING.md</code> 文件。
                        如有任何问题，欢迎在开发者论坛中提问或联系项目维护者。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'forum' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-800">开发者论坛</h2>
                  <button className="px-4 py-2 bg-[#F5A623] text-white rounded-md hover:bg-[#F5A623]/90 transition duration-300 flex items-center text-sm">
                    <MessageSquare size={16} className="mr-2" />
                    发布新主题
                  </button>
                </div>
                
                <div className="space-y-4 mb-6">
                  {forumPosts.map((post) => (
                    <div key={post.id} className="bg-[#F7F7F7] p-4 rounded-lg hover:shadow-md transition duration-300">
                      <div className="flex items-start">
                        {post.pinned && (
                          <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full mr-2 flex-shrink-0">
                            置顶
                          </span>
                        )}
                        <h3 className="text-lg font-medium text-[#4A90E2] hover:text-[#F5A623] transition duration-300 cursor-pointer">
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
                            <Star size={14} className="mr-1" />
                            {post.likes}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <button className="px-6 py-2 border border-[#4A90E2] text-[#4A90E2] rounded-md hover:bg-[#4A90E2]/10 transition duration-300">
                    查看更多讨论
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};