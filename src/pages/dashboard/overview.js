import DashboardLayout from '../../components/DashboardLayout';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, LineElement, PointElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, LineElement, PointElement);

const Overview = () => {
  // Sample data for account balance
  const accountBalance = 1200; // Example account balance

  // Savings by Category (Doughnut Chart)
  const categoryData = {
    labels: ['Education', 'Entertainment', 'Emergency', 'Others'],
    datasets: [
      {
        label: 'Savings Breakdown',
        data: [300, 100, 150, 50],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
        hoverOffset: 4,
      },
    ],
  };

  // Savings Goals Progress (Doughnut Chart)
  const goalProgressData = {
    labels: ['Achieved', 'Remaining'],
    datasets: [
      {
        data: [500, 500], // Example: $500 achieved out of $1000 goal
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  };

  // Savings Line Chart Data
  const savingsData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Savings Over Time ($)',
        data: [150, 200, 250, 300, 400, 500],
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 1)',
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  // Maturity Date Example
  const maturityDate = '2025-12-31'; // Example maturity date

  return (
    <DashboardLayout>
      <div className="overview">
        <h2>Account Overview</h2>

        {/* Account Balance */}
        <div className="balance-section">
          <h3>Account Balance</h3>
          <p className="balance">${accountBalance}</p>
        </div>

        {/* Savings by Category (Doughnut Chart) */}
        <div className="chart-section">
          <h3>Savings Breakdown by Category</h3>
          <Doughnut data={categoryData} />
        </div>

        {/* Savings Goal Progress (Doughnut Chart) */}
        <div className="chart-section">
          <h3>Savings Goal Progress</h3>
          <Doughnut data={goalProgressData} />
        </div>

        {/* Savings Over Time (Line Chart) */}
        <div className="chart-section">
          <h3>Savings Over Time</h3>
          <Line data={savingsData} options={{ responsive: true, plugins: { title: { display: true, text: 'Savings Over Time' }, legend: { position: 'top' } } }} />
        </div>

        {/* Maturity Date */}
        <div className="maturity-section">
          <h3>Maturity Date</h3>
          <p>{maturityDate}</p>
        </div>

        {/* Add Funds Button */}
        <button className="add-funds">Add Funds</button>

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
          }

          .balance-section {
            margin-bottom: 40px;
            text-align: center;
          }

          .balance {
            font-size: 2rem;
            font-weight: bold;
            color: #4caf50;
          }

          .chart-section {
            margin-bottom: 40px;
          }

          .maturity-section {
            margin-top: 40px;
            text-align: center;
            font-size: 1.2rem;
            color: #555;
          }

          .add-funds {
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #4caf50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          .add-funds:hover {
            background-color: #45a049;
          }
        `}</style>
      </div>
    </DashboardLayout>
  );
};

export default Overview;
