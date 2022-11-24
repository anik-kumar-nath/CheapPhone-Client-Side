import React from 'react';
import img1 from './../../../Assets/Carousel/carousel (1).jpg';
import img2 from './../../../Assets/Carousel/carousel (2).jpg';
import img3 from './../../../Assets/Carousel/carousel (3).jpg';
import img4 from './../../../Assets/Carousel/carousel (4).jpg';
import CarouselItem from './CarouselItem';

const Carousel = () => {
    const carouselData = [
        {
            image: img1,
            prev: 4,
            id: 1,
            next: 2
        },
        {
            image: img2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: img3,
            prev: 2,
            id: 3,
            next: 4
        },
        {
            image: img4,
            prev: 3,
            id: 4,
            next: 1
        },
    ]
    return (
        <div className="carousel">
            {
                carouselData.map(slide => <CarouselItem key={slide.id} slide={slide}></CarouselItem>)
            }
        </div>
    );
};

export default Carousel;