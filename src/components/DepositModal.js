import { useState } from 'react';
import Modal from 'react-modal';

const DepositModal = ({ isOpen, onRequestClose }) => {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('M-Pesa');
  const [success, setSuccess] = useState(false);

  const handleDeposit = (e) => {
    e.preventDefault();
    // Simulate deposit logic (you can replace this with actual API call)
    setSuccess(true);
    setTimeout(() => {
      onRequestClose(); // Close modal after a short delay
    }, 2000);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} ariaHideApp={false}>
      <h2>Add Funds</h2>
      <form onSubmit={handleDeposit}>
        <div>
          <label>Amount to Deposit:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Payment Method:</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="M-Pesa">M-Pesa</option>
            <option value="Card">Card</option>
            {/* Add other payment methods as needed */}
          </select>
        </div>
        <div>
          <h4>M-Pesa Instructions</h4>
          <p>Paybill Number: 123456</p>
          <p>Account Number: {amount}</p>
          <p>Follow the prompts in your M-Pesa app to complete the deposit.</p>
        </div>
        <button type="submit">Deposit</button>
      </form>

      {success && (
        <div className="success-message">
          <p>Deposit successful!</p>
          <p>Your new balance is: ${parseFloat(amount).toFixed(2)}</p>
        </div>
      )}

      <style jsx>{`
        /* Modal Styles */
        .success-message {
          margin-top: 20px;
          color: green;
        }
      `}</style>
    </Modal>
  );
};

export default DepositModal;
