import React, { Component } from 'react';
import HeaderAdmin from './HeaderAdmin';
import Footer from '../Footer';

class Admin extends Component {
  render() {
    return (
      <div>
        <HeaderAdmin />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Admin;