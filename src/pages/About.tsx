import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* 頁面標題區 */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-4">
        <div className="max-w-screen-xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            關於我們
          </motion.h1>
          <p className="text-blue-100 text-lg">
            智慧製造的領導品牌，致力於提升產業效能與品質
          </p>
        </div>
      </div>

      <main className="w-full max-w-screen-xl mx-auto px-4 py-12">
        {/* 公司介紹區塊 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-6">公司簡介</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              雩華企業有限公司，致力於智慧製造與品質檢測技術，協助全球製造業提升產線效能與產品品質。
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              從最初的紡織產業起步，透過線上張力品質監測系統QAI(Quality Auto Inspection)解決方案提升DTY之品質與管理流程效率，
              也是全國唯一可以整合新舊假撚機台的廠商，使工廠可以用更少的人力、更精準的品質監測、 
              更節省的檢測方式來增加生產效率並且降低製造成本。
            </p>
            <p className="text-gray-700 leading-relaxed">
              發展至今結合 AI、資料庫、即時感測等技術，透過數據可以讓管理者快速掌握工廠即時狀況，打造完整智慧工廠解決方案。
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <img 
              src="/images/demo/about-company.jpg" 
              alt="雩華企業" 
              className="w-full h-auto rounded-xl"
              onError={(e) => {
                e.currentTarget.src = "/images/demo/320x210.png";
              }}
            />
          </motion.div>
        </div>

        {/* 核心價值區塊 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-blue-50 rounded-xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">核心價值</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">創新</h3>
              <p className="text-gray-600">
                不斷追求技術創新，開發更智能、更高效的解決方案，引領產業發展方向。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">精準</h3>
              <p className="text-gray-600">
                以高精度的感測和數據分析技術，提供精確的生產監控，確保產品品質穩定一致。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">信賴</h3>
              <p className="text-gray-600">
                以專業技術和優質服務贏得客戶信任，成為製造業轉型升級的可靠夥伴。
              </p>
            </div>
          </div>
        </motion.div>

        {/* 專業優勢區塊 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">我們的專業優勢</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">全方位的智慧製造方案</h3>
              <p className="text-gray-700">
                從單一設備監控到全廠智能化整合，提供完整的智慧製造解決方案，滿足不同規模企業的需求。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">深厚的行業經驗</h3>
              <p className="text-gray-700">
                擁有豐富的紡織產業經驗，深入了解製造流程中的痛點和需求，提供真正符合行業特性的解決方案。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">先進的技術研發</h3>
              <p className="text-gray-700">
                持續投入研發資源，結合 AI、大數據、物聯網等前沿技術，不斷提升產品性能和用戶體驗。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">完善的售後服務</h3>
              <p className="text-gray-700">
                提供專業的技術支援和培訓服務，確保客戶能夠充分利用系統功能，實現最大價值。
              </p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default About;