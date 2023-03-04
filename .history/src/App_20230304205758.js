import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/routes";
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>
        <Routes>
          {publicRoutes.map(route => {
            return <Routes />
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
