import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Navigation';
import Page from './Page';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <main>
            <aside>
              <div className="navigation">{<Navigation />}</div>
            </aside>
            <section className="page">
              {<Page />}
            </section>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
