import React, { Component } from 'react';
import grade1 from './imagens/grade1.png';

class GradeCurricular extends Component {
  render() {
    return (
      <div>
        <div className="section"></div>
        <div className="section"></div>
        <img className="materialboxed" alt="gradeCurricular" style={{width: '700'}} src={grade1} />
        <div className="section"></div>
        <div className="section"></div>
      </div>
    );
  }
}

export default GradeCurricular;