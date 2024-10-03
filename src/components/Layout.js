import { useRouter } from 'next/router'; // Importing Next.js router to check the current route
import Navbar from './Navbar'; 
import Footer from './Footer'; 

const Layout = ({ children }) => {
  const router = useRouter();

  // Check if the current page is the dashboard
  const isDashboard = router.pathname === '/dashboard';

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
