import React from 'react';
import image1 from '../../../Assets/images/banner/1.jpg';
import image2 from '../../../Assets/images/banner/2.jpg';
import image3 from '../../../Assets/images/banner/3.jpg';
import image4 from '../../../Assets/images/banner/4.jpg';
import image5 from '../../../Assets/images/banner/5.jpg';
import image6 from '../../../Assets/images/banner/6.jpg';
import BannerItem from './BannerItem';

const Banner = () => {
    const bannerItems = [
        {
            image: image1,
            id: 1,
            prev: 6,
            next: 2
        },
        {
            image: image2,
            id: 2,
            prev: 1,
            next: 3
        },
        {
            image: image3,
            id: 3,
            prev: 2,
            next: 4
        },
        {
            image: image4,
            id: 4,
            prev: 3,
            next: 5
        },
        {
            image: image5,
            id: 5,
            prev: 4,
            next: 6
        },
        {
            image: image6,
            id: 6,
            prev: 5,
            next: 1
        }
    ]
    return (
        <div className="carousel w-full">
            {
                bannerItems.map(slide => <BannerItem 
                key={slide.id}
                slide={slide}
                ></BannerItem>)
            }
        </div>
    );
};

export default Banner;