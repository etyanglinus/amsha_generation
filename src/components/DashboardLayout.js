import Link from 'next/link';
import { useRouter } from 'next/router';

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
          <img src="/logo.png" alt="Logo" /> {/* Logo image source */}
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
          height: 100vh; /* Full height of the viewport */
          margin: 0; /* Remove any default margin */
          padding: 0; /* Remove any default padding */
        }
        .sidebar {
          width: 250px;
          background-color: royalblue; 
          box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); 
          position: fixed; /* Fix the sidebar */
          top: 0; /* Align to the top */
          bottom: 0; /* Align to the bottom */
          display: flex;
          flex-direction: column; /* Align items in a column */
          padding: 0; /* No padding */
          margin: 0; /* No margin */
        }
        .logo {
          text-align: center; /* Center logo */
          margin: 20px 0; /* Margin around the logo */
        }
        .logo img {
          max-width: 80%; /* Logo size can be adjusted */
          height: auto; /* Maintain aspect ratio */
        }
        .content {
          flex-grow: 1;
          padding: 20px;
          margin-left: 250px; /* Ensure content is not hidden behind the sidebar */
        }
        ul {
          list-style-type: none;
          padding: 0;
          flex-grow: 1; /* Allow the list to grow and take available space */
        }
        li {
          margin-bottom: 10px;
        }
        a {
          text-decoration: none;
          color: white; /* Links are white */
        }
        a:hover {
          text-decoration: underline;
        }
        .logout {
          padding: 20px; /* Padding around the button */
        }

        button {
          background-color: transparent; /* Transparent button */
          color: white; /* Button text color */
          border: 1px solid white; /* White border */
          border-radius: 5px; /* Rounded corners */
          padding: 10px; /* Padding inside the button */
          cursor: pointer; /* Pointer cursor on hover */
          width: 100%; /* Full width */
        }

        button:hover {
          background-color: white; /* Change background on hover */
          color: royalblue; /* Change text color on hover */
        }
      `}</style>
    </div>
  );
};

export default DashboardLayout;
