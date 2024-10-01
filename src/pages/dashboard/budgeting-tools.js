import DashboardLayout from '../../components/DashboardLayout';
import { Line, Pie } from 'react-chartjs-2';
import styles from '../../styles/BudgetingTools.module.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

const BudgetingTools = () => {
  // Line chart data for Expense Tracker
  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Expenses',
        data: [500, 700, 600, 800, 750, 900],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      }
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Expenses',
      },
    },
  };

  // Pie chart data for Savings Goal Tracker
  const pieData = {
    labels: ['Emergency Fund', 'Vacation', 'Education', 'Investments'],
    datasets: [
      {
        data: [30, 20, 25, 25],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Savings Goal Allocation',
      },
    },
  };

  return (
    <DashboardLayout>
      <div className={styles['budgeting-tools']}>
        <h2>Budgeting Tools</h2>
        <p>Explore tools to help you manage your budget effectively.</p>
        <ul>
          <li>Budget Planner</li>
          <li>Expense Tracker (Line Graph)</li>
          <li>Savings Goal Tracker (Pie Chart)</li>
        </ul>

        <div className={styles.charts}>
          <div className="line-chart">
            <Line data={lineData} options={lineOptions} />
          </div>
          <div className="pie-chart">
            <Pie data={pieData} options={pieOptions} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BudgetingTools;
