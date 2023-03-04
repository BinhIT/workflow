import { BrowserRouter as Router, Routers, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>
        <Routers>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routers>
      </div>
    </Router>
  );
}

export default App;
