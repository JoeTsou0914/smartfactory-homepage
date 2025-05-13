import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import styles from './NavBar.module.css';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  
  // 使用 useRef 追蹤下拉選單的計時器和參考
  const productRef = useRef(null);
  const aboutRef = useRef(null);
  const productTimeoutRef = useRef(null);
  const aboutTimeoutRef = useRef(null);
  const navRef = useRef(null);

  // 監聽捲動事件 - 使用 IntersectionObserver 代替傳統捲動監聽
  useEffect(() => {
    const handleInitialScroll = () => {
      // 初始檢查
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // 立即檢查初始狀態
    handleInitialScroll();

    // 使用 IntersectionObserver 監聽導航欄是否在視口頂部
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 當導航欄不再與視口頂部相交時，設置為滾動狀態
        setScrolled(!entry.isIntersecting);
      },
      { 
        rootMargin: "-1px 0px 0px 0px", // 輕微調整以便更準確檢測
        threshold: 0 
      }
    );

    // 建立一個空元素放在頁面最頂部
    const sentinel = document.createElement("div");
    sentinel.style.height = "1px";
    sentinel.style.position = "absolute";
    sentinel.style.top = "0";
    sentinel.style.left = "0";
    sentinel.style.width = "100%";
    sentinel.style.pointerEvents = "none";
    document.body.prepend(sentinel);

    observer.observe(sentinel);

    // 同時也使用傳統捲動事件作為備份
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 清理
    return () => {
      observer.disconnect();
      document.body.removeChild(sentinel);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 路由變更時關閉選單
  useEffect(() => {
    setIsOpen(false);
    setProductOpen(false);
    setAboutOpen(false);
  }, [location.pathname]);
  
  // 清理計時器
  useEffect(() => {
    return () => {
      if (productTimeoutRef.current) clearTimeout(productTimeoutRef.current);
      if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    };
  }, []);

  // 處理產品選單的顯示和隱藏
  const handleProductMouseEnter = () => {
    if (productTimeoutRef.current) clearTimeout(productTimeoutRef.current);
    setProductOpen(true);
  };

  const handleProductMouseLeave = () => {
    productTimeoutRef.current = setTimeout(() => {
      setProductOpen(false);
    }, 300); // 延遲 300 毫秒關閉
  };
  
  // 處理關於選單的顯示和隱藏
  const handleAboutMouseEnter = () => {
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    setAboutOpen(true);
  };

  const handleAboutMouseLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => {
      setAboutOpen(false);
    }, 300); // 延遲 300 毫秒關閉
  };

  // 強化通用的導航連結樣式
  const navLinkStyle = "text-white hover:text-white hover:opacity-80 font-bold text-shadow-sm text-opacity-100";

  return (
    <nav 
      ref={navRef}
      style={{
        backgroundColor: scrolled ? 'rgb(31, 41, 55)' : 'rgb(29, 78, 216)',
        transition: 'all 0.3s ease-in-out',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}
      className="nav-fixed w-full"
    >
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center h-14">
        {/* 公司名稱連結到首頁 */}
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-white hover:text-blue-100 transition-colors">雩華企業</span>
        </Link>

        {/* 行動裝置選單按鈕 */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white hover:text-blue-100"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* 桌面版選單 */}
        <div className="hidden md:flex items-center space-x-6 text-base md:text-base">
          <Link to="/" className={navLinkStyle}>
            {t("home")}
          </Link>

          {/* 關於雩華 */}
          <div 
            ref={aboutRef}
            className="relative" 
            onMouseEnter={handleAboutMouseEnter} 
            onMouseLeave={handleAboutMouseLeave}
          >
            <div className={`flex items-center cursor-pointer text-white hover:text-white hover:opacity-80 transition-all ${
              location.pathname === '/about' || location.pathname === '/history' ? 'font-bold text-shadow-sm' : ''}`}
            >
              <span>關於雩華</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </div>
            
            {aboutOpen && (
              <div 
                className="absolute left-0 top-full z-50 text-sm rounded-b-md overflow-hidden min-w-[140px] mt-0 animate-in fade-in slide-in-from-top-2 duration-200 bg-white shadow-lg"
                onMouseEnter={handleAboutMouseEnter}
                onMouseLeave={handleAboutMouseLeave}
              >
                <Link 
                  to="/about" 
                  className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-700 font-medium"
                >
                  公司簡介
                </Link>
                <Link 
                  to="/history" 
                  className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-700 font-medium"
                >
                  歷史沿革
                </Link>
              </div>
            )}
          </div>

          {/* 產品服務 */}
          <div 
            ref={productRef}
            className="relative" 
            onMouseEnter={handleProductMouseEnter} 
            onMouseLeave={handleProductMouseLeave}
          >
            <div 
              className={`flex items-center cursor-pointer text-white hover:text-white hover:opacity-80 transition-all ${
                location.pathname === '/services' || location.pathname.startsWith('/product/') 
                  ? 'font-bold text-shadow-sm' : ''}`}
            >
              <span>產品服務</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </div>
            
            {productOpen && (
              <div 
                className="absolute left-0 top-full z-50 text-sm rounded-b-md overflow-hidden min-w-[140px] mt-0 animate-in fade-in slide-in-from-top-2 duration-200 bg-white shadow-lg"
                onMouseEnter={handleProductMouseEnter}
                onMouseLeave={handleProductMouseLeave}
              >
                <Link 
                  to="/services" 
                  className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-700 font-medium"
                >
                  所有產品
                </Link>
                <Link 
                  to="/product/qai" 
                  className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-700 font-medium"
                >
                  張力監測系統
                </Link>
                <Link 
                  to="/product/fuzz" 
                  className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-700 font-medium"
                >
                  毛羽檢測系統
                </Link>
                <Link 
                  to="/product/heat" 
                  className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-700 font-medium"
                >
                  加熱系統
                </Link>
                <Link 
                  to="/product/integration" 
                  className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-700 font-medium"
                >
                  機台整合
                </Link>
                <Link 
                  to="/product/factory" 
                  className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-700 font-medium"
                >
                  智慧工廠
                </Link>
                <Link 
                  to="/product/parts" 
                  className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-700 font-medium"
                >
                  紡織零組配件
                </Link>
              </div>
            )}
          </div>

          <Link 
            to="/customers" 
            className={navLinkStyle}
          >
            {t("customers")}
          </Link>
          
          <Link 
            to="/contact" 
            className={navLinkStyle}
          >
            {t("contact")}
          </Link>

          {/* 語言切換 */}
          <select
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            className="bg-white text-blue-900 rounded-md px-3 py-1.5 text-sm focus:outline-none hover:bg-blue-50 border-none shadow-sm font-semibold"
          >
            <option value="zh">繁體中文</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>

      {/* 行動裝置選單 */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 border-t animate-in slide-in-from-top duration-200 bg-gray-800 border-gray-700">
          <div className="space-y-2 pt-3">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)} 
              className="block py-2 px-3 rounded-md text-white hover:bg-blue-600 font-bold"
            >
              {t("home")}
            </Link>
            
            {/* 分類標題 */}
            <div className="text-sm font-medium px-3 pt-2 text-blue-200">關於雩華</div>
            
            <Link 
              to="/about" 
              onClick={() => setIsOpen(false)} 
              className="block py-2 px-3 rounded-md text-white hover:bg-blue-600"
            >
              公司簡介
            </Link>
            <Link 
              to="/history" 
              onClick={() => setIsOpen(false)} 
              className="block py-2 px-3 rounded-md text-white hover:bg-blue-600"
            >
              歷史沿革
            </Link>
            
            {/* 分類標題 */}
            <div className="text-sm font-medium px-3 pt-2 text-blue-200">產品服務</div>
            
            <Link 
              to="/services" 
              onClick={() => setIsOpen(false)} 
              className="block py-2 px-3 rounded-md text-white hover:bg-blue-600"
            >
              所有產品
            </Link>
            <Link 
              to="/product/qai" 
              onClick={() => setIsOpen(false)} 
              className="block py-2 px-3 rounded-md text-white hover:bg-blue-600"
            >
              張力監測系統
            </Link>
            <Link 
              to="/product/fuzz" 
              onClick={() => setIsOpen(false)} 
              className="block py-2 px-3 rounded-md text-white hover:bg-blue-600"
            >
              毛羽檢測系統
            </Link>
            <Link 
              to="/product/heat" 
              onClick={() => setIsOpen(false)} 
              className="block py-2 px-3 rounded-md text-white hover:bg-blue-600"
            >
              加熱系統
            </Link>
            <Link 
              to="/product/integration" 
              onClick={() => setIsOpen(false)} 
              className="block py-2 px-3 rounded-md text-white hover:bg-blue-600"
            >
              機台整合
            </Link>
            <Link 
              to="/product/factory" 
              onClick={() => setIsOpen(false)} 
              className="block py-2 px-3 rounded-md text-white hover:bg-blue-600"
            >
              智慧工廠
            </Link>
            <Link 
              to="/product/parts" 
              onClick={() => setIsOpen(false)} 
              className="block py-2 px-3 rounded-md text-white hover:bg-blue-600"
            >
              紡織零組配件
            </Link>
            
            <Link 
              to="/customers" 
              onClick={() => setIsOpen(false)} 
              className="block py-2 px-3 rounded-md text-white hover:bg-blue-600 font-bold"
            >
              {t("customers")}
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)} 
              className="block py-2 px-3 rounded-md text-white hover:bg-blue-600 font-bold"
            >
              {t("contact")}
            </Link>
            
            <div className="pt-2 pb-1">
              <select
                value={i18n.language}
                onChange={(e) => {
                  i18n.changeLanguage(e.target.value);
                  setIsOpen(false);
                }}
                className="w-full bg-white text-blue-900 rounded-md px-3 py-2 focus:outline-none font-medium"
              >
                <option value="zh">繁體中文</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}