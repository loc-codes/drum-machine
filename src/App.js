import { useState, useEffect } from "react";
import Display from "./Components/Display";
import Drumpad from "./Components/Drumpad";
import chord1 from "./sound-files/Chord_1.mp3"
import chord2 from "./sound-files/Chord_2.mp3"
import chord3 from "./sound-files/Chord_3.mp3"
import clap from "./sound-files/Clap.mp3"
import closed_hat from "./sound-files/Closed_Hat.mp3"
import kick_n_hat from "./sound-files/Kick_n_Hat.mp3"
import kick from "./sound-files/Kick.mp3"
import open_hat from "./sound-files/Open_Hat.mp3"
import shaker from "./sound-files/Shaker.mp3"


function App() {

  const [display, setDisplay] = useState(() => {return ' '})

  const padPress = (pad,audio) => {
    setDisplay(pad)
  }

  return (
    <div className="App">
      <div id="drum-machine">
        <Display text={display}/>
        <div id="drum-pads-container">
          <Drumpad class="drumpad" id="Q" pressed={padPress} audio={chord1}/>
          <Drumpad class="drumpad" id="W" pressed={padPress} audio={chord2}/>
          <Drumpad class="drumpad" id="E" pressed={padPress} audio={chord3}/>
          <Drumpad class="drumpad" id="A" pressed={padPress} audio={clap}/>
          <Drumpad class="drumpad" id="S" pressed={padPress} audio={closed_hat}/>
          <Drumpad class="drumpad" id="D" pressed={padPress} audio={kick_n_hat}/>
          <Drumpad class="drumpad" id="Z" pressed={padPress} audio={kick}/>
          <Drumpad class="drumpad" id="X" pressed={padPress} audio={open_hat}/>
          <Drumpad class="drumpad" id="C" pressed={padPress} audio={shaker}/>

        </div>
      </div>
    </div>
  );
}

export default App;
