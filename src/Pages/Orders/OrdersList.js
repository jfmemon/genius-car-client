import React, { useEffect, useState } from 'react';

const OrdersList = ({ order, handleDeleteOrder, handleStatusUpdate }) => {
    const { _id, service, serviceName, price, status} = order; // service = service Id (ekhane bojhar jonno)
    const [orderService, setOrderService] = useState({});

    console.log(orderService);
    useEffect(() => {
        if (service) {
            fetch(`http://localhost:5000/services/${service}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('genius-token')}`
                }
            })
                .then(res => res.json())
                .then(data => setOrderService(data))
                .catch(err => console.error(err))
        }
    }, [service]);

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDeleteOrder(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            <img src={orderService?.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                    </div>
                </div>
            </td>
            <td>
                {price} $
            </td>
            <td>Purple</td>
            <th>
                <button onClick={() => handleStatusUpdate(_id)} className="btn btn-ghost btn-xs">{status ? status : 'Pending'}</button>
            </th>
        </tr>
    );
};

export default OrdersList;