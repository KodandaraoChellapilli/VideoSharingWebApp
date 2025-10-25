// import React from "react";
// import type { ReactNode } from "react";

// interface LayoutProps {
//   children: ReactNode;
// }

// const Layout: React.FC<LayoutProps> = ({ children }) => {
//   return (
//     <div className="min-h-screen bg-bgTwo flex flex-col">
//       <nav className="flex items-center bg-bgFive p-4 justify-end  md:text-lg border-b-black border-b-[1px] fixed top-0 z-50 w-full text-white">
//         <div className="flex items-center gap-3 md:gap-5 lg:gap-7 capitalize">
//           <p>Home</p>
//           <p>All Videos</p>
//           <p>Sign In</p>
//         </div>
//       </nav>

//       <header></header>

//       <footer>
//         <main>{children}</main>
//       </footer>
//     </div>
//   );
// };

// export default Layout;

import React from "react";
import type { ReactNode } from "react";

interface LayoutProps {
  children?: ReactNode; // optional since we don't need Hello World
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-bgTwo flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center bg-bgFive p-4 justify-end md:text-lg border-b border-black fixed top-0 z-50 w-full text-white">
        <div className="flex items-center gap-3 md:gap-5 lg:gap-7 capitalize">
          <p className="text-white">Home</p>
          <p className="text-white">All Videos</p>
          <p className="text-white">Sign In</p>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 mt-16">{children}</main>

      {/* Footer */}
      <footer className="bg-bgFive text-white text-center py-6 border-t border-black">
        <p className="text-sm">© 2024 My Video Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
