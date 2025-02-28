import React, { useState } from 'react';
import { DollarSign, CreditCard, Share2, Heart, PieChart, FileText, AlertCircle } from 'lucide-react';

export const Donate = () => {
  const [donationAmount, setDonationAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  
  const predefinedAmounts = [50, 100, 200, 500];
  
  const recentDonations = [
    { name: '匿名爱心人士', amount: 100, date: '2025-06-05', message: '希望每个孩子都能回家' },
    { name: '张先生', amount: 500, date: '2025-06-04', message: '支持宝贝回家项目' },
    { name: '李女士', amount: 200, date: '2025-06-03', message: '愿天下没有失散的亲人' },
    { name: '王先生', amount: 1000, date: '2025-06-02', message: '感谢你们的付出' },
    { name: '匿名爱心人士', amount: 50, date: '2025-06-01', message: '一点心意，希望能帮到需要的人' }
  ];
  
  const handleAmountSelect = (amount: number) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };
  
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setDonationAmount(null);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would process the payment
    setShowThankYouModal(true);
  };

  return (
    <div className="bg-[#F7F7F7] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-[#4A90E2] to-[#4A90E2]/70 p-8 md:p-12 text-white">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-bold mb-4">捐款支持</h1>
              <p className="text-xl mb-6">
                您的每一份捐款，都将帮助我们为失踪人口家庭提供更好的服务，让更多家庭团聚。
              </p>
              <div className="flex items-center">
                <Heart className="h-6 w-6 text-white mr-2" />
                <span className="text-lg">已累计收到捐款：¥1,258,760</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Donation Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-[#F5A623] py-4 px-6">
                <h2 className="text-xl font-bold text-white">爱心捐款</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6">
                <div className="mb-6">
                  <label className="block text-lg font-medium text-gray-800 mb-3">
                    选择捐款金额
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {predefinedAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        className={`py-3 rounded-md border ${
                          donationAmount === amount 
                            ? 'bg-[#F5A623] text-white border-[#F5A623]' 
                            : 'border-gray-300 text-gray-700 hover:border-[#F5A623] hover:text-[#F5A623]'
                        } transition duration-300`}
                        onClick={() => handleAmountSelect(amount)}
                      >
                        ¥{amount}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    自定义金额
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <DollarSign className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="number"
                      placeholder="输入金额"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#F5A623] focus:border-[#F5A623]"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-lg font-medium text-gray-800 mb-3">
                    选择支付方式
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button
                      type="button"
                      className={`py-3 px-4 rounded-md border flex items-center justify-center ${
                        paymentMethod === 'wechat' 
                          ? 'bg-[#4A90E2]/10 border-[#4A90E2] text-[#4A90E2]' 
                          : 'border-gray-300 text-gray-700 hover:border-[#4A90E2] hover:text-[#4A90E2]'
                      } transition duration-300`}
                      onClick={() => setPaymentMethod('wechat')}
                    >
                      <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9.5,4C5.36,4 2,6.69 2,10C2,11.89 3.08,13.56 4.78,14.66L4,17L6.5,15.5C7.39,15.81 8.37,16 9.41,16C9.15,15.37 9,14.7 9,14C9,10.69 12.13,8 16,8C16.19,8 16.38,8 16.56,8.03C15.54,5.69 12.78,4 9.5,4M6.5,6.5A1,1 0 0,1 7.5,7.5A1,1 0 0,1 6.5,8.5A1,1 0 0,1 5.5,7.5A1,1 0 0,1 6.5,6.5M11.5,6.5A1,1 0 0,1 12.5,7.5A1,1 0 0,1 11.5,8.5A1,1 0 0,1 10.5,7.5A1,1 0 0,1 11.5,6.5M16,9C12.69,9 10,11.13 10,14C10,16.87 12.69,19 16,19C16.67,19 17.31,18.9 17.91,18.7L20,20L19.41,17.91C20.84,16.85 22,15.5 22,14C22,11.13 19.31,9 16,9M14,11.5A1,1 0 0,1 15,12.5A1,1 0 0,1 14,13.5A1,1 0 0,1 13,12.5A1,1 0 0,1 14,11.5M18,11.5A1,1 0 0,1 19,12.5A1,1 0 0,1 18,13.5A1,1 0 0,1 17,12.5A1,1 0 0,1 18,11.5Z" />
                      </svg>
                      微信支付
                    </button>
                    <button
                      type="button"
                      className={`py-3 px-4 rounded-md border flex items-center justify-center ${
                        paymentMethod === 'alipay' 
                          ? 'bg-[#4A90E2]/10 border-[#4A90E2] text-[#4A90E2]' 
                          : 'border-gray-300 text-gray-700 hover:border-[#4A90E2] hover:text-[#4A90E2]'
                      } transition duration-300`}
                      onClick={() => setPaymentMethod('alipay')}
                    >
                      <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9.5,4C5.36,4 2,6.69 2,10C2,11.89 3.08,13.56 4.78,14.66L4,17L6.5,15.5C7.39,15.81 8.37,16 9.41,16C9.15,15.37 9,14.7 9,14C9,10.69 12.13,8 16,8C16.19,8 16.38,8 16.56,8.03C15.54,5.69 12.78,4 9.5,4M6.5,6.5A1,1 0 0,1 7.5,7.5A1,1 0 0,1 6.5,8.5A1,1 0 0,1 5.5,7.5A1,1 0 0,1 6.5,6.5M11.5,6.5A1,1 0 0,1 12.5,7.5A1,1 0 0,1 11.5,8.5A1,1 0 0,1 10.5,7.5A1,1 0 0,1 11.5,6.5M16,9C12.69,9 10,11.13 10,14C10,16.87 12.69,19 16,19C16.67,19 17.31,18.9 17.91,18.7L20,20L19.41,17.91C20.84,16.85 22,15.5 22,14C22,11.13 19.31,9 16,9M14,11.5A1,1 0 0,1 15,12.5A1,1 0 0,1 14,13.5A1,1 0 0,1 13,12.5A1,1 0 0,1 14,11.5M18,11.5A1,1 0 0,1 19,12.5A1,1 0 0,1 18,13.5A1,1 0 0,1 17,12.5A1,1 0 0,1 18,11.5Z" />
                      </svg>
                      支付宝
                    </button>
                    <button
                      type="button"
                      className={`py-3 px-4 rounded-md border flex items-center justify-center ${
                        paymentMethod === 'card' 
                          ? 'bg-[#4A90E2]/10 border-[#4A90E2] text-[#4A90E2]' 
                          : 'border-gray-300 text-gray-700 hover:border-[#4A90E2] hover:text-[#4A90E2]'
                      } transition duration-300`}
                      onClick={() => setPaymentMethod('card')}
                    >
                      <CreditCard className="h-5 w-5 mr-2" />
                      银行卡
                    </button>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    留言（可选）
                  </label>
                  <textarea 
                    rows={3}
                    placeholder="您的鼓励和支持将成为我们前进的动力"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#F5A623] focus:border-[#F5A623]"
                  ></textarea>
                </div>
                
                <div className="mb-6 flex items-start">
                  <input 
                    type="checkbox" 
                    className="h-4 w-4 text-[#F5A623] focus:ring-[#F5A623] border-gray-300 rounded mt-1"
                  />
                  <label className="ml-2 block text-sm text-gray-700">
                    我同意将我的捐款用于"宝贝回家"项目的运营和发展
                  </label>
                </div>
                
                <button 
                  type="submit"
                  disabled={(!donationAmount && !customAmount) || !paymentMethod}
                  className={`w-full px-6 py-3 bg-[#F5A623] text-white rounded-md font-medium hover:bg-[#F5A623]/90 transition duration-300 flex items-center justify-center ${
                    (!donationAmount && !customAmount) || !paymentMethod ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <Heart className="h-5 w-5 mr-2" />
                  确认捐款 {donationAmount ? `¥${donationAmount}` : customAmount ? `¥${customAmount}` : ''}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};