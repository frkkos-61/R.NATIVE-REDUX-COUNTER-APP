import {DECREMENT, INCREMENT, RESET} from '../actionTypes/countTypes';

const incrementCount = () => {
  return {type: INCREMENT};
};

const decrementCount = () => {
  return {type: DECREMENT};
};

const resetCount = value => {
  return {type: RESET, payload: value};
};

export {incrementCount, decrementCount, resetCount};
