// React 與 hook
import React, { useState, useEffect, useRef } from "react";
// Router
import { Link, useLocation } from "react-router-dom";
// Icons
import { Menu, X, ChevronDown } from "lucide-react";
// i18n
import { useTranslation } from "react-i18next";



const languages = [
  { code: 'zh', label: '繁體中文' },
  { code: 'en', label: 'English' },
  { code: 'ja', label: '日本語' }
];

export default function NavBar({ scrollTargetRef }: { scrollTargetRef?: React.RefObject<HTMLElement> }) {
  const [isOpen, setIsOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation("navbar");
  const location = useLocation();

  const productRef = useRef(null);
  const aboutRef = useRef(null);
  const productTimeoutRef = useRef(null);
  const aboutTimeoutRef = useRef(null);
  const navRef = useRef(null);

useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrolled(currentScrollY > 100);
  };
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // 初始判斷

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);






  useEffect(() => {
    setIsOpen(false);
    setProductOpen(false);
    setAboutOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    return () => {
      if (productTimeoutRef.current) clearTimeout(productTimeoutRef.current);
      if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    };
  }, []);

  const handleProductMouseEnter = () => {
    if (productTimeoutRef.current) clearTimeout(productTimeoutRef.current);
    setProductOpen(true);
  };

  const handleProductMouseLeave = () => {
    productTimeoutRef.current = setTimeout(() => setProductOpen(false), 300);
  };

  const handleAboutMouseEnter = () => {
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    setAboutOpen(true);
  };

  const handleAboutMouseLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => setAboutOpen(false), 300);
  };

  const navLinkStyle = "text-white hover:text-white hover:opacity-80 font-bold text-shadow-sm transition-all duration-300";

  return (
    <nav 
      ref={navRef}
      className={`nav-fixed w-full transition-all duration-500 ease-in-out ${
        scrolled 
		  ? 'bg-black/90 shadow-2xl backdrop-blur-lg' 
		  : 'bg-blue-600'

      }`}
      style={{ top: 0, zIndex: 50 }}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className={`text-3xl font-bold tracking-widest font-poppins transition-all duration-500 ease-in-out transform ${
			  scrolled
				? "gradient-text scale-105"
				: "text-white drop-shadow-md"
			}`}>
			  QAI 雩華企業
			</h1>
        </Link>

        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white hover:text-blue-100 transition-colors duration-300"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-6 text-base md:text-base">
          <Link to="/" className={navLinkStyle}>{t("home")}</Link>

          <div 
            ref={aboutRef}
            className="relative" 
            onMouseEnter={handleAboutMouseEnter} 
            onMouseLeave={handleAboutMouseLeave}
          >
            <div className={`flex items-center cursor-pointer text-white hover:text-white hover:opacity-80 transition-all duration-300 ${location.pathname === '/about' || location.pathname === '/history' ? 'font-bold text-shadow-sm' : ''}`}>
              <span>{t('about')}</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </div>
            {aboutOpen && (
              <div className="absolute left-0 top-full z-50 text-sm rounded-b-md overflow-hidden min-w-[140px] mt-0 animate-in fade-in slide-in-from-top-2 duration-200 bg-white shadow-lg">
                <Link to="/about" className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-700 font-medium transition-colors duration-200">{t('about_company')}</Link>
                <Link to="/history" className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-700 font-medium transition-colors duration-200">{t('about_history')}</Link>
              </div>
            )}
          </div>

          <div 
            ref={productRef}
            className="relative" 
            onMouseEnter={handleProductMouseEnter} 
            onMouseLeave={handleProductMouseLeave}
          >
            <div className={`flex items-center cursor-pointer text-white hover:text-white hover:opacity-80 transition-all duration-300 ${location.pathname === '/services' || location.pathname.startsWith('/product/') ? 'font-bold text-shadow-sm' : ''}`}>
              <span>{t('services')}</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </div>
            {productOpen && (
              <div className="absolute left-0 top-full z-50 text-sm rounded-b-md overflow-hidden min-w-[140px] mt-0 animate-in fade-in slide-in-from-top-2 duration-200 bg-white shadow-lg">
                <Link to="/services" className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-700 font-medium transition-colors duration-200">{t('services_all')}</Link>
                <Link to="/product/qai" className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-700 font-medium transition-colors duration-200">{t('services_qai')}</Link>
                <Link to="/product/fuzz" className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-700 font-medium transition-colors duration-200">{t('services_fuzz')}</Link>
                <Link to="/product/heat" className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-700 font-medium transition-colors duration-200">{t('services_heat')}</Link>
                <Link to="/product/integration" className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-700 font-medium transition-colors duration-200">{t('services_integration')}</Link>
                <Link to="/product/factory" className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-700 font-medium transition-colors duration-200">{t('services_factory')}</Link>
                <Link to="/product/parts" className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-700 font-medium transition-colors duration-200">{t('services_parts')}</Link>
              </div>
            )}
          </div>

          <Link to="/customers" className={navLinkStyle}>{t("customers")}</Link>
          <Link to="/contact" className={navLinkStyle}>{t("contact")}</Link>

          <select
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            className="bg-white text-blue-900 rounded-md px-3 py-1.5 text-sm focus:outline-none hover:bg-blue-50 border-none shadow-sm font-semibold transition-all duration-300"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>{lang.label}</option>
            ))}
          </select>
        </div>
      </div>

      {isOpen && (
        <div className={`md:hidden px-4 pb-4 border-t animate-in slide-in-from-top duration-200 border-gray-700 ${
          scrolled ? 'bg-gray-900' : 'bg-blue-800'
        }`}>
          <div className="space-y-2 pt-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 px-3 rounded-md text-white hover:bg-blue-600 font-bold transition-colors duration-200">{t("home")}</Link>
            <div className="text-sm font-medium px-3 pt-2 text-blue-200">{t("about")}</div>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block py-2 px-3 rounded-md text-white hover:bg-blue-600 transition-colors duration-200">{t('about_company')}</Link>
            <Link to="/history" onClick={() => setIsOpen(false)} className="block py-2 px-3 rounded-md text-white hover:bg-blue-600 transition-colors duration-200">{t('about_history')}</Link>
            <div className="text-sm font-medium px-3 pt-2 text-blue-200">{t("services")}</div>
            <Link to="/services" onClick={() => setIsOpen(false)} className="block py-2 px-3 rounded-md text-white hover:bg-blue-600 transition-colors duration-200">{t('services_all')}</Link>
            <Link to="/product/qai" onClick={() => setIsOpen(false)} className="block py-2 px-3 rounded-md text-white hover:bg-blue-600 transition-colors duration-200">{t('services_qai')}</Link>
            <Link to="/product/fuzz" onClick={() => setIsOpen(false)} className="block py-2 px-3 rounded-md text-white hover:bg-blue-600 transition-colors duration-200">{t('services_fuzz')}</Link>
            <Link to="/product/heat" onClick={() => setIsOpen(false)} className="block py-2 px-3 rounded-md text-white hover:bg-blue-600 transition-colors duration-200">{t('services_heat')}</Link>
            <Link to="/product/integration" onClick={() => setIsOpen(false)} className="block py-2 px-3 rounded-md text-white hover:bg-blue-600 transition-colors duration-200">{t('services_integration')}</Link>
            <Link to="/product/factory" onClick={() => setIsOpen(false)} className="block py-2 px-3 rounded-md text-white hover:bg-blue-600 transition-colors duration-200">{t('services_factory')}</Link>
            <Link to="/product/parts" onClick={() => setIsOpen(false)} className="block py-2 px-3 rounded-md text-white hover:bg-blue-600 transition-colors duration-200">{t('services_parts')}</Link>
            <Link to="/customers" onClick={() => setIsOpen(false)} className="block py-2 px-3 rounded-md text-white hover:bg-blue-600 font-bold transition-colors duration-200">{t("customers")}</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block py-2 px-3 rounded-md text-white hover:bg-blue-600 font-bold transition-colors duration-200">{t("contact")}</Link>
            <div className="pt-2 pb-1">
              <select
                value={i18n.language}
                onChange={(e) => {
                  i18n.changeLanguage(e.target.value);
                  setIsOpen(false);
                }}
                className="w-full bg-white text-blue-900 rounded-md px-3 py-2 focus:outline-none font-medium transition-all duration-300"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>{lang.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}