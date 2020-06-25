import React from 'react';
import './Circular.css' 
import './Responsive.css'
import image from './header.png';


const Circular = () => {
    return(
        <div className="second-mainContainer">
            <div className="circle-image">
                <img src={image} alt="Imagem Teste" />
            </div>
            <div className="text">
                <h3>LOREM IPSUM</h3>
                <p>Vestibulum facilisis, urna a pellentesque molestie, ligula metus lobortis ipsum, at cursus risus augue a nisi. Suspendisse risus lorem, varius sed nulla vel, dictum pharetra magna. Suspendisse porttitor nisi ut ex ullamcorper feugiat. </p>
                <p>Quisque eget pharetra leo. Vivamus tempus, erat id dictum convallis, erat quam mattis ex, vel eleifend dolor purus quis ante. Mauris malesuada turpis in elit fermentum, at blandit dui dignissim. In in mi ullamcorper, viverra neque a, tincidunt libero. Morbi nulla arcu, lacinia eget nunc vel, vulputate iaculis felis. </p>
                <p>Nunc consectetur lacus erat, eu scelerisque quam fringilla at. Aliquam ut ornare quam. Curabitur sagittis porta augue, eu convallis neque pharetra ut. Nam et interdum tellus. Nam tempor rutrum elit tempus hendrerit. Morbi suscipit euismod facilisis. Ut bibendum imperdiet arcu sed lacinia. </p>
            </div>
        </div>
    );
}

export default Circular;