import { useRouter } from 'next/router';
import DashboardLayout from '../../components/DashboardLayout';

const PlanDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <DashboardLayout>
      <div className="plan-details">
        <h2>Details for {id}</h2>
        <p>Here you can add more details about {id}.</p>
        <style jsx>{`
          .plan-details {
            padding: 20px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }
        `}</style>
      </div>
    </DashboardLayout>
  );
};

export default PlanDetails;
