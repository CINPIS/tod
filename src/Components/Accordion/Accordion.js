import React from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import './Accordion.css' 
import './Responsive.css'
import image from './header.png';

const AccordionDot = () => {
    return(
        <div className="last-mainContainer">
            <Accordion atomic={true}>
                <AccordionItem title="Lorem Ipsum" >
                    <Content />
                </AccordionItem>
                <AccordionItem title="Lorem Ipsum">
                    <Content />
                </AccordionItem>
                <AccordionItem title="Lorem Ipsum">
                    <Content />
                </AccordionItem>
                <AccordionItem title="Lorem Ipsum">
                    <Content />
                </AccordionItem>
            </Accordion>
        </div>
    );
}

const Content = () => (
    <div className="last-maisnContainer">
        <div className="topBorderBox">
            <nav className="window-title">Lorem Ipsum </nav>
            <div className="window">
                <img src={image} alt="Imagem Teste"/>
                <p>
                    Nam diam nisi, vulputate eget ligula ut, efficitur rutrum dui. 
                    In hac habitasse platea dictumst. Praesent gravida fermentum ligula, 
                    vel ullamcorper lacus cursus ut. Donec in velit tristique, dapibus 
                    enim eu, malesuada dui. Class aptent taciti sociosqu ad litora 
                    torquent per conubia nostra, per inceptos himenaeos.
                </p>
            </div>
        </div>
    </div>     
);

export default AccordionDot;