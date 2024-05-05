import React, { Component } from 'react';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <div>
        <p>Buenas: {good}</p>
        <p>Neutrales: {neutral}</p>
        <p>Malas: {bad}</p>
        <p>Total de revisiones: {total}</p>
        <p>Porcentaje de críticas positivas: {positivePercentage}%</p>
      </div>
    );
  }
}

export default Statistics;
