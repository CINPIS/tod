import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import './index.css'
import Slider from './Components/Slider/Slider'
import GridGallery from './Components/GridGallery/GridGallery'
import Circular from './Components/Circular/Circular'
import AccordionDot from './Components/Accordion/Accordion'
import FormDot from './Components/Form/Form'
import Footer from './Components/Footer/Footer'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    
    this.setState({value: event.target.value});  
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  } 

    render(){
    return (
      <div>
        <Slider 
          buttonsDisabled={true}
        />
        <GridGallery />

        <Circular />
        <AccordionDot />
        <FormDot 
          onChange={this.handleChange}
          value={this.state.value}
          handleSubmit={this.handleSubmit}
        />
        <Footer />
      </div>
      );
  }
  
}

export default App;
