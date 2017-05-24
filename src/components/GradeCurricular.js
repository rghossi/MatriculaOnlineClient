import React, { Component } from 'react';
import grade1 from './imagens/grade1.png';

class GradeCurricular extends Component {
  render() {
    return (
      <div>
        <div className="section"></div>
        <div className="section"></div>
          <img className="materialboxed" width="1000" alt="gradeCurricular" src={grade1} />
        <div className="section"></div>
        <div className="section"></div>
      </div>
    );
  }
}

export default GradeCurricular;