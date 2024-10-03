import DashboardLayout from '../../components/DashboardLayout';
import Link from 'next/link';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const SavingsPlans = () => {
  // Dummy data for savings plans
  const plans = [
    { id: 'plan-a', name: 'Emergency Fund', targetAmount: 1000, savedAmount: 600, depositFrequency: 'Monthly' },
    { id: 'plan-b', name: 'Vacation Fund', targetAmount: 3000, savedAmount: 1200, depositFrequency: 'Weekly' },
    { id: 'plan-c', name: 'New Car', targetAmount: 5000, savedAmount: 2300, depositFrequency: 'Monthly' },
  ];

  // Function to generate progress data for each plan
  const getPlanProgressData = (plan) => ({
    labels: ['Saved', 'Remaining'],
    datasets: [
      {
        data: [plan.savedAmount, plan.targetAmount - plan.savedAmount],
        backgroundColor: ['#4CAF50', '#E0E0E0'],
        borderWidth: 1,
      },
    ],
  });

  return (
    <DashboardLayout>
      <div className="savings-plans">
        <h2>Savings Plans</h2>
        <div className="plans-grid">
          {plans.map((plan, index) => (
            <Link key={index} href={`/savings-plans/${plan.id}`} passHref>
              <div className="plan-card">
                <h3>{plan.name}</h3>
                <p>Goal: ${plan.targetAmount}</p>
                <p>Deposit Frequency: {plan.depositFrequency}</p>
                <div className="progress-section">
                  <h4>Progress: ${plan.savedAmount} / ${plan.targetAmount}</h4>
                  <div className="chart-container">
                    <Doughnut data={getPlanProgressData(plan)} width={100} height={100} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .savings-plans {
          padding: 20px;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        h2 {
          margin-bottom: 20px;
        }

        .plans-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr); /* 3 columns */
          gap: 20px;
        }

        .plan-card {
          background-color: #f9f9f9;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          cursor: pointer;
        }

        .plan-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .plan-card h3 {
          margin-bottom: 10px;
          font-size: 18px;
        }

        .plan-card p {
          font-size: 14px;
          color: #555;
        }

        .progress-section {
          margin-top: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .chart-container {
          width: 100px;
          height: 100px;
        }

        /* Responsive for smaller screens */
        @media (max-width: 768px) {
          .plans-grid {
            grid-template-columns: repeat(2, 1fr); /* 2 columns for smaller screens */
          }
        }

        @media (max-width: 480px) {
          .plans-grid {
            grid-template-columns: 1fr; /* 1 column for very small screens */
          }
        }
      `}</style>
    </DashboardLayout>
  );
};

export default SavingsPlans;
