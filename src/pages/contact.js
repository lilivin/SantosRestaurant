import React from 'react';
import '../styles/contact.css';

const ProductListPage = () => {
  return (
    <div className="contactSection">
      <h1 className="contactSection__header">Contact</h1>
      <form className="contactForm">
        <h1 className="contactForm__header">Book your table</h1>
        <div className="container">
          <label className="container__label" for="name">Name</label>
          <input className="container__input" type="text" id="name" placeholder="Name..."/>
        </div>
        <div className="container">
          <label className="container__label" for="subname">Subname</label>
          <input className="container__input" type="text" id="subname" placeholder="Subname..."/>
        </div>
        <div className="container">
          <label className="container__label" for="phone">Phone Number</label>
          <input className="container__input" type="text" id="phone" placeholder="Email..."/>
        </div>
        
        <input className="buttonSubmit" type="submit" value="Submit"/>
      </form>
      <div className="contactWays">
        <div className="contactWay">
          <h1 className="contactWay__header">Contact with Us</h1>
          <p>555 555 555</p>
          <p>Santos@gmail.com</p>
        </div>
        <div className="contactWay">
          <h1 className="contactWay__header">Open hours</h1>
          <p>Monday - Saturday: 9:00 - 24:00</p>
          <p>Sunday: 10:00 - 22:00</p>
        </div>
        <div className="contactWay">
          <h1 className="contactWay__header">Visit Us</h1>
          <p>Los Angeles</p>
          <p>1345 E. 6th Street</p>
        </div>
      </div>
    </div>
  );
}

export default ProductListPage;