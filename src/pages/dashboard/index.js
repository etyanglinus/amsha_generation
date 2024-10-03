import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { FaBell } from 'react-icons/fa'; // Bell icon for notifications

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const HomePage = () => {
  // Savings Over Time (Bar Chart) Data
  const savingsData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Savings Over Time',
        data: [100, 200, 300, 400, 500],
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        fill: true,
      },
    ],
  };

  // Spending by Category (Pie Chart) Data
  const spendingData = {
    labels: ['Housing', 'Food', 'Transportation', 'Entertainment'],
    datasets: [
      {
        data: [300, 100, 50, 80],
        backgroundColor: ['#FF5733', '#4CAF50', '#FFC107', '#2196F3'],
      },
    ],
  };

  return (
    <DashboardLayout>
      <div className="home-page">
        <header className="header">
          <div className="greeting">
            <h1>Good Morning, Alex!</h1>
            <img src="/path-to-avatar.jpg" alt="User Avatar" className="avatar" />
          </div>
          <div className="balance">
            <h2>Account Balance</h2>
            <p>Ksh 200,000</p>
          </div>
          <div className="notification-icon">
            <FaBell size={24} color="#2196F3" />
            <span className="notification-count">3</span>
          </div>
        </header>

        <section className="quick-actions">
          <div className="action-item">
            <button>Deposit Funds</button>
          </div>
          <div className="action-item">
            <button>Send Money</button>
          </div>
          <div className="action-item">
            <button>Pay Bills</button>
          </div>
          <div className="action-item">
            <button>View Goals</button>
          </div>
        </section>

        <section className="financial-overview">
          <h2>Financial Overview</h2>
          <div className="chart-container">
            <h3>Savings Over Time</h3>
            <Bar data={savingsData} />
          </div>

          <div className="chart-container">
            <h3>Spending by Category</h3>
            <Line data={spendingData} />
          </div>
        </section>

        <style jsx>{`
          .home-page {
            padding: 20px;
            font-family: Arial, sans-serif;
          }

          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 20px;
            border-bottom: 2px solid #f0f0f0;
          }

          .greeting {
            display: flex;
            align-items: center;
          }

          .greeting h1 {
            margin-right: 10px;
            color: #333;
          }

          .avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
          }

          .balance h2 {
            font-size: 22px;
            color: #333;
          }

          .balance p {
            font-size: 24px;
            color: #4CAF50;
            font-weight: bold;
          }

          .notification-icon {
            position: relative;
          }

          .notification-icon .notification-count {
            position: absolute;
            top: -5px;
            right: -5px;
            background-color: red;
            color: white;
            border-radius: 50%;
            padding: 5px;
            font-size: 12px;
          }

          .quick-actions {
            display: flex;
            justify-content: space-around;
            margin-top: 30px;
          }

          .action-item button {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          .action-item button:hover {
            background-color: #45a049;
          }

          .financial-overview h2 {
            font-size: 28px;
            margin-bottom: 15px;
            color: #4CAF50;
          }

          .chart-container {
            margin-top: 20px;
            margin-bottom: 30px;
          }

          h3 {
            font-size: 22px;
            margin-bottom: 10px;
          }
        `}</style>
      </div>
    </DashboardLayout>
  );
};

export default HomePage;
