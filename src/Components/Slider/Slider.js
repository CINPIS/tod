import React from 'react';
import './Slider.css' 
import './Responsive.css'
import image1 from './header-1.png';
import image2 from './header-2.png';
import image3 from './header-3.png';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const Slider = ( {handleOnDragStart} ) => {
    
    return (
        <div className="slider-container-top">
            <div className="titulo-header">
                <h1> Lorem Ipsum </h1>
                <p> Fusce sed pellentesque sapien, 
                    sit amet faucibus dolor.
                </p>
                <a href="index.html#gallery">&#8595;</a>
            </div>
            <AliceCarousel mouseTrackingEnabled>
                <img src={image1} onDragStart={handleOnDragStart}  alt="Imagem Teste" /> 
                <img src={image2} onDragStart={handleOnDragStart}  alt="Imagem Teste" />
                <img src={image3} onDragStart={handleOnDragStart}  alt="Imagem Teste" />
            </AliceCarousel>
            <div className="slide-dots"></div>
        </div>
    );
}

export default Slider;