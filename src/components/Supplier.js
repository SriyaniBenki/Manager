import React, { useState } from 'react';
import './Supplier.css';


const Supplier = () => {
  // Initialize state for suppliers and form visibility
  const [suppliers, setSuppliers] = useState([
    { id: 1, name: 'Supplier 1', contact: '123-456-7890' },
    { id: 2, name: 'Supplier 2', contact: '987-654-3210' },
  ]);
  
  const [supplierFormVisible, setSupplierFormVisible] = useState(false);
  const [newSupplier, setNewSupplier] = useState({ name: '', contact: '' });

  // Add a new supplier
  const handleAddSupplier = () => {
    const newId = suppliers.length + 1; // Generate new ID
    setSuppliers([...suppliers, { ...newSupplier, id: newId }]); // Add new supplier
    setNewSupplier({ name: '', contact: '' }); // Reset form
    setSupplierFormVisible(false); // Hide form
  };

  // Delete a supplier by id
  const handleDeleteSupplier = (id) => {
    setSuppliers(suppliers.filter(supplier => supplier.id !== id));
  };

  return (
    <div>
      <h2>Supplier Management</h2>
      
      {/* Toggle the Add Supplier form */}
      <button onClick={() => setSupplierFormVisible(!supplierFormVisible)}>
        {supplierFormVisible ? 'Cancel' : 'Add Supplier'}
      </button>

      {/* Supplier form */}
      {supplierFormVisible && (
        <div className="form-container">
          <input 
            type="text" 
            placeholder="Supplier Name"
            value={newSupplier.name}
            onChange={(e) => setNewSupplier({ ...newSupplier, name: e.target.value })}
          />
          <input 
            type="text" 
            placeholder="Contact"
            value={newSupplier.contact}
            onChange={(e) => setNewSupplier({ ...newSupplier, contact: e.target.value })}
          />
          <button onClick={handleAddSupplier}>Add Supplier</button>
        </div>
      )}

      {/* Supplier table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map(supplier => (
            <tr key={supplier.id}>
              <td>{supplier.name}</td>
              <td>{supplier.contact}</td>
              <td>
                <button onClick={() => handleDeleteSupplier(supplier.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Supplier;
