import React, { useEffect, useState } from 'react';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    // Example fetch logic
    const fetchedOrders = [
      { id: 1, product: 'Product 1', status: 'Delivered' },
      { id: 2, product: 'Product 2', status: 'In Transit' },
    ];
    setOrders(fetchedOrders);
  };

  return (
    <div>
      <h2>Order History</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            {order.product} - {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;