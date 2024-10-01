import DashboardLayout from '../../components/DashboardLayout';
import Link from 'next/link';

const SavingsPlans = () => {
  // Dummy data for savings plans
  const plans = [
    { id: 'plan-a', name: 'Plan A', details: 'Details about Plan A' },
    { id: 'plan-b', name: 'Plan B', details: 'Details about Plan B' },
    { id: 'plan-c', name: 'Plan C', details: 'Details about Plan C' },
    { id: 'plan-d', name: 'Plan D', details: 'Details about Plan D' },
    { id: 'plan-e', name: 'Plan E', details: 'Details about Plan E' },
    { id: 'plan-f', name: 'Plan F', details: 'Details about Plan F' },
    { id: 'plan-g', name: 'Plan G', details: 'Details about Plan G' },
    { id: 'plan-h', name: 'Plan H', details: 'Details about Plan H' },
  ];

  return (
    <DashboardLayout>
      <div className="savings-plans">
        <h2>Savings Plans</h2>
        <div className="plans-grid">
          {plans.map((plan, index) => (
            <Link key={index} href={`/savings-plans/${plan.id}`} passHref>
              <div className="plan-card">
                <h3>{plan.name}</h3>
                <p>{plan.details}</p>
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
          grid-template-columns: repeat(4, 1fr); /* 4 columns */
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
