import './App.css';
import Button from './components/button';
import Song from './components/song';

function App() {
  return (
    <div className="App">
      <div className='music-content'>
        <Song />
        <Button />
      </div>
    </div>
  );
}

export default App;
