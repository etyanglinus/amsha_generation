import DashboardLayout from '../../components/DashboardLayout';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const HomePage = () => {
  // Savings Over Time (Bar Chart) Data
  const savingsData = {
    labels: ['January', 'February', 'March', 'April', 'May'],/src/pages/dashboard/index.js
Error: 
  x Unterminated string constant
    ,-[/vercel/path0/src/pages/dashboard/index.js:53:1]
 53 | 
 54 |   // Savings Over Time (Bar Chart) Data
 55 |   const savingsData = {
 56 |     labels: ['January', 'February', 'March', 'April', '
    :                                                       ^
 57 | const HomePage = () => {
 58 |   return (
 59 |     <DashboardLayout>
    `----
  x Expected ',', got 'const'
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
        <h1>Welcome to Your Dashboard</h1>

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

          .chart-container {
            margin-top: 20px;
            margin-bottom: 30px;
          }
        `}</style>
      </div>
    </DashboardLayout>
  );
};

export default HomePage;
