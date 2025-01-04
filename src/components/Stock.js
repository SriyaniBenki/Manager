import React, { useState } from 'react';
import './Stock.css';

const Stock = () => {
  const [stockTransactions, setStockTransactions] = useState([
    { id: 1, productId: 1, quantity: 5, type: 'in' },
    { id: 2, productId: 2, quantity: 3, type: 'out' },
  ]);
  const [transactionFormVisible, setTransactionFormVisible] = useState(false);
  const [newTransaction, setNewTransaction] = useState({ productId: '', quantity: 0, type: 'in' });

  const handleAddTransaction = () => {
    const newId = stockTransactions.length + 1;
    setStockTransactions([...stockTransactions, { ...newTransaction, id: newId }]);
    setNewTransaction({ productId: '', quantity: 0, type: 'in' });
    setTransactionFormVisible(false);
  };

  const handleDeleteTransaction = (id) => {
    setStockTransactions(stockTransactions.filter(transaction => transaction.id !== id));
  };

  return (
    <div>
      <h2>Stock Transactions</h2>
      <button onClick={() => setTransactionFormVisible(!transactionFormVisible)}>
        {transactionFormVisible ? 'Cancel' : 'Add Transaction'}
      </button>

      {transactionFormVisible && (
        <div>
          <input
            type="number"
            placeholder="Product ID"
            value={newTransaction.productId}
            onChange={(e) => setNewTransaction({ ...newTransaction, productId: e.target.value })}
          />
          <input
            type="number"
            placeholder="Quantity"
            value={newTransaction.quantity}
            onChange={(e) => setNewTransaction({ ...newTransaction, quantity: parseInt(e.target.value) })}
          />
          <select
            value={newTransaction.type}
            onChange={(e) => setNewTransaction({ ...newTransaction, type: e.target.value })}
          >
            <option value="in">In</option>
            <option value="out">Out</option>
          </select>
          <button onClick={handleAddTransaction}>Add Transaction</button>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Quantity</th>
            <th>Type</th>
            <th>Actions</th> {/* Add this column for Delete button */}
          </tr>
        </thead>
        <tbody>
          {stockTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.productId}</td>
              <td>{transaction.quantity}</td>
              <td>{transaction.type}</td>
              <td>
                <button onClick={() => handleDeleteTransaction(transaction.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Stock;
