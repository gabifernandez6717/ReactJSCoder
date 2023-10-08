import { useState } from "react";

const useCounter = (initialValue = 0, stock) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if(count>0 )
    setCount(count-1);
    else count
  };

  const reset = () => {
    setCount(initialValue);
  };

  return { count, increment, decrement, reset };
};

export default useCounter;
