import './App.css';
import React, { useState, useEffect } from 'react';
import GiphyDisplay from './components/GiphyDisplay';

function App() {
  const [giphyData, setGiphyData] = useState({})
  useEffect(() => {
    const makeApiCall = async () => {
      const giphyUrl = 'https://api.giphy.com/v1/gifs/random?api_key=ZAYJhs5msvR4TT6aYtg5fUTe0Vje5S6c&tag=&rating=g'
      const res = await fetch(giphyUrl);
      const json = await res.json();

      setGiphyData(json);
    }
    makeApiCall();
  }, []);

  const giphyArray = giphyData.data
  

  





  return (
    <div className="App">
      <GiphyDisplay giphy={giphyArray} 
      
      
      />

    </div>
  );
}

export default App;
