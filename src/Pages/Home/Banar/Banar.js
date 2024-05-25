import React, { useState } from 'react';
import './Banar.css';
import { Carousel } from 'react-bootstrap';
import banar1 from '../../../Images/eng-banar/banar2.avif';
import banar2 from '../../../Images/eng-banar/banar1.avif';
import banar3 from '../../../Images/eng-banar/banar3.avif';

const Banar = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='banar-container'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img className='img-style' src={banar1} alt="" />
                    <Carousel.Caption>
                        <h3> Engineer First slide</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='img-style' src={banar2} alt="" />
                    <Carousel.Caption>
                        <h3> Engineer Second slide</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='img-style' src={banar3} alt="" />
                    <Carousel.Caption>
                        <h3>Engineer Third slide</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banar;