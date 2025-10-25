import React from "react";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-bgTwo flex flex-col">
      {/* Fixed nav bar */}
      <nav className="flex items-center bg-bgFive p-4 md:text-lg border-b-black border-b-[1px] fixed top-0 z-50 w-full text-white">
        <div className="flex items-center gap-3 md:gap-5 lg:gap-7 capitalize">
          <p>Home</p>
          <p>All Videos</p>
          <p>Sign In</p>
        </div>
      </nav>

      {/* Empty header */}
      <header></header>

      {/* Main content */}
      <footer>
        <main className="pt-20">{children}</main>
      </footer>
    </div>
  );
};

export default Layout;
