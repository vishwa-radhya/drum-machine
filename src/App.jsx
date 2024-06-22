import './App.scss'
import DrumMachine from './Drum-machine';
import { AudioProvider } from './audio-context';
import { BeatProvider } from './beatName-context';
function App() {

  return (
    <>
    <AudioProvider> 
      <BeatProvider>
        <DrumMachine/>
      </BeatProvider>
    </AudioProvider>
    </>
  )
}

export default App
