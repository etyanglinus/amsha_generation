import DashboardLayout from '../../components/DashboardLayout';
import { useState } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, BarElement, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, BarElement, LinearScale);

const BudgetingTools = () => {
  const [expenses, setExpenses] = useState({
    housing: 500,
    food: 200,
    transportation: 150,
    entertainment: 100,
  });

  const handleExpenseChange = (category, value) => {
    setExpenses({ ...expenses, [category]: value });
  };

  // Pie chart data for spending distribution
  const chartData = {
    labels: ['Housing', 'Food', 'Transportation', 'Entertainment'],
    datasets: [
      {
        data: [expenses.housing, expenses.food, expenses.transportation, expenses.entertainment],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0'],
        hoverBackgroundColor: ['#ff437f', '#298ce0', '#ffb630', '#42b9a5'],
      },
    ],
  };

  // Bar chart data for monthly budget vs actual spending
  const barChartData = {
    labels: ['Housing', 'Food', 'Transportation', 'Entertainment'],
    datasets: [
      {
        label: 'Budgeted',
        data: [600, 250, 200, 150],
        backgroundColor: '#4caf50',
        borderColor: '#388e3c',
        borderWidth: 1,
      },
      {
        label: 'Actual',
        data: [
          expenses.housing,
          expenses.food,
          expenses.transportation,
          expenses.entertainment,
        ],
        backgroundColor: '#ff9800',
        borderColor: '#f57c00',
        borderWidth: 1,
      },
    ],
  };

  return (
    <DashboardLayout>
      <div className="budgeting-tools">
        <h2>Budgeting Tools</h2>

        <section className="monthly-budget-overview">
          <h3>Monthly Budget Overview</h3>
          <div className="category-inputs">
            {['housing', 'food', 'transportation', 'entertainment'].map((category) => (
              <div key={category} className="category-input">
                <label>{category.charAt(0).toUpperCase() + category.slice(1)}</label>
                <input
                  type="number"
                  value={expenses[category]}
                  onChange={(e) => handleExpenseChange(category, parseFloat(e.target.value))}
                  placeholder={`Enter ${category} budget`}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="spending-insights">
          <h3>Spending Insights</h3>
          <div className="chart-container">
            <div className="pie-chart">
              <h4>Spending by Category (Pie Chart)</h4>
              <Pie data={chartData} options={{ responsive: true }} />
            </div>

            <div className="bar-chart">
              <h4>Budget vs Actual Spending (Bar Chart)</h4>
              <Bar data={barChartData} options={{ responsive: true, scales: { y: { beginAtZero: true } } }} />
            </div>
          </div>
        </section>

        <section className="expense-tracker">
          <h3>Expense Tracker</h3>
          <form>
            <div className="input-group">
              <label>Expense Name</label>
              <input type="text" placeholder="Expense description" />
            </div>
            <div className="input-group">
              <label>Amount</label>
              <input type="number" placeholder="Amount" />
            </div>
            <button type="submit">Add Expense</button>
          </form>
        </section>

        <section className="budget-alerts">
          <h3>Budget Alerts</h3>
          <p>If you&apos;re exceeding your budget in any category, consider adjusting your spending habits or reallocating funds to fit your budget better.</p>
        </section>

        <section className="recommended-actions">
          <h3>Recommended Actions</h3>
          <p>If you&apos;re exceeding your budget in any category, consider adjusting your spending habits or reallocating funds to fit your budget better.</p>
        </section>
      </div>

      <style jsx>{`
        .budgeting-tools {
          padding: 20px;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        h2 {
          margin-bottom: 20px;
          color: #333;
        }

        .category-inputs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .category-input label {
          font-size: 16px;
          font-weight: 600;
          color: #333;
        }

        .category-input input {
          padding: 10px;
          font-size: 14px;
          width: 100%;
          margin-top: 5px;
          border-radius: 5px;
          border: 1px solid #ddd;
        }

        .input-group {
          margin-bottom: 20px;
        }

        .input-group label {
          font-size: 16px;
          color: #333;
        }

        .input-group input {
          padding: 10px;
          font-size: 14px;
          width: 100%;
          margin-top: 5px;
          border-radius: 5px;
          border: 1px solid #ddd;
        }

        button {
          padding: 10px 20px;
          font-size: 16px;
          background-color: #4caf50;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 10px;
        }

        button:hover {
          background-color: #45a049;
        }

        .chart-container {
          display: flex;
          justify-content: space-between;
          margin-top: 40px;
        }

        .pie-chart,
        .bar-chart {
          width: 48%;
        }

        .spending-insights h3,
        .expense-tracker h3,
        .budget-alerts h3,
        .recommended-actions h3 {
          font-size: 20px;
          margin-bottom: 15px;
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .category-inputs {
            grid-template-columns: 1fr; /* Single column for small screens */
          }

          .chart-container {
            flex-direction: column;
            align-items: center;
          }

          .pie-chart,
          .bar-chart {
            width: 90%;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </DashboardLayout>
  );
};

export default BudgetingTools;
