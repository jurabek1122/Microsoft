import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import CoruselData from './coruseldata.json';
import image1 from '../img/delevery.png';
import image2 from '../img/kredit.png';

const Corusel = ({ phones }) => {
    return (
        <div className='mt-3'>
            <Carousel variant="dark">
                <Carousel.Item className='corusel-img' style={{backgroundColor: '#f5a056'}}>
                    <img
                    className="d-block"
                    src={image1}
                    alt="First slide"
                    />
                    <Carousel.Caption className='corusel-info'>
                    <h5>O`zbekiston bo`ylab bepul yetkazib berish</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='corusel-img' style={{backgroundColor: '#60f556'}}>
                    <img
                    className="d-block"
                    src={image2}
                    alt="First slide"
                    />
                    <Carousel.Caption className='corusel-info'>
                    <h5>24 oygacha muddatli to`lov</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Corusel;