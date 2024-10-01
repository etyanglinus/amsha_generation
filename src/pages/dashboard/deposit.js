import DashboardLayout from '../../components/DashboardLayout';

const Deposit = () => {
  return (
    <DashboardLayout>
      <div className="deposit">
        <h2>Deposit Funds</h2>
        <form>
          <label>
            Amount:
            <input type="number" placeholder="Enter amount" required />
          </label>
          <label>
            Payment Method:
            <select>
              <option value="mpesa">M-Pesa</option>
              <option value="card">Card</option>
              {/* Add more payment methods as needed */}
            </select>
          </label>
          <button type="submit">Deposit</button>
        </form>
        <p>M-Pesa Instructions: Paybill number and account details here...</p>
        <style jsx>{`
          .deposit {
            padding: 20px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }

          h2 {
            margin-bottom: 20px;
          }

          form {
            display: flex;
            flex-direction: column;
          }

          label {
            margin-bottom: 10px;
          }

          input,
          select {
            margin-bottom: 10px;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
          }

          button {
            padding: 10px 20px;
            background-color: #4caf50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
        `}</style>
      </div>
    </DashboardLayout>
  );
};

export default Deposit;
