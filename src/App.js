import logo from "./logo.svg";
// import "./App.css";
import HookMqtt from "./components/";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: "#00b96b !important",
          },
        },
      }}
    >
      <div className="App bg-epfc-texture">
        <header className="flex justify-around items-center text-white pb-4 ">
          <img src={logo} className="block h-24 w-auto" alt="logo" />
          <p className="px-4">A simple mqtt client in React Js.</p>
          <a
            className="text-[#61dafb]"
            href="https://github.com/jfbxltest/epfc-mqtt-client"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github repository
          </a>
        </header>
        <HookMqtt />
      </div>
    </ConfigProvider>
  );
}

export default App;
