import React from 'react';
import './GridGallery.css' 
import './Responsive.css'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './img-teste-9.png';
import image2 from './img-teste-8.png';
import image3 from './img-teste-7.png';
import image4 from './img-teste-6.png';
import image5 from './img-teste-5.png';
import image6 from './img-teste-4.png';
import image7 from './img-teste-3.png';
import image8 from './img-teste-2.png';
import image9 from './img-teste.png';


const GridGallery = () => {
    return(
    <div className="slide-grid app" id="app">
        <AliceCarousel>
            <div class="parent-container">
                <div className="item slide"> 
                    <img src={image1} alt="Imagem Teste" />
                    <h2>Lorem Ipsum</h2>
				    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat porta lectus, in hendrerit leo commodo a. In sed auctor nulla, vitae mollis enim. Etiam imperdiet sit amet urna sed tincidunt. Pellentesque vel feugiat diam. Donec accumsan lacus a semper iaculis.  </p>
                </div>
                <div className="item slide"> 
                    <img src={image2} alt="Imagem Teste" />
                    <h2>Lorem Ipsum</h2>
				    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat porta lectus, in hendrerit leo commodo a. In sed auctor nulla, vitae mollis enim. Etiam imperdiet sit amet urna sed tincidunt. Pellentesque vel feugiat diam. Donec accumsan lacus a semper iaculis.  </p>
                </div>
                <div className="item slide"> 
                    <img src={image3} alt="Imagem Teste" /> 
                    <h2>Lorem Ipsum</h2>
				    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat porta lectus, in hendrerit leo commodo a. In sed auctor nulla, vitae mollis enim. Etiam imperdiet sit amet urna sed tincidunt. Pellentesque vel feugiat diam. Donec accumsan lacus a semper iaculis.  </p>     
                </div>
            </div>
            <div class="parent-container">
                <div className="item slide"> 
                    <img src={image4} alt="Imagem Teste" />
                    <h2>Lorem Ipsum</h2>
    				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat porta lectus, in hendrerit leo commodo a. In sed auctor nulla, vitae mollis enim. Etiam imperdiet sit amet urna sed tincidunt. Pellentesque vel feugiat diam. Donec accumsan lacus a semper iaculis.  </p>     
                </div>
                <div className="item slide"> 
                    <img src={image5} alt="Imagem Teste" />  
                    <h2>Lorem Ipsum</h2>
				    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat porta lectus, in hendrerit leo commodo a. In sed auctor nulla, vitae mollis enim. Etiam imperdiet sit amet urna sed tincidunt. Pellentesque vel feugiat diam. Donec accumsan lacus a semper iaculis.  </p>      
                </div>
                <div className="item slide"> 
                    <img src={image6} alt="Imagem Teste" />    
                    <h2>Lorem Ipsum</h2>
				    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat porta lectus, in hendrerit leo commodo a. In sed auctor nulla, vitae mollis enim. Etiam imperdiet sit amet urna sed tincidunt. Pellentesque vel feugiat diam. Donec accumsan lacus a semper iaculis.  </p>
                </div>
            </div>
            <div class="parent-container">
                <div className="item slide"> 
                    <img src={image7} alt="Imagem Teste" />
                    <h2>Lorem Ipsum</h2>
				    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat porta lectus, in hendrerit leo commodo a. In sed auctor nulla, vitae mollis enim. Etiam imperdiet sit amet urna sed tincidunt. Pellentesque vel feugiat diam. Donec accumsan lacus a semper iaculis.  </p>
                </div>
                <div className="item slide"> 
                    <img src={image8} alt="Imagem Teste" />
                    <h2>Lorem Ipsum</h2>
				    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat porta lectus, in hendrerit leo commodo a. In sed auctor nulla, vitae mollis enim. Etiam imperdiet sit amet urna sed tincidunt. Pellentesque vel feugiat diam. Donec accumsan lacus a semper iaculis.  </p>
                </div>
                <div className="item slide">
                    <img src={image9} alt="Imagem Teste" />
                    <h2>Lorem Ipsum</h2>
				    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat porta lectus, in hendrerit leo commodo a. In sed auctor nulla, vitae mollis enim. Etiam imperdiet sit amet urna sed tincidunt. Pellentesque vel feugiat diam. Donec accumsan lacus a semper iaculis.  </p>
                </div>      
            </div>  
        </AliceCarousel>
    </div>
    );
}

export default GridGallery;