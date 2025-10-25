import React from "react";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-bgTwo flex flex-col">
      {/* Fixed black navbar */}
      <nav className="flex items-center bg-bgFive p-4 justify-end md:text-lg text-white border-b border-gray-600 fixed top-0 z-50 w-full">
        <div className="flex items-center gap-5 capitalize">
          <p>Home</p>
          <p>All Videos</p>
          <p>Sign In</p>
        </div>
      </nav>

      {/* Add margin-top to prevent navbar overlap */}
      <main className="flex-1 flex flex-col items-center justify-center mt-20">
        {children}
      </main>
    </div>
  );
};

export default Layout;
