import React, { useState, useEffect } from 'react';
import "./styles.scss";
import axios from 'axios';
import Nav from './components/Nav';
import PlayersList from './components/PlayersList';

function App() {
  const [playersList, setPlayersList] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    axios
      .get(`http://localhost:5000/api/players`, { signal: signal})
      .then(res => {
        console.log("App: useEffect: res: ", res);
        setPlayersList(res.data);
      })
      .catch(error => console.log('App: useEffect: error: ', error))      

      return function cleanup() {
        abortController.abort();
      }
  }, [])
  return (
    <div className="App">
      <Nav />
      <PlayersList playersList={playersList} />
    </div>
  );
}

export default App;
