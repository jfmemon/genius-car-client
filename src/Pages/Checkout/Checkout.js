import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const { title, _id, price } = useLoaderData();
    const {user} = useContext(AuthContext);
    console.log(user)

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phoneNumber.value;
        const email = user?.email;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price: price,
            customer: name,
            phone,
            email,
            message
        }

        fetch('https://genius-car-server-delta-one.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged) {
                form.reset();
                alert('Order placed successfully.');
            }
        })
        .catch(err => console.error(err))
    }

    return (
        <div>
            <form onSubmit={handlePlaceOrder}>
                <h4 className='text-center text-2xl'>Service: {title},<br /> Price: {price} $</h4>
                <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-2 p-5'>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full" />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full" />
                    <input name='phoneNumber' type="number" placeholder="Phone Number" className="input input-bordered w-full" />
                    <input name='email' type="email" defaultValue={user?.email} className="input input-bordered w-full" readOnly/>
                </div>
                <textarea name='message' className="textarea textarea-bordered w-full p-5" placeholder="Write your message"></textarea>
                <div className='text-center m-5'>
                    <input className='btn' type="submit" value="Place your order" />
                </div>
            </form>
        </div>
    );
};

export default Checkout;