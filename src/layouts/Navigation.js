import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/navigation.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';

class Navigation extends Component {
  
  state = {
    active: false,
  }

  toogleClass = () => {
    if(window.innerWidth < 1000) {
      let currentState = this.state.active;
      this.setState({active: !currentState});
    }
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.toogleClass} className={this.state.active ? "hamburger--active" : "hamburger"}>
            <span className="hamburger__box">
            <span className="hamburger__inner"></span>
            </span>
        </button>
        <nav className={this.state.active ? 'navigation--active' : 'mainNavigation'}>
          <div className="logoImg">Santos</div>
          <ul className="navigation">
            <li>
              <NavLink onClick={this.toogleClass} to="/" exact="false">Menu</NavLink>
            </li>
            <li>
              <NavLink onClick={this.toogleClass} to="/AboutUs" exact="false">About Us</NavLink>
            </li>
            <li>
              <NavLink onClick={this.toogleClass} to="/Galeria" exact="false">Galeria</NavLink>
            </li>
            <li>
              <NavLink onClick={this.toogleClass} to="/Contact" exact="false">Contact</NavLink>
            </li>
          </ul>
          <div className="socialMedia"><FontAwesomeIcon icon={faFacebook} /><FontAwesomeIcon icon={faInstagram} /></div>
          <div className="adres"> Los Angeles, 1345 E. 6th Street</div>
          <div className="reservation">
            <NavLink onClick={this.toogleClass} to="/Contact" exact="false">Book table</NavLink>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;