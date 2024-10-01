import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image'; // Import Next.js Image component

const DashboardLayout = ({ children }) => {
  const router = useRouter(); // Get the router instance

  // Function to handle logout
  const handleLogout = () => {
    // Here you can add your logout logic (like clearing session)
    // After logout, redirect to the login page
    router.push('/login'); // Redirecting to the login page
  };

  return (
    <div className="dashboard-layout">
      <nav className="sidebar">
        <div className="logo">
          <Image src="/logo.png" alt="Logo" width={200} height={100} /> {/* Replaced <img> with <Image> */}
        </div>
        <ul>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/dashboard/savings-plans">Savings Plans</Link></li>
          <li><Link href="/dashboard/budgeting-tools">Budgeting Tools</Link></li>
          <li><Link href="/dashboard/financial-education">Financial Education</Link></li>
          <li><Link href="/dashboard/profile">Profile</Link></li>
        </ul>
        <div className="logout">
          <button onClick={handleLogout}>Log Out</button>
        </div>
      </nav>
      <main className="content">
        {children}
      </main>
      <style jsx>{`
        .dashboard-layout {
          display: flex;
          height: 100vh;
          margin: 0;
          padding: 0;
        }
        .sidebar {
          width: 250px;
          background-color: royalblue; 
          box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); 
          position: fixed;
          top: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          padding: 0;
          margin: 0;
        }
        .logo {
          text-align: center;
          margin: 20px 0;
        }
        .logo img {
          max-width: 80%;
          height: auto;
        }
        .content {
          flex-grow: 1;
          padding: 20px;
          margin-left: 250px;
        }
        ul {
          list-style-type: none;
          padding: 0;
          flex-grow: 1;
        }
        li {
          margin-bottom: 10px;
        }
        a {
          text-decoration: none;
          color: white;
        }
        a:hover {
          text-decoration: underline;
        }
        .logout {
          padding: 20px;
        }

        button {
          background-color: transparent;
          color: white;
          border: 1px solid white;
          border-radius: 5px;
          padding: 10px;
          cursor: pointer;
          width: 100%;
        }

        button:hover {
          background-color: white;
          color: royalblue;
        }
      `}</style>
    </div>
  );
};

export default DashboardLayout;
