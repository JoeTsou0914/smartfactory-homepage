import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChevronRight, BarChart2, Database, Cpu, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";

// 預加載圖片函數
const preloadImages = (imageArray) => {
  imageArray.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

export default function Home() {
  // 首頁輪播控制狀態
  const [activeIndex, setActiveIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  // 痛點卡片翻轉狀態
  const [flippedCards, setFlippedCards] = useState({});
  
  // 跑馬燈控制狀態
  const [statsMarqueeRunning, setStatsMarqueeRunning] = useState(true);
  const [partnersMarqueeRunning, setPartnersMarqueeRunning] = useState(true);
  
  // 參考元素
  const statsMarqueeRef = useRef(null);
  const partnersMarqueeRef = useRef(null);
  
  // 輪播頁面資料
  const carouselPages = [
    {
      id: "smart-manufacturing",
      title: "智慧製造•精準監控",
      description: "提供即時生產數據分析與設備整合解決方案，全面提升產線效能與品質，讓您的製造流程更加智能化、自動化。",
      image: "/images/demo/hero-image.png",
      imageAlt: "智慧製造監控系統"
    },
    {
      id: "sensor-application",
      title: "人人都能成為•調機師傅",
      description: "專業的感測器技術與整合服務，一鍵快速計算參數，讓您的生產更具競爭力。",
      image: "/images/demo/sensor-application.png",
      imageAlt: "感測器應用展示"
    }
  ];
  
  // 數據統計資料
  const statisticsData = [
    { value: "10%", label: "維修成本", trend: "down", color: "text-blue-600" },
    { value: "20%", label: "總收益提升", trend: "up", color: "text-blue-600" },
    { value: "6%", label: "產能提升", trend: "up", color: "text-blue-600" },
    { value: "25%", label: "廢品減少", trend: "down", color: "text-blue-600" },
    { value: "33%", label: "停機時間降低", trend: "down", color: "text-blue-600" },
    { value: "15%", label: "人力成本節省", trend: "down", color: "text-blue-600" },
    { value: "40%", label: "數據收集速度", trend: "up", color: "text-blue-600" },
  ];
  
  // 合作夥伴資料
  const partners = [
    { id: 1, logo: "/images/demo/customer/01.png", name: "夥伴1" },
    { id: 2, logo: "/images/demo/customer/02.png", name: "夥伴2" },
    { id: 3, logo: "/images/demo/customer/03.png", name: "夥伴3" },
    { id: 4, logo: "/images/demo/customer/04.png", name: "夥伴4" },
    { id: 5, logo: "/images/demo/customer/05.png", name: "夥伴5" },
    { id: 6, logo: "/images/demo/customer/06.png", name: "夥伴6" },
    { id: 7, logo: "/images/demo/customer/07.png", name: "夥伴7" },
    { id: 8, logo: "/images/demo/customer/08.png", name: "夥伴8" },
    { id: 9, logo: "/images/demo/customer/09.png", name: "夥伴9" },
    { id: 10, logo: "/images/demo/customer/10.png", name: "夥伴10" },
    { id: 11, logo: "/images/demo/customer/11.png", name: "夥伴11" },
	{ id: 12, logo: "/images/demo/customer/12.png", name: "夥伴12" },
	{ id: 13, logo: "/images/demo/customer/13.png", name: "夥伴13" },
	
	
  ];
  
  // 工廠轉型痛點資料 (增加原因和解決方案)
  const painPoints = [
    {
      id: "quality",
      title: "紗線品質難以控管",
      icon: "/images/home/yarn-quality.jpg",
      reasons: [
        "缺少品質監測系統",
        "舊型系統難以操作"
      ],
      solution: {
        title: "QAI 智能品質監測系統",
        description: "即時監控紗線張力，通過AI分析預警潛在問題，協助生產線穩定控制品質，降低不良率和客訴",
        link: "/product/qai"
      }
    },
    {
      id: "digitalization",
      title: "機台未落實全面資訊化",
      icon: "/images/home/digitalization.jpg",
      reasons: [
        "機台無法聯網，耗費大量人力成本將資訊填入系統",
        "紗線異常無法即時通知相關人員，客訴率上升"
      ],
      solution: {
        title: "SI01 通訊模組整合",
        description: "輕鬆將舊有設備升級為智能設備，自動上傳製造量、紗線等級、異常資訊，並即時推送通知",
        link: "/product/si01"
      }
    },
    {
      id: "integration",
      title: "各別機台無法整合",
      icon: "/images/home/machine-integration.jpg",
      reasons: [
        "機台廠牌過多，各個機台無法與系統溝通",
        "監測系統開發商不存在，無法更新系統"
      ],
      solution: {
        title: "機台整合系統",
        description: "打破品牌限制，實現所有機台的統一管理和數據整合，建立完整的數位化工廠生態系統",
        link: "/product/integration"
      }
    },
    {
      id: "management",
      title: "難以透過系統整廠管理",
      icon: "/images/home/system-management.jpg",
      reasons: [
        "機台品牌與型號過多，造成系統紊亂",
        "管理分散無法統一"
      ],
      solution: {
        title: "智慧工廠管理平台",
        description: "多工廠、多設備資訊集中管理，整合生產、品管、倉儲等系統，實現全廠數據透明化",
        link: "/product/factory"
      }
    }
  ];
  
  // 當前顯示的頁面
  const currentPage = carouselPages[activeIndex];
  
  // 處理卡片翻轉
  const handleCardMouseEnter = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: true
    }));
  };
  
  const handleCardMouseLeave = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: false
    }));
  };
  
  // 預加載所有圖片
  useEffect(() => {
    const imagesToPreload = [
      ...carouselPages.map(page => page.image),
      ...painPoints.map(point => point.icon),
      ...partners.map(partner => partner.logo),
      "/images/demo/320x210.png" // 備用圖片
    ];
    
    preloadImages(imagesToPreload);
    
    // 設置一個小的延遲確保頁面元素已經具有正確的高度
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  // 如果圖片未載入完成，顯示一個最小高度的佔位元素
  if (!imagesLoaded) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">載入中...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background">
      {/* Hero 輪播區塊 */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-4 relative">
        {/* 內容保持不變 */}
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <motion.h1
                key={`title-${activeIndex}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                {currentPage.title.split('•')[0]}
                <span className="text-blue-300">•{currentPage.title.split('•')[1]}</span>
              </motion.h1>
              <motion.p
                key={`desc-${activeIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 text-lg md:text-xl text-blue-100"
              >
                {currentPage.description}
              </motion.p>
              <motion.div
                key={`buttons-${activeIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Button 
                  size="lg" 
                  className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-6 py-6 rounded-md"
                >
                  <Link to="/services" className="flex items-center">
                    了解解決方案 <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-blue-800 text-lg px-6 py-6 rounded-md"
                >
                  <Link to="/contact" className="flex items-center">
                    聯絡我們 <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
            <motion.div
              key={`image-${activeIndex}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="hidden md:block"
            >
              <img 
                src={currentPage.image} 
                alt={currentPage.imageAlt} 
                className="w-full rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
        
        {/* 輪播控制按鈕 - 僅保留原點式導航 */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-4">
          {carouselPages.map((_, index) => (
            <button
              key={`dot-${index}`}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeIndex ? 'bg-white' : 'bg-white bg-opacity-40'
              }`}
              aria-label={`切換到滑動頁面 ${index + 1}`}
            />
          ))}
        </div>
      </header>

      <main className="w-full max-w-screen-xl mx-auto px-4 py-8">
        {/* 工廠轉型痛點區塊 - 改為滑鼠懸停翻轉卡片 */}
        <section className="py-16 bg-gray-100 rounded-xl shadow-md my-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">假撚廠轉型要點</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
              {painPoints.map((point, index) => (
                <div 
                  key={index}
                  className="flip-card h-96"
                  onMouseEnter={() => handleCardMouseEnter(point.id)}
                  onMouseLeave={() => handleCardMouseLeave(point.id)}
                >
                  <div className={`flip-card-inner ${flippedCards[point.id] ? 'flipped' : ''}`}>
                    {/* 卡片正面 - 痛點和原因 */}
                    <div className="flip-card-front bg-white rounded-xl shadow-md border border-blue-200 p-6 flex flex-col">
                      <div className="text-center mb-4">
                        <div className="w-16 h-16 flex items-center justify-center mx-auto">
                          {point.icon ? (
                            <img 
                              src={point.icon} 
                              alt="" 
                              className="w-12 h-12 object-cover rounded-full"
                              onError={(e) => {
                                e.currentTarget.src = "/images/demo/icon-placeholder.svg";
                              }}
                            />
                          ) : (
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-blue-600 text-xl font-bold">{index + 1}</span>
                            </div>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-blue-900 mt-2">{point.title}</h3>
                      </div>
                      
                      <div className="flex-grow">
                        <div className="text-left">
                          <h4 className="text-sm font-medium text-gray-600 mb-2">問題原因：</h4>
                          <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                            {point.reasons.map((reason, i) => (
                              <li key={i}>{reason}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="text-blue-600 text-sm text-center mt-4">
                        滑鼠移過來查看解決方案
                      </div>
                    </div>
                    
                    {/* 卡片背面 - 解決方案 */}
                    <div className="flip-card-back bg-blue-700 text-white rounded-xl shadow-md p-6 flex flex-col">
                      <div className="text-center mb-4">
                        <h3 className="text-xl font-bold">{point.solution.title}</h3>
                      </div>
                      
                      <div className="flex-grow">
                        <p className="text-blue-100 text-sm mb-6">
                          {point.solution.description}
                        </p>
                        
                        <div className="bg-blue-800 p-4 rounded-lg mt-2">
                          <h4 className="font-bold text-sm mb-2">解決問題：</h4>
                          <ul className="list-disc pl-5 text-blue-100 text-sm space-y-1">
                            {point.reasons.map((reason, i) => (
                              <li key={i}>{reason}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <Link 
                        to={point.solution.link} 
                        className="mt-4 w-full bg-white text-blue-700 py-2 px-4 rounded-md text-center text-sm font-medium hover:bg-blue-50 transition-colors"
                      >
                        了解更多方案 <ArrowRight className="inline-block ml-1 h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 數據統計區 - 改為跑馬燈 */}
        <section className="py-12 overflow-hidden">
          <div 
            ref={statsMarqueeRef}
            className="stats-marquee-container bg-white rounded-xl shadow-md py-8 relative"
            onMouseEnter={() => setStatsMarqueeRunning(false)}
            onMouseLeave={() => setStatsMarqueeRunning(true)}
          >
            <div className={`stats-marquee flex ${statsMarqueeRunning ? 'animate-marquee' : ''}`}>
              {/* 第一份數據，確保無縫滾動 */}
              {statisticsData.map((stat, index) => (
                <div key={`stat-1-${index}`} className="stat-item flex-none w-64 px-6 mx-4 text-center">
                  <h3 className={`text-5xl font-bold ${stat.color}`}>{stat.value}</h3>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <p className="text-gray-600">{stat.label}</p>
                    {stat.trend === 'up' ? (
                      <ArrowUpRight className="h-4 w-4 text-green-500" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-blue-500" />
                    )}
                  </div>
                </div>
              ))}
              
              {/* 第二份數據，確保無縫滾動 */}
              {statisticsData.map((stat, index) => (
                <div key={`stat-2-${index}`} className="stat-item flex-none w-64 px-6 mx-4 text-center">
                  <h3 className={`text-5xl font-bold ${stat.color}`}>{stat.value}</h3>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <p className="text-gray-600">{stat.label}</p>
                    {stat.trend === 'up' ? (
                      <ArrowUpRight className="h-4 w-4 text-green-500" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-blue-500" />
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* 漸變遮罩，創造淡入淡出效果 */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10"></div>
          </div>
        </section>

        {/* 我們的服務 - 使用圖標和卡片設計 */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">我們的服務</h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              提供全方位的智慧製造解決方案，從設備監控到數據分析，幫助您實現工業4.0
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-blue-600 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <BarChart2 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">即時設備監控</h3>
                <p className="text-gray-600">
                  整合感測器、機台參數與資料庫，提供設備即時狀態與歷史紀錄查詢，讓您隨時掌握生產狀況。
                </p>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-blue-600 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Cpu className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">AI 品質分析</h3>
                <p className="text-gray-600">
                  運用 AI 模型自動分析毛羽、撚度與溫度資料，提升品管效率與一致性，降低人工檢測的誤差率。
                </p>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-blue-600 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Database className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">工廠整合平台</h3>
                <p className="text-gray-600">
                  多工廠、多設備資訊集中管理，支援瀏覽器、手機與大型監控面板介面，方便遠端監控與管理。
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 產品介紹 - 使用漸層背景和懸浮效果 */}
        <section className="bg-gradient-to-b from-gray-100 to-white py-20 px-4 rounded-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">產品解決方案</h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              根據不同需求，我們提供客製化的解決方案，幫助企業提升生產效率和產品品質
            </p>
          </div>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative">
                <img src="/images/demo/320x210.png" alt="QAI系統" className="w-full h-56 object-cover" />
                <div className="absolute top-0 left-0 bg-blue-700 text-white py-1 px-3 rounded-br-lg">
                  熱門
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">QAI 智能品質監測系統</h3>
                <p className="text-gray-600 mb-4">
                  即時監控紗線張力，避免斷線與品質不穩，適用假撚加工與高速加彈工程。
                </p>
                <Link to="/product/qai">
                  <Button variant="link" className="text-blue-600 hover:text-blue-800 pl-0">
                    了解更多 <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img src="/images/demo/320x210.png" alt="毛羽感測器" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">毛羽感測器</h3>
                <p className="text-gray-600 mb-4">
                  高靈敏毛羽感測器，精確偵測微細毛羽，提升檢驗效率與產品品質。
                </p>
                <Link to="/product/fuzz">
                  <Button variant="link" className="text-blue-600 hover:text-blue-800 pl-0">
                    了解更多 <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img src="/images/demo/320x210.png" alt="控制中心系統" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">控制中心系統</h3>
                <p className="text-gray-600 mb-4">
                  集中管理多台設備，整合各項生產數據，簡化工廠運作流程。
                </p>
                <Link to="/product/center">
                  <Button variant="link" className="text-blue-600 hover:text-blue-800 pl-0">
                    了解更多 <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img src="/images/demo/320x210.png" alt="SI01通訊模組" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">SI01 通訊模組整合</h3>
                <p className="text-gray-600 mb-4">
                  快速接入，將舊有設備升級為智能設備，實現設備間的無縫整合傳輸。
                </p>
                <Link to="/product/si01">
                  <Button variant="link" className="text-blue-600 hover:text-blue-800 pl-0">
                    了解更多 <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button className="bg-blue-700 hover:bg-blue-800 text-white">
                查看所有產品 <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* 試用方案區塊 - 根據第二個輪播頁面內容新增 */}
        <section className="py-16 mt-8 bg-gradient-to-r from-blue-800 to-blue-700 text-white rounded-xl shadow-lg">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">感測器試用方案</h2>
                <p className="text-blue-100 mb-8 text-lg">
                  提供企業14天免費試用，讓您體驗智慧製造的優勢，無需立即投入大量成本。
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-300 mt-1 mr-3 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-800" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>專業技術團隊協助安裝與調試</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-300 mt-1 mr-3 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-800" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>完整教育訓練與技術支援</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-300 mt-1 mr-3 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-800" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>試用期後享有獨家優惠方案</span>
                  </li>
                </ul>
                <Link to="/contact">
                  <Button className="bg-white text-blue-800 hover:bg-blue-100 transition-colors py-3 px-6">
                    立即聯絡我們 <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="hidden lg:block">
                <img 
                  src="/images/demo/sensor-trial.png" 
                  alt="感測器試用方案" 
                  className="rounded-lg shadow-xl"
                  onError={(e) => {
                    e.currentTarget.src = "/images/demo/320x210.png";
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 客戶案例 - 使用灰度背景凸顯品牌標誌 */}
        <section className="py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900">合作夥伴</h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            信任我們的企業夥伴，攜手共創智慧製造的未來
          </p>
        </div>

        <div
          ref={partnersMarqueeRef}
          className="bg-gray-100 py-12 px-6 rounded-xl overflow-hidden relative"
          onMouseEnter={() => setPartnersMarqueeRunning(false)}
          onMouseLeave={() => setPartnersMarqueeRunning(true)}
        >
          <div className={`flex space-x-12 items-center ${partnersMarqueeRunning ? 'animate-marquee' : ''}`}>
            {partners.concat(partners).map((partner, index) => (
              <img
                key={`partner-${index}`}
                src={partner.logo}
                alt={partner.name}
                className="h-12 mx-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>

          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-gray-100 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-gray-100 to-transparent z-10"></div>
        </div>
      </section>

        {/* CTA 區塊 */}
        <section className="bg-blue-900 text-white py-16 px-8 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">需要智慧工廠整合方案？</h2>
          <p className="mb-8 text-blue-100 max-w-2xl mx-auto">
            無論您是想升級現有設備，還是建立全新的智慧工廠系統，我們都能為您提供專業的解決方案。
            立即聯繫我們，獲取免費諮詢！
          </p>
          <Link to="/contact">
            <Button className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-6 rounded-md">
              免費諮詢 <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 mt-20 rounded-t-xl">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            <div>
              <h3 className="text-xl font-bold mb-4">雩華企業</h3>
              <p className="text-gray-400">
                專注於紡織智慧製造領域的領導品牌，提供完整的解決方案，幫助企業轉型升級。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">聯絡資訊</h3>
              <p className="text-gray-400">新北市新店區中正路538巷1號5樓</p>
              <p className="text-gray-400">電話: +886-2-22186363</p>
              <p className="text-gray-400">Email: service@yuhwa.com.tw</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">追蹤我們</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            &copy; 2025 雩華企業有限公司. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}