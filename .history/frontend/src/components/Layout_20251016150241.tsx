import React from "react";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-bgTwo flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-end bg-bgFive p-4 fixed top-0 z-50 w-full text-white">
        <div className="flex items-center gap-6 capitalize">
          <p>Home</p>
          <p>All Videos</p>
          <p>Sign In</p>
        </div>
      </nav>

      {/* Page Content */}
      <main className="pt-20 px-4">{children}</main>
    </div>
  );
};

export default Layout;
