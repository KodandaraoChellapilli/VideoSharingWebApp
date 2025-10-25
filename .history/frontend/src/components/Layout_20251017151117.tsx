import React from "react";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-bgTwo flex flex-col">
      <nav className="flex items-center bg-bgFive p-4 justify-end md:text-lg border-b border-gray-800 fixed top-0 z-50 w-full">
        <div className="flex items-center gap-4 md:gap-6 capitalize text-white">
          <p>Home</p>
          <p>All Videos</p>
          <p>Sign In</p>
        </div>
      </nav>

      <main className="flex-1 mt-16 text-center">{children}</main>
    </div>
  );
};

export default Layout;
