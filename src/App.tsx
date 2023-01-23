import React, { useState } from 'react';
import './App.scss';
import { Login } from './views/login/login';
import { Inventory } from './views/inventory/inventory';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div className="App">
      {isLogged?<Inventory/>:<Login setIsLogged={setIsLogged}/>}
      
    </div>
  );
}

export default App;
