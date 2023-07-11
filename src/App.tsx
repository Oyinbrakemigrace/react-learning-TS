import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Contact from './Pages/Contact';
// import { Person, Country } from './Components/Person';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </Router>
      </Provider>
    </div>
  );
}

export default App;


      