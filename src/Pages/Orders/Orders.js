import React, { useContext, useEffect, useState } from 'react';
import OrdersList from './OrdersList';
import { AuthContext } from './../../Contexts/AuthProvider/AuthProvider';

const Orders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/orders?email=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
                .catch(error => {
                    console.error('Error fetching orders:', error);
                    // Handle error state if necessary
                });
        }
    }, [user?.email]);

    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure you want to delete this order?')
        if(proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0) {
                    alert('Order deleted successfully.');
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                }
            })
            
        }
    }

    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Service name</th>
                        <th>Price</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <OrdersList
                            key={order._id} order={order}
                            handleDeleteOrder={handleDeleteOrder}
                        ></OrdersList>
                        )}
                </tbody>
            </table>
        </div>
    );
};

export default Orders;
