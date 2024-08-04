import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const SalesItems = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');

  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerCity, setCustomerCity] = useState('');

  const addItem = () => {
    const newItem = {
      name: itemName,
      price: parseFloat(itemPrice),
      quantity: parseInt(itemQuantity, 10),
    };
    setItems([...items, newItem]);
    setItemName('');
    setItemPrice('');
    setItemQuantity('');
  };

  const calculateSubtotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const calculateTax = (subtotal) => {
    return (subtotal * 0.10).toFixed(2); // Assuming a 10% tax rate
  };

  const calculateTotal = (subtotal, tax) => {
    return (parseFloat(subtotal) + parseFloat(tax)).toFixed(2);
  };

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const currentDate = new Date().toLocaleDateString();
  const invoiceNumber = '001'; // This can be dynamically generated if needed
  const subtotal = calculateSubtotal();
  const tax = calculateTax(subtotal);
  const total = calculateTotal(subtotal, tax);

  return (
    <div className="sales-container">
      <h1 className="main-heading">Sales & Invoice</h1>
      <div className="add-item-box">
        <h2 className="section-heading">Add Item</h2>
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Item Price"
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Item Quantity"
          value={itemQuantity}
          onChange={(e) => setItemQuantity(e.target.value)}
        />
        <button onClick={addItem}>Add Item</button>
      </div>

      <div className="invoice-section">
        <h2 className="section-heading">Customer Info</h2>
        <input
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Customer Address"
          value={customerAddress}
          onChange={(e) => setCustomerAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Customer City, ST ZIP"
          value={customerCity}
          onChange={(e) => setCustomerCity(e.target.value)}
        />
        
        <div className="invoice-box" ref={componentRef}>
          <div className="invoice-header">
            <p>COMPANY NAME</p>
            <p>123 Business Rd., Business City, BC 12345</p>
            <p>Email: info@company.com | Phone: (123) 456-7890</p>
          </div>
          <div className="invoice-title">
            <h2>INVOICE</h2>
          </div>
          <div className="invoice-details">
            <p>Invoice Number: {invoiceNumber}  Date: {currentDate}</p>
          </div>
          <div className="billing-info">
            <p>Bill To:</p>
            <p>{customerName}</p>
            <p>{customerAddress}</p>
            <p>{customerCity}</p>
          </div>
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Qty</th>
                <th>Unit Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="invoice-summary">
            <p>Subtotal: ${subtotal}</p>
            <p>Tax (10%): ${tax}</p>
            <p>Total: ${total}</p>
          </div>
          <div className="invoice-footer">
            <p>Thank you for your business!</p>
          </div>
        </div>

        <button onClick={handlePrint}>Generate Invoice</button>
      </div>

      <style jsx>{`
        .sales-container {
          padding: 20px;
          max-width: 800px;
          margin: auto;
        }

        .main-heading {
          color: lightgreen;
          font-size: 2rem;
          font-weight: bold;
        }

        .add-item-box {
          border: 1px solid #ccc;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 20px;
        }

        .section-heading {
          color: lightgreen;
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .invoice-section {
          border: 1px solid #ccc;
          padding: 20px;
          border-radius: 8px;
          margin-top: 20px;
        }

        .invoice-box {
          margin-top: 20px;
        }

        .invoice-header, .invoice-title, .invoice-details, .billing-info, .invoice-summary, .invoice-footer {
          margin-bottom: 20px;
        }

        .invoice-header p, .invoice-title h2, .invoice-details p, .billing-info p, .invoice-summary p, .invoice-footer p {
          margin: 5px 0;
        }

        .invoice-title h2 {
          color: lightgreen;
          font-size: 1.5rem;
          font-weight: bold;
          text-align: center;
        }

        .invoice-box table {
          width: 100%;
          border-collapse: collapse;
        }

        .invoice-box table, .invoice-box th, .invoice-box td {
          border: 1px solid #ccc;
        }

        .invoice-box th, .invoice-box td {
          padding: 10px;
          text-align: left;
        }

        .invoice-summary p {
          margin: 5px 0;
        }

        .invoice-section input {
          display: block;
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        button {
          margin-top: 20px;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          background-color: #28a745;
          color: #fff;
          cursor: pointer;
        }

        button:hover {
          background-color: #218838;
        }
      `}</style>
    </div>
  );
};

export default SalesItems;
