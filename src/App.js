import React, { Component } from 'react';
import Header from './components/Header';
import SideNav from './components/SideNav';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SideNav />
        <div className="container">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
