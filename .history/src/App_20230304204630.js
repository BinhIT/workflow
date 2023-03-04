import { BrowserRouter as Router, Routers, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>
        <Route>
          <Routes path="/" element={<Home />}></Routes>
          <Routes path="/about" element={<About />}></Routes>
        </Route>
      </div>
    </Router>
  );
}

export default App;
