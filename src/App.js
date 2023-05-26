import { useState, useEffect, useRef } from "react";
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
import "./App.css"

function App() {

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2vw solid black",
    marginTop: "10vw",
    backgroundColor: "#121212",
    height: "50vw",
  }

  const appStyle ={
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }


  const refs = {
    "Q": useRef(),
    "W": useRef(),
    "E": useRef(),
    "A": useRef(),
    "S": useRef(),
    "D": useRef(),
    "Z": useRef(),
    "X": useRef(),
    "C": useRef()
  };

  const [display, setDisplay] = useState(() => {return 'Press a Button'})

  const padPress = (pad) => {
    setDisplay(pad)
  }

  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown);
    return () => {
      document.removeEventListener('keydown', detectKeyDown);
    };
  }, []);

  const detectKeyDown = (e) => {
    const pad = refs[e.key.toUpperCase()]
    if (pad && pad.current){pad.current.click()}
  }

  return (
    <div className="App" style={appStyle}>
      <div id="drum-machine" style={containerStyle}>
        
        <div id="drum-pads-container">
        <Display id="display" text={display}/>
          <div className="row" id="row1">
          <Drumpad ref={refs.Q} name="Chord 1" class="drum-pad" id="Q" pressed={padPress} audio={chord1}/>
          <Drumpad ref={refs.W} name="Chord 2" class="drum-pad" id="W" pressed={padPress} audio={chord2}/>
          <Drumpad ref={refs.E} name="Chord 3" class="drum-pad" id="E" pressed={padPress} audio={chord3}/>
          </div>
          <div className="row" id="row2">
          <Drumpad ref={refs.A} name="Clap" class="drum-pad" id="A" pressed={padPress} audio={clap}/>
          <Drumpad ref={refs.S} name="Closed Hat" class="drum-pad" id="S" pressed={padPress} audio={closed_hat}/>
          <Drumpad ref={refs.D} name="Kick & Hat" class="drum-pad" id="D" pressed={padPress} audio={kick_n_hat}/>
          </div>
          <div className="row" id="row3">
          <Drumpad ref={refs.Z} name="Kick" class="drum-pad" id="Z" pressed={padPress} audio={kick}/>
          <Drumpad ref={refs.X} name="Open Hat" class="drum-pad" id="X" pressed={padPress} audio={open_hat}/>
          <Drumpad ref={refs.C} name="Shaker" class="drum-pad" id="C" pressed={padPress} audio={shaker}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
