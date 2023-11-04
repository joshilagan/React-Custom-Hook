import './App.css';
// import your custom hook which is the useToggle
import useToggle from './components/useToggle';


function App() {
  // assign useToggle fx to an Array, then grab the state and toggle
  //then put it inside the array, you can assign a different name to it
  //so long as it is in the same place as in the return statement in the useToggle.js
  const [isVisible, toggle] = useToggle()

  
  return (
    <div className="App">
      {/* inside the onClick, call out the toggle fx which came from useToggle custom Hook */}
      <button onClick={toggle}>{isVisible ? "Hide" : "Show"}
      </button>
      {/* use the isVisible to write a conditional statement using && 
      that would display a text if condition is true */}
      {isVisible && <h1>Hidden Text</h1>}
    </div>
  );
}

export default App;
