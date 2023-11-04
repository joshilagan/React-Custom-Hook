import { useState } from 'react';

//pass an argument to the useToggle hook. argument will be "initialValue = false"
const useToggle = (initialValue = false) => {
    //argument will be passed in to the useState parameter
    const [state, setState] = useState(initialValue);
    
    //write a function here that you dont want to repeat writing multiple times 
    const toggle = () => {
      // change the prev's value to its previous value using "!prev"
        setState((prev) => !prev)
    }
    
  //hooks are meant to handle logic and not UI logic
  //in the custom hook, we don't return a jsx
  //so just return the state variable and the toggle fx
  return [ state, toggle ]
}

export default useToggle