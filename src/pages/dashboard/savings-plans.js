import { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import Link from 'next/link';
import { Doughnut } from 'react-chartjs-2';

const SavingsPlans = () => {
  // Dummy data for savings plans
  const plans = [
    { id: 'plan-a', name: 'Emergency Fund', targetAmount: 1000, savedAmount: 750, depositFrequency: 'Monthly' },
    { id: 'plan-b', name: 'Vacation Fund', targetAmount: 500, savedAmount: 300, depositFrequency: 'Weekly' },
    { id: 'plan-c', name: 'Education Fund', targetAmount: 2000, savedAmount: 1200, depositFrequency: 'Monthly' },
    { id: 'plan-d', name: 'New Car', targetAmount: 3000, savedAmount: 1000, depositFrequency: 'Weekly' },
  ];

  // Suggested Savings Plans
  const suggestedPlans = [
    { id: 'suggested-plan-a', name: 'Retirement Fund', targetAmount: 5000, depositFrequency: 'Monthly' },
    { id: 'suggested-plan-b', name: 'Home Renovation Fund', targetAmount: 8000, depositFrequency: 'Monthly' },
  ];

  // Doughnut chart data for visual progress tracking of each plan
  const getPlanProgressData = (plan) => ({
    labels: ['Saved', 'Remaining'],
    datasets: [
      {
        data: [plan.savedAmount, plan.targetAmount - plan.savedAmount],
        backgroundColor: ['#4caf50', '#f44336'],
        hoverBackgroundColor: ['#66bb6a', '#ef5350'],
      },
    ],
  });

  return (
    <DashboardLayout>
      <div className="savings-plans">
        <h2>Savings Plans Overview</h2>

        {/* Active Savings Plans */}
        <div className="plans-grid">
          {plans.map((plan, index) => (
            <div key={index} className="plan-card">
              <h3>{plan.name}</h3>
              <p>Target Amount: ${plan.targetAmount}</p>
              <p>Deposit Frequency: {plan.depositFrequency}</p>
              <div className="progress-section">
                <h4>Progress: ${plan.savedAmount} / ${plan.targetAmount}</h4>
                <Doughnut data={getPlanProgressData(plan)} />
              </div>
              <Link href={`/savings-plans/${plan.id}`} passHref>
                <button className="view-details-btn">View Details</button>
              </Link>
            </div>
          ))}
        </div>

        {/* Create New Plan */}
        <div className="new-plan-section">
          <h3>Create a New Savings Plan</h3>
          <Link href="/create-savings-plan" passHref>
            <button className="create-plan-btn">Create New Plan</button>
          </Link>
        </div>

        {/* Suggested Savings Plans */}
        <div className="suggested-plans">
          <h3>Suggested Savings Plans</h3>
          <div className="suggested-plans-grid">
            {suggestedPlans.map((plan, index) => (
              <div key={index} className="suggested-plan-card">
                <h4>{plan.name}</h4>
                <p>Target Amount: ${plan.targetAmount}</p>
                <p>Deposit Frequency: {plan.depositFrequency}</p>
                <Link href={`/savings-plans/${plan.id}`} passHref>
                  <button className="suggested-plan-btn">Explore Plan</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .savings-plans {
          padding: 20px;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        h2, h3, h4 {
          margin-bottom: 20px;
          color: #333;
        }

        .plans-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .plan-card {
          background-color: #f9f9f9;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          text-align: center;
        }

        .plan-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .plan-card h3 {
          margin-bottom: 10px;
          font-size: 18px;
        }

        .progress-section {
          margin-top: 10px;
        }

        .view-details-btn {
          background-color: #0070f3;
          color: white;
          padding: 10px 15px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 10px;
        }

        .view-details-btn:hover {
          background-color: #005bb5;
        }

        .new-plan-section {
          margin-top: 40px;
        }

        .create-plan-btn {
          background-color: #28a745;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .create-plan-btn:hover {
          background-color: #218838;
        }

        .suggested-plans {
          margin-top: 40px;
        }

        .suggested-plans-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .suggested-plan-card {
          background-color: #f1f1f1;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .suggested-plan-btn {
          background-color: #ffc107;
          color: white;
          padding: 8px 16px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 10px;
        }

        .suggested-plan-btn:hover {
          background-color: #e0a800;
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .plans-grid, .suggested-plans-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </DashboardLayout>
  );
};

export default SavingsPlans;
