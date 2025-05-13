import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  // 添加表單狀態
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState({ success: false, message: "" });

  // 處理表單輸入變化
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // 處理表單提交
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // 使用 formsubmit.co 服務發送郵件，這是一個免費的表單提交服務
      const response = await fetch(`https://formsubmit.co/${encodeURIComponent("qai.joetsou@qai-lab.com")}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        })
      });
      
      if (response.ok) {
        setSubmitResult({ 
          success: true, 
          message: "您的訊息已成功發送，我們將盡快與您聯絡！" 
        });
        // 清空表單
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        throw new Error("發送失敗");
      }
    } catch (error) {
      setSubmitResult({ 
        success: false, 
        message: "發送訊息時出現問題，請稍後再試或直接聯絡我們。" 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* 頁面標題區 */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-4">
        <div className="max-w-screen-xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            聯絡我們
          </motion.h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            我們的專業團隊隨時準備為您提供最佳的智慧製造解決方案
          </p>
        </div>
      </div>

      <main className="w-full max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* 左側：聯絡表單 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-6">發送訊息</h2>
            <p className="text-gray-600 mb-6">
              填寫以下表單，我們的專業顧問將與您聯繫，了解您的需求並提供客製化的解決方案
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                  姓名
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="請輸入您的姓名"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="company">
                  公司名稱
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="請輸入您的公司名稱"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                  電子郵件
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="請輸入您的電子郵件"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                  電話
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="請輸入您的聯絡電話"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                  訊息內容
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="請描述您的需求或問題"
                  required
                ></textarea>
              </div>
              
              {/* 顯示提交結果 */}
              {submitResult.message && (
                <div className={`mb-4 p-3 rounded-md ${submitResult.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {submitResult.message}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${isSubmitting ? 'bg-blue-400' : 'bg-blue-700 hover:bg-blue-800'} text-white py-3 px-4 rounded-md flex items-center justify-center`}
              >
                {isSubmitting ? '發送中...' : '發送訊息'} <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </motion.div>

          {/* 右側：聯絡資訊 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">聯絡資訊</h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">地址</h3>
                    <p className="text-gray-600">新北市新店區中正路538巷1號5樓</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">電話</h3>
                    <p className="text-gray-600">
                      <a href="tel:+886222186363" className="hover:text-blue-600 transition-colors">
                        +886-2-22186363
                      </a>
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:qai.joetsou@qai-lab.com" className="hover:text-blue-600 transition-colors">
                        qai.joetsou@qai-lab.com
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">營業時間</h2>
              <ul className="space-y-3">
                <li className="flex justify-between border-b pb-2">
                  <span className="text-gray-600">週一至週五</span>
                  <span className="font-medium">9:00 - 18:00</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="text-gray-600">週六</span>
                  <span className="font-medium">9:00 - 12:00</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">週日</span>
                  <span className="font-medium">休息</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-900 text-white rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">需要緊急協助？</h3>
              <p className="mb-4 text-blue-100">
                我們提供專業的技術支援服務，如您遇到任何系統問題，請立即聯繫我們
              </p>
              <a 
                href="tel:+886222186363" 
                className="inline-flex items-center bg-white text-blue-900 px-4 py-2 rounded-md hover:bg-blue-50 transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" /> 立即撥打
              </a>
            </div>
          </motion.div>
        </div>

        {/* 地圖區塊 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">我們的位置</h2>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.9724343537714!2d121.53150661500784!3d24.984544984013634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34680202352caf3b%3A0xa749a1624745e756!2z6ZuF6I-v5LyB5qWt5pyJ6ZmQ5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1675849201059!5m2!1szh-TW!2stw"
              className="w-full h-96 border-0"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>

        {/* 常見問題區塊 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">常見問題</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                如何為我的工廠選擇合適的智能解決方案？
              </h3>
              <p className="text-gray-600">
                建議您先與我們的專業顧問聯繫，描述您的工廠現狀、面臨的問題和需求。我們會根據您的具體情況，提供最適合的解決方案建議和方案演示。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                系統實施需要多長時間？
              </h3>
              <p className="text-gray-600">
                實施時間取決於您工廠的規模和系統的複雜程度。一般而言，單一產線的基本系統可在2-4週內完成，而全廠智能化整合可能需要2-3個月。我們會提供詳細的實施計劃和時間表。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                您提供哪些售後服務和技術支援？
              </h3>
              <p className="text-gray-600">
                我們提供全面的售後服務，包括系統維護、技術升級、故障處理和員工培訓。同時，我們還提供7x24小時緊急技術支援，確保您的系統穩定運行。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                如何評估系統實施後的效益？
              </h3>
              <p className="text-gray-600">
                我們會與您共同設定關鍵績效指標(KPI)，如生產效率提升率、不良品率降低百分比、能源節省等。系統實施後，我們提供定期的效益評估報告，幫助您量化投資回報。
              </p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default Contact;