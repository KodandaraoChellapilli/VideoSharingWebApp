import React from "react";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header className="min-h-screen bg-bgTwo flex flex-col">
        <nav className="flex items-center bg-bgFive gap-3 md:gap-5 lg:gap-7 captalize"></nav>
      </header>
      <footer>
        <main>{children}</main>
      </footer>
    </div>
  );
};

export default Layout;
