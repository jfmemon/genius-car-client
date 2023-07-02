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
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <OrdersList
                            key={order._id} order={order}
                        ></OrdersList>
                        )}
                </tbody>
            </table>
        </div>
    );
};

export default Orders;
