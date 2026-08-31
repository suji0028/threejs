import React from "react";
import Dog from "./components/Dog";
import { Canvas } from "@react-three/fiber";
import "./App.css";

const App = () => {
  return (
    <>
      <main>
        <div className="images">
          <img id='tomorrowland' src="/tommorowland.png" alt="" />
          <img id='navy-pier' src="/navy-pier.png" alt="" />
          <img id='msi-chicago' src="/msi-chicago.png" alt="" />
          <img id='phone' src="/phone.png" alt="" />
          <img id='kikk' src="/kikk.png" alt="" />
          <img id='kennedy' src="/kennedy.png" alt="" />
          <img id='opera' src="/opera.png" alt="" />
        </div>
        <Canvas id="canvas-elem" style={{
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1,
        }}>
          <Dog />
        </Canvas>
        <section id="section1">
          <nav>
            <h3>SUJI</h3>
            <h3>SHOWOFF</h3>
            <h3>MENU</h3>
          </nav>
          <div className="middle">
            <div className="left">
              <h1>WE <br />MAKE <br />GOOD<br />SHIT</h1>
            </div>
            <div className="right"></div>
          </div>
          <div className="bottom">
            <div className="left"></div>
            <div className="right">
              <p>Nobody is gonna hit as hard as life<br /> but it ain't how hard you can hit<br /> It's how hard you can get hit and keep moving forward<br /> That's how winning is done.</p>
            </div>
          </div>
          <div className="firstline"></div>
          <div className="secondline"></div>
        </section>
        <section id="section2">
          <div className="titles">
            <div img-title='tomorrowland' className="title">
              <small>2020 - ONGOING</small>
              <h1>Tomorrowland</h1>
            </div>
            <div img-title='navy-pier' className="title">
              <small>2020 - ONGOING</small>
              <h1>Navy Pier</h1>
            </div>
            <div img-title='msi-chicago' className="title">
              <small>2011</small>
              <h1>Ghost Protocol</h1>
            </div>
            <div img-title='kikk' className="title">
              <small>2020 - ONGOING</small>
              <h1>Costa Rica</h1>
            </div>
            <div img-title='kennedy' className="title">
              <small>2015</small>
              <h1>Rogue Nation</h1>
            </div>
            <div img-title='opera' className="title">
              <small>2020 - ONGOING</small>
              <h1>London</h1>
            </div>
            <div img-title='phone' className="title">
              <small>2023</small>
              <h1>Dead Reckoning</h1>
            </div>
          </div>
        </section>
        <section id="section3">
          <div className="top">
            <div className="left">
              <h3>
                I'm crankin' up on the throttle<br/>
                Victory is mine<br/>
                Show you the harder the battle<br/>
                The harder I fight<br/>
                I've come too far to quit<br/>
                Step back I'm goin' in<br/>
                I'm crankin' up on the throttle<br/>
                This is how legends are made
              </h3>
            </div>
            <div className="right"></div>
          </div>
        </section>
        <section id="section4">
          <div className="bottom">
            <div className="left"></div>
            <div className="right">
              <p>My name is Maximus Decimus Meridius,<br/> commander of the Armies of the North,<br/> General of the Felix Legions and loyal servant <br/>to the true emperor, Marcus Aurelius.</p>
              <p>Sometimes the truth isn't good enough,<br/> sometimes people deserve more.<br/> Sometimes people deserve to have<br/> their faith rewarded.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default App;
