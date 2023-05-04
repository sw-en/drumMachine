import './App.css';
import * as Tone from "tone";
import React from "react";
import neverMp3 from "./mp3s/never.mp3";

function App() {
  /*function touchStarted() {
    getAudioContext().resume();
  }*/
  const player1 = new Tone.Player().toDestination();
  player1.onstop = () => {
    console.log("player1 stopped");
  }

  const synth = new Tone.Synth().toDestination();
  const now = Tone.now()


  player1.load(neverMp3);
  function player1sample(){
    player1.start();
  }
  function player1stop(){
    player1.stop();
  }

  //functions start

  function readyAudio(){
    Tone.start()
	  console.log('audio is ready')
  }

  function playSound(){
    synth.triggerAttack("D4", now);
    synth.triggerAttack("F4", now + 0.5);
    synth.triggerAttack("A4", now + 1);
    synth.triggerAttack("C4", now + 1.5);
    synth.triggerAttack("E4", now + 2);
    synth.triggerRelease( now + 3);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="glitch" data-text="DRUM MACHINE">
          DRUM MACHINE
        </div>

        <div>       
            <button onClick = {player1stop}>
              Stop
            </button>
            <button onClick = {readyAudio}>
              Ready audio
            </button>
            <button onClick = {playSound}>
              "C4"
            </button>
            <button onClick = {player1sample}>
              rick
            </button>
        </div>
      </header>

      <section id="padContainer" className="pads" mode={props.mode} >
        <div className="pad-row">
          <Pad 
            id="pad1" 
            keyAssignment="Key 1"
            mode={props.mode}
            sound="0"
            
            />
          <Pad 
            id="pad2" 
            keyAssignment="Key 2"
            mode={props.mode}
            sound="1"
            
            />
          <Pad 
            id="pad3" 
            keyAssignment="Key 3"
            mode={props.mode}
            sound="2"
            
            />
          <Pad 
            id="pad4" 
            keyAssignment="Key 4"
            mode={props.mode}
            sound="3"
            
            />
        </div>

        {/* -----Row 2-----*/}

        <div className="pad-row">
          <Pad 
            id="padq" 
            keyAssignment="Key Q"
            mode={props.mode}
            sound="4"
            
            />
          <Pad 
            id="padw" 
            keyAssignment="Key W"
            mode={props.mode}
            sound="5"
            
            />
          <Pad 
            id="pade" 
            keyAssignment="Key E"
            mode={props.mode}
            sound="6"
            
            />
          <Pad 
            id="padr" 
            keyAssignment="Key R"
            mode={props.mode}
            sound="7"
            
            />
        </div>

        {/* -----Row 3-----*/}

        <div className="pad-row">
          <Pad 
            id="pada" 
            keyAssignment="Key A"
            mode={props.mode}
            sound="8"
            
            />
          <Pad 
            id="pads" 
            keyAssignment="Key S"
            mode={props.mode}
            sound="9"
            
            />
          <Pad 
            id="padd" 
            keyAssignment="Key D"
            mode={props.mode}
            sound="10"
            
            />
          <Pad 
            id="padf" 
            keyAssignment="Key F"
            mode={props.mode}
            sound="11"
            
            />
        </div>

        {/* -----Row 4-----*/}

        <div className="pad-row">
          <Pad 
            id="padz" 
            keyAssignment="Key Z"
            mode={props.mode}
            sound="12"
            
            />
          <Pad 
            id="padx" 
            keyAssignment="Key X"
            mode={props.mode}
            sound="13"
            
            />
          <Pad 
            id="padc" 
            keyAssignment="Key C"
            mode={props.mode}
            sound="14"
            
            />
          <Pad 
            id="padv" 
            keyAssignment="Key V"
            mode={props.mode}
            sound="15"
            
            />
        </div>
      </section>
    </div>
  );
}
export default App;
