import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-bgTwo flex flex-col">
      {/* Fixed nav bar */}
      <nav className="flex items-center bg-bgFive p-4 justify-end md:text-lg border-b-gray-400 border-b-[1px] fixed top-0 z-50 w-full text-white">
        <div className="flex items-center gap-3 md:gap-5 lg:gap-7 capitalize">
          <p>Home</p>
          <p>All Videos</p>
          <p>Sign In</p>
        </div>
      </nav>

      {/* Empty header for spacing */}
      <header className="h-16"></header>

      {/* Main content */}
      <main className="flex-1 pt-4">{children}</main>

      {/* Footer */}
      <footer className="bg-bgFive text-center py-6 border-t-gray-400 border-t-[1px] text-white">
        <p>Footer content here</p>
      </footer>
    </div>
  );
};

export default Layout;
