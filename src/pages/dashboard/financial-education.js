import DashboardLayout from '../../components/DashboardLayout';

const FinancialEducation = () => {
  return (
    <DashboardLayout>
      <div className="financial-education">
        <h2>Financial Education & Workshops</h2>

        <h3>Upcoming Workshops</h3>
        <div className="workshops">
          <div className="workshop-card">
            <h4>Financial Literacy Basics</h4>
            <p>Date: <strong>10th Oct 2024</strong></p>
            <p>Description: This workshop covers the fundamentals of financial literacy, helping you understand budgeting, saving, and investing.</p>
            <button>RSVP</button>
          </div>
          <div className="workshop-card">
            <h4>Advanced Investment Strategies</h4>
            <p>Date: <strong>15th Oct 2024</strong></p>
            <p>Description: Learn advanced strategies for investing in stocks, bonds, and other assets.</p>
            <button>RSVP</button>
          </div>
          {/* Add more workshops as needed */}
        </div>

        <h3>Resources</h3>
        <div className="resources">
          <ul>
            <li><a href="#">Download Financial Literacy PDF</a></li>
            <li><a href="#">Take our interactive quiz</a></li>
            {/* Add more resources as needed */}
          </ul>
        </div>

        <style jsx>{`
          .financial-education {
            padding: 20px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }

          h2 {
            margin-bottom: 20px;
            text-align: center;
          }

          h3 {
            margin-top: 20px;
            margin-bottom: 10px;
            border-bottom: 2px solid #4caf50;
            padding-bottom: 5px;
          }

          .workshops {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 20px;
          }

          .workshop-card {
            flex: 1 1 300px; /* Adjust to fit cards nicely */
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background-color: #f9f9f9;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
          }

          .workshop-card:hover {
            transform: translateY(-5px);
          }

          .resources {
            margin-top: 20px;
          }

          ul {
            list-style-type: none;
            padding: 0;
          }

          a {
            color: #0070f3;
            text-decoration: none;
          }

          a:hover {
            text-decoration: underline;
          }

          button {
            margin-top: 10px;
            padding: 8px 12px;
            background-color: #4caf50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          button:hover {
            background-color: #45a049;
          }
        `}</style>
      </div>
    </DashboardLayout>
  );
};

export default FinancialEducation;
