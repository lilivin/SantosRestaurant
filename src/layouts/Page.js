import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import galeria from '../pages/galeria';
import AboutUs from '../pages/aboutUs';
import ErrorPage from '../pages/ErrorPage';
import Contact from '../pages/contact';

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/galeria" component={galeria} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/Contact" component={Contact} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default Page;