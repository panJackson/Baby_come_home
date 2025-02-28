import React, { useState } from 'react';
import { Upload as UploadIcon, Image, Trash2, ArrowRight, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Upload = () => {
  const [step, setStep] = useState(1);
  const [files, setFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [targetAge, setTargetAge] = useState(15);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles([...files, ...selectedFiles]);
      
      // Create preview URLs
      const newPreviewUrls = selectedFiles.map(file => URL.createObjectURL(file));
      setPreviewUrls([...previewUrls, ...newPreviewUrls]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      const droppedFiles = Array.from(e.dataTransfer.files);
      setFiles([...files, ...droppedFiles]);
      
      // Create preview URLs
      const newPreviewUrls = droppedFiles.map(file => URL.createObjectURL(file));
      setPreviewUrls([...previewUrls, ...newPreviewUrls]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const removeFile = (index: number) => {
    const newFiles = [...files];
    const newPreviewUrls = [...previewUrls];
    
    // Revoke the object URL to avoid memory leaks
    URL.revokeObjectURL(newPreviewUrls[index]);
    
    newFiles.splice(index, 1);
    newPreviewUrls.splice(index, 1);
    
    setFiles(newFiles);
    setPreviewUrls(newPreviewUrls);
  };

  const nextStep = () => {
    if (step === 2) {
      setShowPrivacyModal(true);
    } else {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const generateImage = () => {
    setShowPrivacyModal(false);
    setIsGenerating(true);
    
    // Simulate image generation (in a real app, this would be an API call)
    setTimeout(() => {
      setIsGenerating(false);
      // Use a placeholder image for demonstration
      setGeneratedImage('https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80');
      setStep(3);
    }, 3000);
  };

  return (
    <div className="bg-[#F7F7F7] min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-[#4A90E2] py-6 px-6">
            <h1 className="text-2xl font-bold text-white">上传照片与生成</h1>
            <p className="text-white/90 mt-1">
              上传照片，利用AI技术生成不同年龄段的模拟图像
            </p>
          </div>
          
          {/* Steps Indicator */}
          <div className="px-6 pt-6">
            <div className="flex items-center">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 1 ? 'bg-[#F5A623] text-white' : 'bg-gray-200 text-gray-600'}`}>
                1
              </div>
              <div className={`flex-1 h-1 mx-2 ${step >= 2 ? 'bg-[#F5A623]' : 'bg-gray-200'}`}></div>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 2 ? 'bg-[#F5A623] text-white' : 'bg-gray-200 text-gray-600'}`}>
                2
              </div>
              <div className={`flex-1 h-1 mx-2 ${step >= 3 ? 'bg-[#F5A623]' : 'bg-gray-200'}`}></div>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 3 ? 'bg-[#F5A623] text-white' : 'bg-gray-200 text-gray-600'}`}>
                3
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mt-1">
              <span>上传照片</span>
              <span>选择年龄</span>
              <span>查看结果</span>
            </div>
          </div>
          
          {/* Step Content */}
          <div className="p-6">
            {step === 1 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">上传照片</h2>
                
                <div 
                  className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#4A90E2] transition duration-300"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                >
                  <div className="mx-auto w-16 h-16 bg-[#4A90E2]/10 rounded-full flex items-center justify-center mb-4">
                    <UploadIcon className="h-8 w-8 text-[#4A90E2]" />
                  </div>
                  <p className="text-gray-700 mb-2">拖拽照片到此处，或</p>
                  <label className="inline-block px-4 py-2 bg-[#4A90E2] text-white rounded-md cursor-pointer hover:bg-[#4A90E2]/90 transition duration-300">
                    选择文件
                    <input 
                      type="file" 
                      className="hidden" 
                      accept="image/*" 
                      multiple 
                      onChange={handleFileChange}
                    />
                  </label>
                  <p className="text-sm text-gray-500 mt-2">
                    请上传清晰的人脸照片，支持JPG/PNG格式
                  </p>
                </div>
                
                {previewUrls.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-3">已上传照片</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {previewUrls.map((url, index) => (
                        <div key={index} className="relative group">
                          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100">
                            <img 
                              src={url} 
                              alt={`Preview ${index}`} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <button 
                            onClick={() => removeFile(index)}
                            className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition duration-300"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mt-6 flex items-start">
                  <AlertCircle className="text-blue-500 mr-3 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="text-blue-800 font-medium">提示</h4>
                    <p className="text-blue-700 text-sm mt-1">
                      为获得最佳效果，请上传：
                      <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>正面、清晰的人脸照片</li>
                        <li>如有可能，上传多个角度的照片</li>
                        <li>如果是寻找失踪儿童，可同时上传父母照片以提高准确性</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {step === 2 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">选择目标年龄</h2>
                
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>5岁</span>
                    <span>15岁</span>
                    <span>25岁</span>
                    <span>35岁</span>
                    <span>45岁+</span>
                  </div>
                  <input 
                    type="range" 
                    min="5" 
                    max="45" 
                    value={targetAge} 
                    onChange={(e) => setTargetAge(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#F5A623]"
                  />
                  <div className="text-center mt-4">
                    <span className="text-2xl font-bold text-[#F5A623]">{targetAge}岁</span>
                  </div>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-4 mb-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">已上传照片预览</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {previewUrls.map((url, index) => (
                      <div key={index} className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-white">
                        <img 
                          src={url} 
                          alt={`Preview ${index}`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 flex items-start">
                  <AlertCircle className="text-yellow-500 mr-3 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="text-yellow-800 font-medium">请注意</h4>
                    <p className="text-yellow-700 text-sm mt-1">
                      AI生成的图像是基于算法的模拟预测，可能与实际外貌存在差异。建议生成多个不同年龄段的图像以提高匹配可能性。
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {step === 3 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">生成结果</h2>
                
                {generatedImage ? (
                  <div className="text-center">
                    <div className="bg-white border border-gray-200 rounded-lg p-4 inline-block">
                      <img 
                        src={generatedImage} 
                        alt="Generated Face" 
                        className="w-64 h-64 object-cover rounded-md mx-auto"
                      />
                      <p className="mt-2 text-gray-600">
                        模拟 {targetAge} 岁时的外貌
                      </p>
                    </div>
                    
                    <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
                      <button className="px-4 py-2 bg-[#4A90E2] text-white rounded-md hover:bg-[#4A90E2]/90 transition duration-300 flex items-center justify-center">
                        <Image size={18} className="mr-2" />
                        保存图像
                      </button>
                      <Link 
                        to="/database" 
                        className="px-4 py-2 bg-[#F5A623] text-white rounded-md hover:bg-[#F5A623]/90 transition duration-300 flex items-center justify-center"
                      >
                        与数据库匹配
                        <ArrowRight size={18} className="ml-2" />
                      </Link>
                    </div>
                    
                    <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-md text-left">
                      <h3 className="text-lg font-medium text-green-800 mb-2">下一步建议</h3>
                      <ul className="space-y-2 text-green-700">
                        <li className="flex items-start">
                          <span className="inline-flex items-center justify-center w-5 h-5 bg-green-500 text-white rounded-full mr-2 flex-shrink-0 text-xs">1</span>
                          <span>将生成的图像保存到您的设备</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-flex items-center justify-center w-5 h-5 bg-green-500 text-white rounded-full mr-2 flex-shrink-0 text-xs">2</span>
                          <span>使用"与数据库匹配"功能，查找可能的匹配结果</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-flex items-center justify-center w-5 h-5 bg-green-500 text-white rounded-full mr-2 flex-shrink-0 text-xs">3</span>
                          <span>尝试生成不同年龄段的图像，提高匹配成功率</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#F5A623] mx-auto"></div>
                    <p className="mt-4 text-gray-600">正在生成图像，请稍候...</p>
                  </div>
                )}
              </div>
            )}
          </div>
          
          {/* Footer */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-between">
            {step > 1 ? (
              <button 
                onClick={prevStep}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition duration-300"
              >
                上一步
              </button>
            ) : (
              <div></div>
            )}
            
            {step < 3 && (
              <button 
                onClick={nextStep}
                disabled={step === 1 && files.length === 0}
                className={`px-4 py-2 bg-[#F5A623] text-white rounded-md hover:bg-[#F5A623]/90 transition duration-300 ${step === 1 && files.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {step === 2 ? '生成模拟图像' : '下一步'}
              </button>
            )}
          </div>
        </div>
      </div>
      
      {/* Privacy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">隐私声明</h3>
            <p className="text-gray-600 mb-6">
              您的照片将加密存储，仅用于寻人目的，不会用于其他商业用途。我们严格保护您的隐私和数据安全。
              <br /><br />
              点击"同意并继续"，即表示您同意我们的隐私政策和使用条款。
            </p>
            <div className="flex justify-end space-x-4">
              <button 
                onClick={() => setShowPrivacyModal(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition duration-300"
              >
                取消
              </button>
              <button 
                onClick={generateImage}
                className="px-4 py-2 bg-[#F5A623] text-white rounded-md hover:bg-[#F5A623]/90 transition duration-300"
              >
                同意并继续
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};