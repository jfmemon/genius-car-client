import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Orders = () => {
    const {user} = useContext(AuthContext);
    const [orders, setOrders] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[user?.email])

    return (
        <div>
            <h3>You have {orders?.length} orders.</h3>
        </div>
    );
};

export default Orders;