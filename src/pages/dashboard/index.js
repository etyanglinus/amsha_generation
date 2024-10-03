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
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Savings Over Time ($)',
        data: [150, 200, 250, 300, 400, 500],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Savings Overview',
      },
    },
  };

  // Maturity Date Example
  const maturityDate = '2025-12-31'; // Example maturity date

  return (
    <DashboardLayout>
      <div className="overview">
        {/* Header: Welcome Message */}
        <h2>Welcome back, [Username]!</h2>

        {/* Current Balance and Goal Progress */}
        <div className="balance">
          <h3>Current Balance: ${currentBalance}</h3>
          <div className="progress">
            <h4>Goal Progress: {goalProgress}%</h4>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${goalProgress}%` }}></div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <button className="action-btn" onClick={() => setIsModalOpen(true)}>Deposit Funds</button>
          <button className="action-btn">Create Savings Plan</button>
          <button className="action-btn">Refer a Friend</button>
          <button className="action-btn">Check Rewards</button>
        </div>

        {/* Charts: Savings by Category and Goal Progress */}
        <div className="charts-container">
          <div className="chart-section">
            <h3>Savings by Category</h3>
            <Doughnut data={categoryData} />
          </div>
          <div className="chart-section">
            <h3>Savings Goal Progress</h3>
            <Doughnut data={goalProgressData} />
          </div>
          <div className="chart-section">
            <h3>Savings Over Time</h3>
            <Bar data={savingsData} options={options} />
          </div>
        </div>

        {/* Maturity Date */}
        <div className="maturity-section">
          <h3>Maturity Date</h3>
          <p>{maturityDate}</p>
        </div>

        {/* Recent Transactions */}
        <div className="recent-transactions">
          <h4>Recent Transactions</h4>
          <div className="transactions-table">
            <table>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Amount ($)</th>
                  <th>Date</th>
                  <th>Mode of Payment</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map(transaction => (
                  <tr key={transaction.id}>
                    <td>{transaction.description}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.date}</td>
                    <td>{transaction.mode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Deposit Modal */}
        <DepositModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} />
      </div>

      {/* Styles */}
      <style jsx>{`
        .overview {
          padding: 20px;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        h2, h3, h4 {
          color: #333;
        }

        .balance, .quick-actions, .charts-container, .maturity-section, .recent-transactions {
          margin-bottom: 20px;
        }

        .progress-bar {
          background-color: #e0e0e0;
          height: 20px;
          border-radius: 5px;
          margin-top: 10px;
          overflow: hidden;
        }

        .progress-fill {
          background-color: #4caf50;
          height: 100%;
        }

        .quick-actions {
          display: flex;
          justify-content: space-between;
        }

        .action-btn {
          background-color: #0070f3;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .action-btn:hover {
          background-color: #005bb5;
        }

        .charts-container {
          display: flex;
          justify-content: space-between;
        }

        .chart-section {
          flex: 1;
          margin: 0 10px;
        }

        .transactions-table {
          margin-top: 10px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th, td {
          padding: 8px;
          border-bottom: 1px solid #ddd;
        }

        th {
          background-color: #0070f3;
          color: white;
        }

        tr:hover {
          background-color: #f1f1f1;
        }
      `}</style>
    </DashboardLayout>
  );
};

export default DashboardIndex;
