import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/routes";
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>
        <Routes>
          {publicRoutes.map(route, index) => {
            const Page = route.component;
          return <Route key={index} path={route.path} element={route.} />
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
