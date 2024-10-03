import { useRouter } from 'next/router'; 
import Navbar from './Navbar'; 
import Footer from './Footer'; 

const Layout = ({ children }) => {
  const router = useRouter();

  // Check if the current page is part of the dashboard (including sub-routes)
  const isDashboard = router.pathname.startsWith('/dashboard');

  return (
    <div className="layout-container">
      {/* Conditionally render Navbar */}
      {!isDashboard && <Navbar />}

      <main>{children}</main>

      {/* Always render Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
