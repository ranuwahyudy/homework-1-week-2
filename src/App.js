import './App.css';
import Button from './components/button';
import MusicList from './components/music-list';
import Song from './components/song';

function App() {
  return (
    <div className="App">
      <div className='music-content'>
        <h1 className='title'>Spotify Clone App</h1>
        {/* <Song /> */}
        <Button />
        <MusicList />
      </div>
    </div>
  );
}

export default App;
