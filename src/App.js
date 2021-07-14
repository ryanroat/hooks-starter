import React, { useState } from 'react';
import { Toggle } from "./Toggle";

const App = () => {

  const [name, setName] = useState('')
  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <Toggle />
      <form onSubmit={(e) => {
        e.preventDefault();
        fromSubmit(name, setName)
      }}>
        <input type="text" onChange={(e) => {setName(e.target.value)}} value={name} />
        <button>Submit</button>
      </form>
    </div>
  );
};

const fromSubmit = (value, setValue) => {
  console.log(`email sent to ${value}`);
  setValue('');
}

export default App;
