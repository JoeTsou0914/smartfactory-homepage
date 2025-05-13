import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

const services = [
  {
    id: "qai",
    title: "QAI 智能品質監測系統",
    desc: "即時監控紗線張力，避免斷線與品質不穩，適用假撚加工與高速加彈。",
    image: "/images/service/QAI/01.png",
    features: ["即時監控", "數據分析", "預警系統"]
  },
  {
    id: "fuzz",
    title: "毛羽感測器",
    desc: "高精度感測器偵測毛羽產生，提高產品品質與檢測效率。",
    image: "/images/service/Yarn Fray/Yarn Fray Detection.png",
    features: ["精密感測", "自動檢測", "品質穩定"]
  },
  {
    id: "heat",
    title: "加熱系統",
    desc: "穩定控溫的模組化加熱解決方案，適用於紡絲與熱處理工序。",
    image: "/images/service/Heat/01.jpg",
    features: ["精確控溫", "節能設計", "安全防護"]
  },
  {
    id: "integration",
    title: "機台整合",
    desc: "老舊機台加值方案，整合 PLC 與感測器，打造智慧節點。",
    image: "/images/service/integration/SI01.jpg",
    features: ["設備升級", "系統整合", "成本效益"]
  },
  {
    id: "factory",
    title: "智慧工廠",
    desc: "以雲端為基礎的智慧工廠解決方案，整合 OT 與 IT 系統。",
    image: "/images/service/SCADA/SCADA01.jpg",
    features: ["集中管理", "即時監控", "數據分析"]
  },
  {
    id: "parts",
    title: "紡織零組配件",
    desc: "打結槍、陶瓷張力器、噴嘴、捲機槽棍、導輪等紡織機核心零件。",
    image: "/images/service/02.jpg",
    features: ["高質量", "耐用可靠", "精密製造"]
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      {/* 頁面標題區 */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-4">
        <div className="max-w-screen-xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold"
          >
            產品服務
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto"
          >
            我們提供完整的智慧製造與品質監測解決方案，從單機設備到全廠整合，協助客戶優化生產流程，提升產能與品質
          </motion.p>
        </div>
      </div>

      {/* 內容區 */}
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        {/* 產品類別過濾導航 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-6 py-2 bg-blue-700 text-white rounded-full">全部</button>
          <button className="px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-full">設備監控</button>
          <button className="px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-full">品質檢測</button>
          <button className="px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-full">系統整合</button>
          <button className="px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-full">設備監控</button>
          <button className="px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-full">品質檢測</button>
          <button className="px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-full">系統整合</button>
          <button className="px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-full">零組件</button>
        </div>

        {/* 產品列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-0">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-48 object-cover" 
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{item.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.features.map((feature, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link to={`/product/${item.id}`}>
                    <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white">
                      了解更多 <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 客製化解決方案區塊 */}
        <div className="mt-20 bg-gray-50 rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">客製化解決方案</h2>
              <p className="text-gray-600 mb-6">
                除了標準產品外，我們還提供針對不同產業需求的客製化解決方案。
                無論您的生產流程有多複雜，我們都能為您量身訂做最適合的智能系統。
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 mt-1 mr-3"></div>
                  <span>跨品牌設備整合</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 mt-1 mr-3"></div>
                  <span>老舊機台智能化升級</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 mt-1 mr-3"></div>
                  <span>產線效能最佳化方案</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 mt-1 mr-3"></div>
                  <span>全廠智能化規劃</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button className="bg-blue-700 hover:bg-blue-800 text-white">
                  聯絡諮詢 <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="hidden md:block">
              <img 
                src="/images/demo/custom-solution.jpg" 
                alt="客製化解決方案" 
                className="w-full rounded-lg shadow-lg"
                onError={(e) => {
                  e.currentTarget.src = "/images/demo/320x210.png";
                }}
              />
            </div>
          </div>
        </div>

        {/* 技術支援與服務區塊 */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">技術支援與服務</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            我們不只提供產品，更提供完整的技術支援和服務，確保您的系統始終保持最佳運作狀態
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">系統安裝與設定</h3>
              <p className="text-gray-600">
                專業團隊協助您進行系統安裝、設定與調校，確保系統穩定運作
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">7x24 技術支援</h3>
              <p className="text-gray-600">
                提供全天候技術支援，迅速排除系統故障，減少生產中斷時間
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">教育訓練</h3>
              <p className="text-gray-600">
                為您的員工提供完整的操作訓練，確保系統功能得到充分利用
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 底部CTA區塊 */}
      <div className="bg-blue-900 text-white py-16 px-4 mt-20">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">準備升級您的製造流程？</h2>
          <p className="mb-8 text-blue-100 max-w-2xl mx-auto">
            聯絡我們的專業顧問，了解如何透過我們的智能解決方案提升您的生產效率和產品品質
          </p>
          <Link to="/contact">
            <Button className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-6 rounded-md">
              免費諮詢 <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}