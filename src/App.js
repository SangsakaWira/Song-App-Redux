import React from 'react';
import './App.css';
import SongsList from './components/SongsList'
import SelectedSong from './components/SongSelected'

function App() {
  return (
    <div className="App">
     <SongsList></SongsList>
     <SelectedSong></SelectedSong>
    </div>
  );
}

export default App;
