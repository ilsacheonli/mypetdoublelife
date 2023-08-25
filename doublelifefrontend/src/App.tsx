import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState("");

    useEffect(() => {
      fetch('/test/hello')
          .then(response => response.text())
          .then(message => {
              setMessage(message);
          });
    },[]);
  return (
    <div className="App">
      hello react!
    </div>
  );
}

export default App;
