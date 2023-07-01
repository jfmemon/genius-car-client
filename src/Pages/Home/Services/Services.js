import React, { useEffect, useState } from 'react';
import ServiceItem from './ServiceItem';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-8'>
            <div className='text-center py-12'>
                <p className='font-bold text-orange-600'>Services</p>
                <h3 className='text-2xl font-semibold'>Our service area</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius cupiditate libero cumque sit ipsam non nulla itaque asperiores incidunt nesciunt!</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28'>
                {
                    services.map(service => <ServiceItem
                        key={service._id}
                        service={service}
                    ></ServiceItem>)
                }
            </div>
        </div>
    );
};

export default Services;