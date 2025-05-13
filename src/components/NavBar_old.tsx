import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

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

  // 監聽捲動事件
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // 清理事件監聽
    return () => {
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

  return (
    <nav className={`${scrolled ? 'bg-gray-800' : 'bg-blue-700'} sticky top-0 z-50 text-white transition-colors duration-300`}>
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center h-16">
        {/* 公司名稱連結到首頁 */}
        <Link to="/" className="flex items-center">
          <span className={`text-xl font-bold transition-colors ${
            scrolled ? 'text-white hover:text-blue-300' : 'text-blue-900 hover:text-blue-700'
          }`}>雩華企業</span>
        </Link>

        {/* 行動裝置選單按鈕 */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={`transition-colors ${
              scrolled ? 'text-white hover:text-blue-300' : 'text-gray-600 hover:text-blue-700'
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* 桌面版選單 */}
        <div className="hidden md:flex items-center space-x-6 text-sm md:text-base">
          <Link to="/" className={`transition-colors ${
            scrolled 
              ? 'text-white hover:text-blue-300' 
              : 'hover:text-blue-600 text-gray-700'
            } ${location.pathname === '/' ? 'font-medium' : ''}`}
          >
            {t("home")}
          </Link>

          {/* 關於雩華 */}
          <div 
            ref={aboutRef}
            className="relative" 
            onMouseEnter={handleAboutMouseEnter} 
            onMouseLeave={handleAboutMouseLeave}
          >
            <div className={`flex items-center cursor-pointer transition-colors ${
              scrolled 
                ? 'text-white hover:text-blue-300' 
                : 'hover:text-blue-600 text-gray-700'
              } ${location.pathname === '/about' || location.pathname === '/history' ? 'font-medium' : ''}`}
            >
              <span>關於雩華</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </div>
            
            {aboutOpen && (
              <div 
                className={`absolute left-0 top-full z-50 text-sm rounded-md border overflow-hidden min-w-[140px] mt-1 animate-in fade-in slide-in-from-top-2 duration-200 ${
                  scrolled ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
                }`}
                onMouseEnter={handleAboutMouseEnter}
                onMouseLeave={handleAboutMouseLeave}
              >
                <Link 
                  to="/about" 
                  className={`block px-4 py-3 ${scrolled 
                    ? 'text-white hover:bg-gray-600' 
                    : 'text-gray-700 hover:bg-blue-50'
                  } ${location.pathname === '/about' ? 'bg-blue-600 text-white' : ''}`}
                >
                  公司簡介
                </Link>
                <Link 
                  to="/history" 
                  className={`block px-4 py-3 ${scrolled 
                    ? 'text-white hover:bg-gray-600' 
                    : 'text-gray-700 hover:bg-blue-50'
                  } ${location.pathname === '/history' ? 'bg-blue-600 text-white' : ''}`}
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
              className={`flex items-center cursor-pointer transition-colors ${
                scrolled 
                  ? 'text-white hover:text-blue-300' 
                  : 'hover:text-blue-600 text-gray-700'
                } ${location.pathname === '/services' || location.pathname.startsWith('/product/') 
                  ? 'font-medium' : ''}`}
            >
              <span>產品服務</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </div>
            
            {productOpen && (
              <div 
                className={`absolute left-0 top-full z-50 text-sm rounded-md border overflow-hidden min-w-[160px] mt-1 animate-in fade-in slide-in-from-top-2 duration-200 ${
                  scrolled ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
                }`}
                onMouseEnter={handleProductMouseEnter}
                onMouseLeave={handleProductMouseLeave}
              >
                <Link 
                  to="/services" 
                  className={`block px-4 py-3 ${scrolled 
                    ? 'text-white hover:bg-gray-600' 
                    : 'text-gray-700 hover:bg-blue-50'
                  } ${location.pathname === '/services' ? 'bg-blue-600 text-white' : ''}`}
                >
                  所有產品
                </Link>
                <Link 
                  to="/product/qai" 
                  className={`block px-4 py-3 ${scrolled 
                    ? 'text-white hover:bg-gray-600' 
                    : 'text-gray-700 hover:bg-blue-50'
                  } ${location.pathname === '/product/qai' ? 'bg-blue-600 text-white' : ''}`}
                >
                  張力監測系統
                </Link>
                <Link 
                  to="/product/fuzz" 
                  className={`block px-4 py-3 ${scrolled 
                    ? 'text-white hover:bg-gray-600' 
                    : 'text-gray-700 hover:bg-blue-50'
                  } ${location.pathname === '/product/fuzz' ? 'bg-blue-600 text-white' : ''}`}
                >
                  毛羽檢測系統
                </Link>
                <Link 
                  to="/product/heat" 
                  className={`block px-4 py-3 ${scrolled 
                    ? 'text-white hover:bg-gray-600' 
                    : 'text-gray-700 hover:bg-blue-50'
                  } ${location.pathname === '/product/heat' ? 'bg-blue-600 text-white' : ''}`}
                >
                  加熱系統
                </Link>
                <Link 
                  to="/product/integration" 
                  className={`block px-4 py-3 ${scrolled 
                    ? 'text-white hover:bg-gray-600' 
                    : 'text-gray-700 hover:bg-blue-50'
                  } ${location.pathname === '/product/integration' ? 'bg-blue-600 text-white' : ''}`}
                >
                  機台整合
                </Link>
                <Link 
                  to="/product/factory" 
                  className={`block px-4 py-3 ${scrolled 
                    ? 'text-white hover:bg-gray-600' 
                    : 'text-gray-700 hover:bg-blue-50'
                  } ${location.pathname === '/product/factory' ? 'bg-blue-600 text-white' : ''}`}
                >
                  智慧工廠
                </Link>
                <Link 
                  to="/product/parts" 
                  className={`block px-4 py-3 ${scrolled 
                    ? 'text-white hover:bg-gray-600' 
                    : 'text-gray-700 hover:bg-blue-50'
                  } ${location.pathname === '/product/parts' ? 'bg-blue-600 text-white' : ''}`}
                >
                  紡織零組配件
                </Link>
              </div>
            )}
          </div>

          <Link 
            to="/customers" 
            className={`transition-colors ${
              scrolled 
                ? 'text-white hover:text-blue-300' 
                : 'hover:text-blue-600 text-gray-700'
              } ${location.pathname === '/customers' ? 'font-medium' : ''}`}
          >
            {t("customers")}
          </Link>
          
          <Link 
            to="/contact" 
            className={`transition-colors ${
              scrolled 
                ? 'text-white hover:text-blue-300' 
                : 'hover:text-blue-600 text-gray-700'
              } ${location.pathname === '/contact' ? 'font-medium' : ''}`}
          >
            {t("contact")}
          </Link>

          {/* 語言切換 */}
          <select
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            className={`text-gray-700 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
              scrolled ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-50 border-gray-200'
            }`}
          >
            <option value="zh">繁體中文</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>

      {/* 行動裝置選單 */}
      {isOpen && (
        <div className={`md:hidden px-4 pb-4 border-t animate-in slide-in-from-top duration-200 ${
          scrolled ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
        }`}>
          <div className="space-y-2 pt-3">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)} 
              className={`block py-2 px-3 rounded-md ${
                scrolled 
                  ? 'text-white hover:bg-gray-700' 
                  : 'text-gray-700 hover:bg-gray-50'
                } ${location.pathname === '/' ? 'bg-blue-600 text-white' : ''}`}
            >
              {t("home")}
            </Link>
            
            {/* 分類標題 */}
            <div className={`text-sm font-medium px-3 pt-2 ${
              scrolled ? 'text-gray-300' : 'text-gray-500'
            }`}>關於雩華</div>
            
            <Link 
              to="/about" 
              onClick={() => setIsOpen(false)} 
              className={`block py-2 px-3 rounded-md ${
                scrolled 
                  ? 'text-white hover:bg-gray-700' 
                  : 'text-gray-700 hover:bg-gray-50'
                } ${location.pathname === '/about' ? 'bg-blue-600 text-white' : ''}`}
            >
              公司簡介
            </Link>
            <Link 
              to="/history" 
              onClick={() => setIsOpen(false)} 
              className={`block py-2 px-3 rounded-md ${
                scrolled 
                  ? 'text-white hover:bg-gray-700' 
                  : 'text-gray-700 hover:bg-gray-50'
                } ${location.pathname === '/history' ? 'bg-blue-600 text-white' : ''}`}
            >
              歷史沿革
            </Link>
            
            {/* 分類標題 */}
            <div className={`text-sm font-medium px-3 pt-2 ${
              scrolled ? 'text-gray-300' : 'text-gray-500'
            }`}>產品服務</div>
            
            <Link 
              to="/services" 
              onClick={() => setIsOpen(false)} 
              className={`block py-2 px-3 rounded-md ${
                scrolled 
                  ? 'text-white hover:bg-gray-700' 
                  : 'text-gray-700 hover:bg-gray-50'
                } ${location.pathname === '/services' ? 'bg-blue-600 text-white' : ''}`}
            >
              所有產品
            </Link>
            <Link 
              to="/product/qai" 
              onClick={() => setIsOpen(false)} 
              className={`block py-2 px-3 rounded-md ${
                scrolled 
                  ? 'text-white hover:bg-gray-700' 
                  : 'text-gray-700 hover:bg-gray-50'
                } ${location.pathname === '/product/qai' ? 'bg-blue-600 text-white' : ''}`}
            >
              張力監測系統
            </Link>
            <Link 
              to="/product/fuzz" 
              onClick={() => setIsOpen(false)} 
              className={`block py-2 px-3 rounded-md ${
                scrolled 
                  ? 'text-white hover:bg-gray-700' 
                  : 'text-gray-700 hover:bg-gray-50'
                } ${location.pathname === '/product/fuzz' ? 'bg-blue-600 text-white' : ''}`}
            >
              毛羽檢測系統
            </Link>
            <Link 
              to="/product/heat" 
              onClick={() => setIsOpen(false)} 
              className={`block py-2 px-3 rounded-md ${
                scrolled 
                  ? 'text-white hover:bg-gray-700' 
                  : 'text-gray-700 hover:bg-gray-50'
                } ${location.pathname === '/product/heat' ? 'bg-blue-600 text-white' : ''}`}
            >
              加熱系統
            </Link>
            <Link 
              to="/product/integration" 
              onClick={() => setIsOpen(false)} 
              className={`block py-2 px-3 rounded-md ${
                scrolled 
                  ? 'text-white hover:bg-gray-700' 
                  : 'text-gray-700 hover:bg-gray-50'
                } ${location.pathname === '/product/integration' ? 'bg-blue-600 text-white' : ''}`}
            >
              機台整合
            </Link>
            <Link 
              to="/product/factory" 
              onClick={() => setIsOpen(false)} 
              className={`block py-2 px-3 rounded-md ${
                scrolled 
                  ? 'text-white hover:bg-gray-700' 
                  : 'text-gray-700 hover:bg-gray-50'
                } ${location.pathname === '/product/factory' ? 'bg-blue-600 text-white' : ''}`}
            >
              智慧工廠
            </Link>
            <Link 
              to="/product/parts" 
              onClick={() => setIsOpen(false)} 
              className={`block py-2 px-3 rounded-md ${
                scrolled 
                  ? 'text-white hover:bg-gray-700' 
                  : 'text-gray-700 hover:bg-gray-50'
                } ${location.pathname === '/product/parts' ? 'bg-blue-600 text-white' : ''}`}
            >
              紡織零組配件
            </Link>
            
            <Link 
              to="/customers" 
              onClick={() => setIsOpen(false)} 
              className={`block py-2 px-3 rounded-md ${
                scrolled 
                  ? 'text-white hover:bg-gray-700' 
                  : 'text-gray-700 hover:bg-gray-50'
                } ${location.pathname === '/customers' ? 'bg-blue-600 text-white' : ''}`}
            >
              {t("customers")}
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)} 
              className={`block py-2 px-3 rounded-md ${
                scrolled 
                  ? 'text-white hover:bg-gray-700' 
                  : 'text-gray-700 hover:bg-gray-50'
                } ${location.pathname === '/contact' ? 'bg-blue-600 text-white' : ''}`}
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
                className={`w-full rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
                  scrolled ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-50 text-gray-700 border-gray-200'
                }`}
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