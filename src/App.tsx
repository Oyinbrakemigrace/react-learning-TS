import React from 'react';
import './App.css';
import { Person, Country } from './Components/Person';


function App() {
  return (
    <div className="App">
      <Person 
      name = 'Grace'
      age = {22}
      email = 'grace@email.com'
      isMarried = {false}
      friends = {['Minty', 'Manty', 'Monty']}
      country = {Country.Nigeria}
      />
    </div>
  );
}

export default App;
