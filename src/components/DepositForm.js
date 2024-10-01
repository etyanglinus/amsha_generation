import React, { useState } from 'react';

const DepositForm = () => {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('mpesa');

  const handleDeposit = (e) => {
    e.preventDefault();
    // Handle deposit logic here
    alert(`Deposited Ksh ${amount} via ${paymentMethod}`);
    setAmount('');
  };

  return (
    <div className="deposit-form">
      <h1>Deposit Funds</h1>
      <form onSubmit={handleDeposit}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          required
        />
        <label>
          <input
            type="radio"
            value="mpesa"
            checked={paymentMethod === 'mpesa'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          M-Pesa
        </label>
        <label>
          <input
            type="radio"
            value="card"
            checked={paymentMethod === 'card'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Card
        </label>
        <button type="submit">Deposit</button>
      </form>
      <style jsx>{`
        .deposit-form {
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background-color: #fff;
        }
        input {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        button {
          background-color: #0070f3;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 10px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default DepositForm;
