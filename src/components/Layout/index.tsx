import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
   
    return (
      <div className="layout">
        <Navbar />
        <main className="main">{children}</main>
        <Footer />
      </div>
    );
};

export default Layout;