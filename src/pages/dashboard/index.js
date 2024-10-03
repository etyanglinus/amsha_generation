import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const HomePage = () => {
  const [viewOption, setViewOption] = useState('month'); // 'week', 'month', 'year'

  // Dynamic Greeting Based on Time of Day
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  const userName = 'Alex'; // You can get this dynamically from user data
  const greeting = `${getGreeting()}, ${userName}!`;

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

  // Spending by Category (Doughnut Chart) Data
  const spendingData = {
    labels: ['Housing', 'Food', 'Transportation', 'Entertainment'],
    datasets: [
      {
        data: [300, 100, 50, 80],
        backgroundColor: ['#FF5733', '#4CAF50', '#FFC107', '#2196F3'],
      },
    ],
  };

  // Toggle Chart Data based on Timeframe (Week, Month, Year)
  const handleViewChange = (option) => {
    setViewOption(option);
    // You can adjust chart data dynamically based on the selected time frame.
    // For now, we're just showing static data.
  };

  return (
    <DashboardLayout>
      <div className="home-page">
        <header className="header">
          <div className="greeting">
            <h1>{greeting}</h1>
            <img src="/path-to-avatar.jpg" alt="User Avatar" className="avatar" />
          </div>
          <div className="balance">
            <h2>Account Balance</h2>
            <p>Ksh 200,000</p>
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
          <div className="chart-toggle">
            <button onClick={() => handleViewChange('week')}>This Week</button>
            <button onClick={() => handleViewChange('month')}>This Month</button>
            <button onClick={() => handleViewChange('year')}>This Year</button>
          </div>

          <div className="chart-container">
            <h3>Savings Over Time</h3>
            <Bar data={savingsData} options={{ responsive: true, maintainAspectRatio: false }} height={250} />
          </div>

          <div className="chart-container">
            <h3>Spending by Category</h3>
            <Doughnut data={spendingData} options={{ responsive: true, maintainAspectRatio: false }} height={250} />
          </div>
        </section>

        <section className="transactions">
          <h2>Recent Transactions</h2>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Mode of Transaction</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01/10/2024</td>
                <td>10:30 AM</td>
                <td>M-Pesa</td>
                <td>Ksh 5,000</td>
              </tr>
              <tr>
                <td>02/10/2024</td>
                <td>1:15 PM</td>
                <td>Bank Transfer</td>
                <td>Ksh 15,000</td>
              </tr>
              <tr>
                <td>03/10/2024</td>
                <td>3:45 PM</td>
                <td>Credit Card</td>
                <td>Ksh 3,000</td>
              </tr>
            </tbody>
          </table>
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

          .chart-toggle {
            display: flex;
            justify-content: space-around;
            margin-bottom: 20px;
          }

          .chart-toggle button {
            padding: 8px 16px;
            background-color: #2196F3;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          .chart-toggle button:hover {
            background-color: #1976D2;
          }

          .chart-container {
            margin-top: 20px;
            margin-bottom: 30px;
          }

          h3 {
            font-size: 22px;
            margin-bottom: 10px;
          }

          .transactions {
            margin-top: 30px;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }

          table th,
          table td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: center;
          }

          table th {
            background-color: #f4f4f4;
          }
        `}</style>
      </div>
    </DashboardLayout>
  );
};

export default HomePage;
