import React from 'react';
import './BannerItem.css';
const BannerItem = ({slide}) => {
    const {id, image, prev, next } = slide;
    return ( 
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-image'>
                <img src={image} className="w-full h-auto rounded-xl" alt='' />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-1">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 right-5 top-1/4">
                <h1 className='text-5xl font-semibold text-white'>
                    Affordable <br />
                    Price For Car <br />
                    Servicing.
                </h1>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 right-5 top-2/4">
                <p className='text-white'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolores quasi unde ducimus laborum, totam corrupti praesentium ad neque officia.
                </p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 right-5 top-3/4">
                <button className="btn btn-error mr-5">Discover more</button>
                <button className="btn btn-outline btn-warning">Latest project</button>
            </div>
        </div>
    );
};

export default BannerItem;