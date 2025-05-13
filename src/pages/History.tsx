import React from "react";
import { motion } from "framer-motion";

const History = () => {
  const timelineEvents = [
    { year: 2017, title: "智慧化整合", description: "將所有系統整合至雲端平台，實現廠區全方位智慧化監控" },
    { year: 2016, title: "機台勤監參數整合", description: "開發多機台參數整合系統，提升管理效率" },
    { year: 2015, title: "張力品質參數整合", description: "整合張力與品質相關參數，建立全面品質管理機制" },
    { year: 2014, title: "QAI系統通訊平台網路化", description: "系統升級為網路通訊架構，實現遠端監控" },
    { year: 2012, title: "第四代 QAI 線上張力監測系統", description: "全面更新監測演算法，提升系統穩定性" },
    { year: 2010, title: "第三代 QAI 線上張力監測系統", description: "增加多點監測功能，擴大適用機種範圍" },
    { year: 2005, title: "第二代 QAI 線上張力監測系統", description: "優化系統架構，提升資料處理效能" },
    { year: 2000, title: "第一代 QAI 線上張力監測系統", description: "研發首套線上張力監測系統" },
    { year: 2000, title: "取得張力感測sensor專利", description: "自行研發張力感測技術並取得專利" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* 頁面標題區 */}
      <div className="bg-primary text-primary-foreground py-16 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold"
        >
          歷史沿革
        </motion.h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
          雩華企業從紡織產業起步，多年來不斷創新，致力於提升製造業效能與品質
        </p>
      </div>

      <div className="w-full max-w-screen-xl mx-auto px-4 py-12">
        {/* 公司簡介區 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                雩華企業有限公司，致力於智慧製造與品質檢測技術，協助全球製造業提升產線效能與產品品質。
              </p>
              <p className="text-lg mb-4">
                從最初的紡織產業起步，透過線上張力品質監測系統QAI(Quality Auto Inspection)解決方案提升DTY之品質與管理流程效率，
                也是全國唯一可以整合新舊假撚機台的廠商，使工廠可以用更少的人力、更精準的品質監測、 
                更節省的檢測方式來增加生產效率並且降低製造成本。
              </p>
              <p className="text-lg">
                發展至今結合 AI、資料庫、即時感測等技術，透過數據可以讓管理者快速掌握工廠即時狀況，打造完整智慧工廠解決方案。
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <img 
              src="/images/history/company.jpg" 
              alt="雩華企業" 
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </motion.div>
        </div>

        {/* 歷史沿革時間軸 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-10 text-center">創新的歷程</h2>
          
          <div className="relative">
            {/* 垂直時間軸線 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary opacity-50"></div>
            
            {/* 時間軸事件 */}
            {timelineEvents.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* 左側或右側內容 */}
                <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-primary mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
                
                {/* 中間年份圓點 */}
                <div className="w-2/12 flex justify-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center z-10 shadow-md">
                    {event.year}
                  </div>
                </div>
                
                {/* 空白區域 - 保持對稱 */}
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 核心價值區塊 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gray-100 p-10 rounded-xl shadow-md text-center"
        >
          <h2 className="text-3xl font-bold mb-6">核心價值</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary mb-3">創新</h3>
              <p>持續研發新技術，不斷提升產品與服務品質</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary mb-3">精準</h3>
              <p>精確掌握製程參數，確保產品品質穩定可靠</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary mb-3">信賴</h3>
              <p>建立長期夥伴關係，成為客戶最信賴的供應商</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default History;