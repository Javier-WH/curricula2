import "./App.css";

import NameContainer from "./modules/title/socket";
import Body from "./modules/body/body";
import TechList from "./modules/tech/tech";
import Portfolio from "./modules/portafolio/portafolio";


function App() {
  return (
    <div className="App">
      <div id="rectangle-background"></div>
      <div id="rectangle-background2"></div>
      <NameContainer/>
    
      <TechList/>
      <Portfolio/>
      <Body/>
    </div>
  );
}

export default App;
