import DashboardLayout from '../../components/DashboardLayout';
import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const BudgetingTools = () => {
  // State to manage the budget and expenses
  const [budget, setBudget] = useState({
    Housing: 1000,
    Food: 500,
    Transportation: 300,
    Entertainment: 200,
  });

  const [expenses, setExpenses] = useState({
    Housing: 800,
    Food: 400,
    Transportation: 250,
    Entertainment: 180,
  });

  const handleExpenseInput = (category, value) => {
    setExpenses((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  // Calculate total spending and budget
  const totalBudget = Object.values(budget).reduce((acc, val) => acc + val, 0);
  const totalSpent = Object.values(expenses).reduce((acc, val) => acc + val, 0);

  // Data for Spending Insights (Pie Chart)
  const spendingData = {
    labels: Object.keys(expenses),
    datasets: [
      {
        data: Object.values(expenses),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
      },
    ],
  };

  // Function to check if the user is approaching budget limits
  const checkBudgetAlert = (category) => {
    if (expenses[category] >= budget[category] * 0.8) {
      return '⚠️ Approaching Budget';
    }
    if (expenses[category] >= budget[category]) {
      return '❌ Exceeded Budget';
    }
    return '';
  };

  return (
    <DashboardLayout>
      <div className="budgeting-tools">
        <h2>Budgeting Tools</h2>

        {/* Monthly Budget Overview */}
        <section className="monthly-budget">
          <h3>Monthly Budget Overview</h3>
          <div className="budget-grid">
            {Object.keys(budget).map((category, index) => (
              <div key={index} className="budget-item">
                <h4>{category}</h4>
                <p>Budget: ${budget[category]}</p>
                <p>Spent: ${expenses[category]}</p>
                <p>{checkBudgetAlert(category)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Expense Tracker */}
        <section className="expense-tracker">
          <h3>Expense Tracker</h3>
          <form>
            {Object.keys(expenses).map((category, index) => (
              <div key={index} className="form-group">
                <label>{category}:</label>
                <input
                  type="number"
                  value={expenses[category]}
                  onChange={(e) => handleExpenseInput(category, parseInt(e.target.value, 10))}
                />
              </div>
            ))}
          </form>
        </section>

        {/* Spending Insights (Pie Chart) */}
        <section className="spending-insights">
          <h3>Spending Insights</h3>
          <div className="chart-container">
            <Doughnut data={spendingData} width={100} height={100} />
          </div>
        </section>

        {/* Recommended Actions */}
        <section className="recommended-actions">
          <h3>Recommended Actions</h3>
          <p>If you're exceeding your budget in any category, consider adjusting your spending habits or reallocating funds to fit your budget better.</p>
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

        section {
          margin-bottom: 30px;
        }

        .monthly-budget h3,
        .expense-tracker h3,
        .spending-insights h3,
        .recommended-actions h3 {
          margin-bottom: 10px;
        }

        .budget-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr); /* 4 columns */
          gap: 20px;
        }

        .budget-item {
          background-color: #f9f9f9;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .budget-item h4 {
          margin-bottom: 10px;
        }

        .expense-tracker .form-group {
          margin-bottom: 10px;
        }

        .expense-tracker .form-group label {
          display: block;
          margin-bottom: 5px;
        }

        .expense-tracker .form-group input {
          width: 100%;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }

        .spending-insights .chart-container {
          width: 200px;
          height: 200px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .budget-grid {
            grid-template-columns: repeat(2, 1fr); /* 2 columns for smaller screens */
          }
        }

        @media (max-width: 480px) {
          .budget-grid {
            grid-template-columns: 1fr; /* 1 column for very small screens */
          }
        }
      `}</style>
    </DashboardLayout>
  );
};

export default BudgetingTools;
