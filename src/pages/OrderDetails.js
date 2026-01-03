import React from 'react';
import { useParams } from 'react-router-dom';

const OrderDetails = () => {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Order Details - {id}</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Order Information</h3>
            <p className="text-sm text-gray-600">Order ID: {id}</p>
            <p className="text-sm text-gray-600">Date: January 1, 2023</p>
            <p className="text-sm text-gray-600">Status: Pending</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Customer Information</h3>
            <p className="text-sm text-gray-600">Name: John Doe</p>
            <p className="text-sm text-gray-600">Email: john@example.com</p>
            <p className="text-sm text-gray-600">Phone: +1 (555) 123-4567</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Items</h3>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>Product A - $10.00</li>
              <li>Product B - $20.00</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Total</h3>
            <p className="text-sm text-gray-600">$30.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
