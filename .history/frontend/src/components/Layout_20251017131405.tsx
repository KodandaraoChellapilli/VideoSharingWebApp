import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-bgTwo flex flex-col">
      <nav className="flex items-center bg-bgFive p-4 justify-end md:text-lg border-b-black border-b-[1px] fixed top-0 z-50 w-full text-white">
        <div className="flex items-center gap-3 md:gap-5 lg:gap-7 capitalize">
          <p className="text-white">Home</p>
          <p className="text-white">All Videos</p>
          <p className="text-white">Sign In</p>
        </div>
      </nav>

      <main className="flex-1 mt-16">{children}</main>
    </div>
  );
};

export default Layout;
