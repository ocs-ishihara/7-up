import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Counter from '../../components/counter/CounterComponent';

const CounterContainer = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <Counter counter={counter} dispatch={dispatch} />
    </div>
  );
};

export default CounterContainer;
