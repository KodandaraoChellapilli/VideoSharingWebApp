import React from "react";
import type { ReactNode } from "react";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-bgTwo flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-end bg-bgFive p-4 text-white text-lg fixed top-0 w-full z-50">
        <div className="flex items-center gap-6 capitalize">
          <p>Home</p>
          <p>All Videos</p>
          <p>Sign In</p>
        </div>
      </nav>

      {/* Empty main section so background fills the rest */}
      <main className="flex-1 mt-16"></main>
    </div>
  );
};

export default Layout;
