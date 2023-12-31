import React from 'react';
import person from '../../../Assets/images/about_us/person.jpg';
import parts from '../../../Assets/images/about_us/parts.jpg';

const AboutUs = () => {
    return (
        <div className="hero my-8">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={person} alt='' className="w-2/3 h-full rounded-lg shadow-2xl" />
                    <img src={parts} alt='' className="w-1/2 left-40 top-1/2 border-8 absolute rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <p className='text-1xl font-bold text-red-500'>About Us</p>
                    <h1 className="text-4xl font-bold">We are qualified <br />
                    & of experience <br />
                    in this field.
                    </h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <p className='pb-6'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get more info</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;