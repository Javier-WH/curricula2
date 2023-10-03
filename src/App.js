import "./App.css";

import NameContainer from "./modules/title/socket";
import Body from "./modules/body/body";


function App() {
  return (
    <div className="App">
      <div id="rectangle-background"></div>
      <div id="rectangle-background2"></div>
      <NameContainer/>
      <Body/>
    </div>
  );
}

export default App;
