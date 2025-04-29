
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="pt-20 flex-grow">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;
