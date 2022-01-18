// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({children}) {

  const [cars, setCars] = useState({
    redCar: false,
    blueCar: false,
    yellowCar: false,
  })

  const [signal, setSignal] = useState({ color: 'red' })

  function moveCar(car, side) { 
    setCars({ ...cars, [car]: side })
  }

  function changeSignal(signalColor) {
    setSignal({
      ...signal, color: signalColor
    });
  };

    return (
      <CarsContext.Provider value={ { cars, signal, moveCar, changeSignal } }>
        {children}
      </CarsContext.Provider>
    );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
