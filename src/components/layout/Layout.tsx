import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StickyCallButton from "./StickyCallButton";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-dark-gradient flex flex-col overflow-x-hidden max-w-full">
      <Navbar />
      <main className="flex-1 pt-20 overflow-x-hidden max-w-full">{children}</main>
      <Footer />
      <StickyCallButton />
    </div>
  );
};

export default Layout;
