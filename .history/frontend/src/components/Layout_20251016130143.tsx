import React from "react";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header className="min-h-screen bg-bgTwo flex flex-col">
        <nav className="flex items-center bg-bgFive p-4 justify-end md:text-lg border-b-black border-b-[1px] fixed top-0 z-50 w-full text-white">
          <div className="flex items-center bg-bgFive gap-3 md:gap-5 lg:gap-7 capitalize">
            <p>Home</p>
            <p>All Videos</p>
            <p>sign in</p>
          </div>
        </nav>
      </header>
      <footer>
        <main>{children}</main>
      </footer>
    </div>
  );
};

export default Layout;
