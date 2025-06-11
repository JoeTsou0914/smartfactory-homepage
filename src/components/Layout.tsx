import React, { useRef, useEffect } from "react";
import NavBar from "@/components/NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 50);
  }, []);

  return (
    <>
      <NavBar />
      <main className="min-h-screen">{children}</main>
    </>
  );
}

