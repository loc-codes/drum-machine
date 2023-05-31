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

  const [display, setDisplay] = useState('LOC . DRUMS')
  const [activeKey, setActiveKey] = useState(0)
  const [timeoutId, setTimeoutId] = useState(null)

  const padPress = (pad) => {
    clearTimeout(timeoutId); 
    setDisplay(pad);
    const id = setTimeout(() => setDisplay('LOC . DRUMS'), 3000);
    setTimeoutId(id);
  }

  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown);
    return () => {
      document.removeEventListener('keydown', detectKeyDown);
    };
  }, [activeKey,setActiveKey]);

  const detectKeyDown = (e) => {
    const pad = refs[e.key.toUpperCase()]
    if (pad && pad.current){
      pad.current.click()
      setActiveKey(e.key.toUpperCase())
    }
    setTimeout(() => {
      setActiveKey(null)
    }, 200)
  }

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="drum-pads-container">
        <Display id="display" text={display}/>
          <div className="row" id="row1">
            <Drumpad
                setActiveKey={setActiveKey}
                ref={refs.Q}
                name="CHORD 1"
                class="drum-pad"
                id="Q"
                pressed={padPress}
                active={activeKey === 'Q'}
                audio={chord1}
            />
            <Drumpad
                setActiveKey={setActiveKey}
                ref={refs.W}
                name="CHORD 2"
                class="drum-pad"
                id="W"
                pressed={padPress}
                active={activeKey === 'W'}
                audio={chord2}
              />
            <Drumpad
                setActiveKey={setActiveKey}
                ref={refs.E}
                name="CHORD 3"
                class="drum-pad"
                id="E"
                pressed={padPress}
                active={activeKey === 'E'}
                audio={chord3}
            />
          </div>
          <div className="row" id="row2">
            <Drumpad
                setActiveKey={setActiveKey}
                ref={refs.A}
                name="CLAP"
                class="drum-pad"
                id="A"
                pressed={padPress}
                active={activeKey === 'A'}
                audio={clap}
            />
            <Drumpad
                setActiveKey={setActiveKey}
                ref={refs.S}
                name="CLOSED HAT"
                class="drum-pad"
                id="S"
                pressed={padPress}
                active={activeKey === 'S'}
                audio={closed_hat}
            />
            <Drumpad
                setActiveKey={setActiveKey}
                ref={refs.D}
                name="KICK HAT"
                class="drum-pad"
                id="D"
                pressed={padPress}
                active={activeKey === 'D'}
                audio={kick_n_hat}
            />
          </div>
          <div className="row" id="row3">
            <Drumpad
                setActiveKey={setActiveKey}
                ref={refs.Z}
                name="KICK"
                class="drum-pad"
                id="Z"
                pressed={padPress}
                active={activeKey === 'Z'}
                audio={kick}
            />
            <Drumpad
                setActiveKey={setActiveKey}
                ref={refs.X}
                name="OPEN HAT"
                class="drum-pad"
                id="X"
                pressed={padPress}
                active={activeKey === 'X'}
                audio={open_hat}
              />
            <Drumpad
                setActiveKey={setActiveKey}
                ref={refs.C}
                name="SHAKER"
                class="drum-pad"
                id="C"
                pressed={padPress}
                active={activeKey === 'C'}
                audio={shaker}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
