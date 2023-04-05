import logo from "./logo.svg";
import "./App.css";
import HookMqtt from "./components/";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>A simple mqtt client in React Js.</p>
        <a
          className="App-link"
          href="https://github.com/jfbxltest/epfc-mqtt-client"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github repository
        </a>
      </header>
      <aside className="hook-mqtt">
        <HookMqtt />
      </aside>
    </div>
  );
}

export default App;
