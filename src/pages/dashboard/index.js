import { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import DepositModal from '../../components/DepositModal';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const DashboardIndex = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentBalance = 1000; // Replace with dynamic data
  const goalProgress = 75; // Percentage

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
        <h2>Savings Overview</h2>

        {/* Current Balance */}
        <div className="balance">
          <h3>Current Balance: ${currentBalance}</h3>
          <div className="progress">
            <h4>Goal Progress: {goalProgress}%</h4>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${goalProgress}%` }}></div>
            </div>
          </div>
        </div>

        {/* Savings Charts Section */}
        <div className="charts-container">
          {/* Savings by Category (Doughnut Chart) */}
          <div className="chart-section">
            <h3>Savings by Category</h3>
            <Doughnut data={categoryData} />
          </div>

          {/* Savings Goal Progress (Doughnut Chart) */}
          <div className="chart-section">
            <h3>Savings Goal Progress</h3>
            <Doughnut data={goalProgressData} />
          </div>

          {/* Savings Over Time (Bar Chart) */}
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

        {/* Add Funds Button */}
        <button className="add-funds" onClick={() => setIsModalOpen(true)}>Add Funds</button>
      </div>

      {/* Deposit Modal */}
      <DepositModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} />

      {/* Styles */}
      <style jsx>{`
        .overview {
          padding: 20px;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        h2, h3 {
          margin-bottom: 20px;
          color: #333;
        }

        .balance {
          margin-bottom: 20px;
        }

        .progress {
          margin-top: 10px;
        }

        .progress-bar {
          background-color: #e0e0e0;
          border-radius: 4px;
          overflow: hidden;
          height: 20px;
        }

        .progress-fill {
          background-color: #4caf50;
          height: 100%;
          transition: width 0.3s;
        }

        .charts-container {
          display: flex;
          justify-content: space-between;
          margin-bottom: 40px;
        }

        .chart-section {
          flex: 1;
          margin: 0 10px;
          padding: 10px;
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .maturity-section {
          margin: 20px 0;
          padding: 10px;
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .recent-transactions {
          margin: 20px 0;
        }

        .transactions-table {
          margin-top: 20px;
          border: 2px solid royalblue;
          border-radius: 8px;
          overflow: hidden;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th, td {
          padding: 10px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }

        th {
          background-color: rgba(75, 192, 192, 0.6);
          color: white;
        }

        tr:hover {
          background-color: #f2f2f2;
        }

        .add-funds {
          padding: 10px 20px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 20px;
          transition: background-color 0.3s;
        }

        .add-funds:hover {
          background-color: #005bb5;
        }

        @media (max-width: 768px) {
          .charts-container {
            flex-direction: column;
          }

          .chart-section {
            margin: 10px 0;
          }
        }
      `}</style>
    </DashboardLayout>
  );
};

export default DashboardIndex;
