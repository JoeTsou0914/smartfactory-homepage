import React from "react";
import { motion } from "framer-motion";

const Customers = () => {
  // 客戶案例資料
  const caseStudies = [
    {
      name: "台灣化學纖維",
      industry: "紡織製造",
      challenge: "生產特殊紗線，品質不穩定",
      solution: "QAI 智能品質監測系統",
      result: "減少30%斷線率，提高20%生產效率",
     // image: "/images/demo/customer/case-study-1.jpg"
    },
    {
      name: "宏遠紡織",
      industry: "紡織製造",
      challenge: "老舊設備無法監控，數據無法整合",
      solution: "機台整合系統",
      result: "實現全廠設備聯網，管理效率提升35%",
     // image: "/images/demo/customer/case-study-2.jpg"
    },
    {
      name: "南亞塑膠",
      industry: "智能製造",
      challenge: "機台種類多，管理不易，耗費大量人力",
      solution: "智慧工廠",
      result: "檢測效率提升50%，不良品率降低15%",
      //image: "/images/demo/customer/case-study-3.jpg"
    }
  ];

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
            客戶案例
          </motion.h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            我們的解決方案已成功應用於各行各業，幫助客戶實現智能製造，提升競爭力
          </p>
        </div>
      </div>

      <main className="w-full max-w-screen-xl mx-auto px-4 py-12">
        {/* 成功案例區塊 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">成功案例</h2>
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">{study.name}</h3>
                    <p className="text-gray-500 mb-4">行業：{study.industry}</p>
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-800">挑戰：</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">解決方案：</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">成果：</h4>
                        <p className="text-gray-600">{study.result}</p>
                      </div>
                    </div>
                    <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded">
                      了解更多
                    </button>
                  </div>
                  <div className="h-64 md:h-auto">
                    <img 
                      src={study.image} 
                      alt={study.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "/images/demo/320x210.png";
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 全球客戶區塊 */}
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">我們的全球客戶</h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            我們服務的企業遍布全球，以下為部分客戶代表：
          </p>
          <div className="bg-gray-100 py-12 px-6 rounded-xl">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 w-full max-w-screen-xl mx-auto">
              <motion.img 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                src="/images/demo/customer/01.png" 
                alt="Customer 1" 
                className="h-16 mx-auto grayscale hover:grayscale-0 transition-all duration-300" 
              />
              <motion.img 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                src="/images/demo/customer/02.png" 
                alt="Customer 2" 
                className="h-16 mx-auto grayscale hover:grayscale-0 transition-all duration-300" 
              />
              <motion.img 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                src="/images/demo/customer/03.png" 
                alt="Customer 3" 
                className="h-16 mx-auto grayscale hover:grayscale-0 transition-all duration-300" 
              />
              <motion.img 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                src="/images/demo/customer/04.png" 
                alt="Customer 4" 
                className="h-16 mx-auto grayscale hover:grayscale-0 transition-all duration-300" 
              />
              <motion.img 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                src="/images/demo/customer/05.png" 
                alt="Customer 5" 
                className="h-16 mx-auto grayscale hover:grayscale-0 transition-all duration-300" 
              />
              <motion.img 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                src="/images/demo/customer/06.png" 
                alt="Customer 6" 
                className="h-16 mx-auto grayscale hover:grayscale-0 transition-all duration-300" 
              />
            </div>
          </div>
        </div>

        {/* 客戶見證區塊 */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">客戶見證</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-700 text-xl font-bold">T</span>
                </div>
                <div>
                  <h3 className="font-semibold">陳經理</h3>
                  <p className="text-gray-500 text-sm">台灣紡織公司</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "QAI系統幫助我們顯著提升了生產效率，讓我們的品質管理更加精確且高效。導入系統後，我們的不良品率下降了15%，產能提升了20%。"
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-700 text-xl font-bold">H</span>
                </div>
                <div>
                  <h3 className="font-semibold">黃總監</h3>
                  <p className="text-gray-500 text-sm">宏大製造</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "雩華企業的機台整合方案幫助我們將老舊設備成功升級，實現了全廠聯網，大大提升了管理效率。技術團隊專業且負責，服務非常周到。"
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-700 text-xl font-bold">L</span>
                </div>
                <div>
                  <h3 className="font-semibold">李廠長</h3>
                  <p className="text-gray-500 text-sm">誠泰紡織</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "透過毛羽檢測系統，我們大幅減少了人工檢測時間，提高了檢測準確度，產品品質更加穩定。強烈推薦給有類似需求的企業。"
              </p>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Customers;