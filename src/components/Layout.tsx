import React, { useEffect } from "react";
import NavBar from "@/components/NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  // 確保頁面切換時滾動到頂部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="app-container">
      <NavBar />
      <div className="content-container">
        {children}
      </div>
    </div>
  );
}