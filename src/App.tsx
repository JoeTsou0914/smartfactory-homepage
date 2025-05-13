import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import History from "@/pages/History";
import Services from "@/pages/Services";
import Customers from "@/pages/Customers";
import Contact from "@/pages/Contact";
import ProductDetail from "@/pages/ProductDetail";

export default function App() {
  useEffect(() => {
    // 設置真實的視口高度
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    setVH(); // 初始設置
    
    // 監聽視口大小變化
    window.addEventListener('resize', setVH);
    
    // 監聽方向變化（尤其對移動設備重要）
    window.addEventListener('orientationchange', setVH);
    
    return () => {
      window.removeEventListener('resize', setVH);
      window.removeEventListener('orientationchange', setVH);
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/history" element={<Layout><History /></Layout>} />
      <Route path="/services" element={<Layout><Services /></Layout>} />
      <Route path="/customers" element={<Layout><Customers /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />
      <Route path="/product/:id" element={<Layout><ProductDetail /></Layout>} />
    </Routes>
  );
}