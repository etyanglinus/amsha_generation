import DashboardLayout from '../../components/DashboardLayout';
import { FaBell } from 'react-icons/fa'; // Font Awesome Bell icon
import Link from 'next/link';
import { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import DepositModal from '../../components/DepositModal';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const DashboardIndex = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentBalance = 1000; // Replace with dynamic data
  const goalProgress = 75; // Percentage for savings goal progress

  // Recent Transactions
  const recentTransactions = [
    { id: 1, description: 'Deposit', amount: 200, date: '2024-09-25', mode: 'Bank Transfer' },
    { id: 2, description: 'Withdrawal', amount: 50, date: '2024-09-20', mode: 'Credit Card' },
    { id: 3, description: 'Deposit', amount: 150, date: '2024-09-18', mode: 'PayPal' },
    { id: 4, description: 'Withdrawal', amount: 75, date: '2024-09-15', mode: 'Debit Card' },
  ];

  // Savings by Category (Doughnut Chart)
  const categoryData = {
    labels: ['Education', 'Entertainment', 'Emergency', 'Others'],
    datasets: [
      {
        label: 'Savings by Category',
        data: [300, 100, 150, 450],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
      },
    ],
  };

  // Savings Goal Progress (Doughnut Chart)
  const goalProgressData = {
    labels: ['Achieved', 'Remaining'],
    datasets: [
      {
        data: [750, 250], // Example: $750 achieved out of $1000 goal
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  };

  // Savings Over Time (Bar Chart) Data
  const savingsData = {
    labels: ['January', 'February', 'March', 'April', '
const HomePage = () => {
  return (
    <DashboardLayout>
      <div className="home-page">
        {/* Notification Icon */}
        <div className="notification-icon">
          <FaBell size={24} />
        </div>

        <h1>Welcome to Your Dashboard</h1>

        <section className="financial-education-tools">
          <h2>Financial Education Tools</h2>
          <div className="workshops-webinars">
            <h3>Workshops and Webinars</h3>
            <ul>
              <li>
                <h4>Savings and Investment Strategies</h4>
                <p>Join our next webinar on effective savings and investment strategies.</p>
                <button>Join Now</button>
              </li>
              <li>
                <h4>Budgeting 101</h4>
                <p>Learn the basics of budgeting in our recorded session.</p>
                <button>Watch Recording</button>
              </li>
            </ul>
          </div>
          <div className="articles-guides">
            <h3>Articles and Guides</h3>
            <ul>
              <li><Link href="#">How to Save Money Effectively</Link></li>
              <li><Link href="#">Investment Tips for Beginners</Link></li>
              <li><Link href="#">Understanding Budgeting Tools</Link></li>
            </ul>
          </div>
        </section>

        {/* Other sections go here */}

        <style jsx>{`
          .home-page {
            padding: 20px;
          }

          h1 {
            color: #333;
          }

          section {
            margin-bottom: 30px;
          }

          h2 {
            font-size: 28px;
            margin-bottom: 15px;
            color: #4CAF50;
          }

          h3 {
            font-size: 22px;
            margin-bottom: 10px;
          }

          button {
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          button:hover {
            background-color: #45a049;
          }

          ul {
            list-style: none;
            padding-left: 0;
          }

          li {
            margin-bottom: 15px;
          }

          a {
            color: #007bff;
            text-decoration: none;
          }

          a:hover {
            text-decoration: underline;
          }

          /* Notification Icon Styles */
          .notification-icon {
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: #f44336; /* Red color for notifications */
            color: white;
            padding: 10px;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            transition: background-color 0.3s ease;
          }

          .notification-icon:hover {
            background-color: #d32f2f;
          }
        `}</style>
      </div>
    </DashboardLayout>
  );
};

export default HomePage;
