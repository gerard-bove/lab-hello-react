import imagen1 from './images/Ironhack1.png';
import imagen2 from './images/Ironhack2.png';
import imagen3 from './images/Ironhack3.png';
import imagen4 from './images/Ironhack4.png';
import imagen5 from './images/Ironhack5.png';
import imagen6 from './images/Ironhack6.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <img src={imagen1} className="App-logo" alt="logo" />
          <img src={imagen2} className="App-logo" alt="logo" />
        </nav>
        <h1>Say hello to ReactJS</h1>
        <div className="sentence">
          <p>You will learn how to use 
          the most popular frontend library, 
          and become a super Ninje developer</p>
        </div>
        <button>AWESOME!</button>
      </header>
      <div>
        <div className="container">
          <img src={imagen3} className="declarative" alt="logo" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactiveUIs.</p>
        </div>
        <div className="container">
          <img src={imagen4} className="declarative" alt="logo" />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="container">
          <img src={imagen5} className="declarative" alt="logo" />
          <h2>Single-way</h2>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div className="container">
          <img src={imagen6} className="declarative" alt="logo" />
          <h2>JSX</h2>
          <p>Statically.typed, designed to run on modeern browsers.</p>
        </div>
      </div>
    </div>
  );
}
export default App;
