import DashboardLayout from '../../components/DashboardLayout';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const HomePage = () => {
  // Savings Over Time (Bar Chart) Data
  const savingsData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Savings Over Time',
        data: [100, 200, 300, 400, 500],
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        borderColor: '#4CAF50',
        borderWidth: 1,
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
        borderWidth: 1,
      },
    ],
  };

  // Chart options to set the width and height
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <DashboardLayout>
      <div className="home-page">
        <h1>Welcome to Your Dashboard</h1>

        <section className="financial-overview">
          <h2>Financial Overview</h2>

          <div className="charts-container">
            {/* Savings Over Time Bar Chart */}
            <div className="chart-wrapper">
              <h3>Savings Over Time</h3>
              <div className="chart" style={{ width: '200px', height: '200px' }}>
                <Bar data={savingsData} options={chartOptions} />
              </div>
            </div>

            {/* Spending by Category Doughnut Chart */}
            <div className="chart-wrapper">
              <h3>Spending by Category</h3>
              <div className="chart" style={{ width: '200px', height: '200px' }}>
                <Doughnut data={spendingData} options={chartOptions} />
              </div>
            </div>
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

          .charts-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .chart-wrapper {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-right: 20px;
          }

          .chart {
            display: inline-block;
          }

          @media (max-width: 768px) {
            .charts-container {
              flex-direction: column;
              align-items: flex-start;
            }
          }
        `}</style>
      </div>
    </DashboardLayout>
  );
};

export default HomePage;
