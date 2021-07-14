import React, { useRef } from 'react';
import { Toggle } from "./Toggle";
import { useTitleInput } from "./hooks/useTitleInput";

const App = () => {
  const [name, setName] = useTitleInput('')
  const ref = useRef();
  
  return (
    <div className="main-wrapper">
      <h1 ref={ref}>Level Up Dishes</h1>
      <Toggle />
      <form onSubmit={(e) => {
        e.preventDefault();
        ref.current.classList.toggle('another-class')
      }}>
        <input type="text" onChange={(e) => {setName(e.target.value)}} value={name} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
