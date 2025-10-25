import React from "react";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header></header>
      <footer>
        <main>{children}</main>
      </footer>
    </div>
  );
};

export default Layout;
