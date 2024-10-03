import DashboardLayout from '../../components/DashboardLayout';
import { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const BudgetingTools = () => {
  const [expenses, setExpenses] = useState({
    housing: 0,
    food: 0,
    transportation: 0,
    entertainment: 0,
  });

  const handleExpenseChange = (category, value) => {
    setExpenses({ ...expenses, [category]: value });
  };

  const categories = ['housing', 'food', 'transportation', 'entertainment'];
  
  // Pie chart data
  const chartData = {
    labels: categories,
    datasets: [
      {
        label: 'Spending by Category',
        data: categories.map(category => expenses[category]),
        backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0'],
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
            {categories.map((category) => (
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

        <section className="spending-insights">
          <h3>Spending Insights</h3>
          <div className="chart-container">
            <Pie data={chartData} options={{ responsive: true }} />
          </div>
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
        }

        .category-inputs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .category-input label {
          font-size: 16px;
        }

        .category-input input {
          padding: 10px;
          font-size: 14px;
          width: 100%;
          margin-top: 5px;
        }

        .input-group {
          margin-bottom: 10px;
        }

        .input-group label {
          font-size: 16px;
        }

        .input-group input {
          padding: 10px;
          font-size: 14px;
          width: 100%;
          margin-top: 5px;
        }

        button {
          padding: 10px 20px;
          font-size: 16px;
          background-color: #4caf50;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        button:hover {
          background-color: #45a049;
        }

        .chart-container {
          width: 300px;
          height: 300px;
          margin-top: 20px;
        }

        .spending-insights,
        .budget-alerts,
        .recommended-actions {
          margin-top: 40px;
        }

        .spending-insights h3,
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
            width: 250px;
            height: 250px;
          }
        }
      `}</style>
    </DashboardLayout>
  );
};

export default BudgetingTools;
