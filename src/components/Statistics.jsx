import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p>Buenas: {good}</p>
      <p>Neutrales: {neutral}</p>
      <p>Malas: {bad}</p>
      <p>Total de revisiones: {total}</p>
      <p>Porcentaje de críticas positivas: {positivePercentage}%</p>
    </div>
  );
};

export default Statistics;
