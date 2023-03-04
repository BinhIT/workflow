import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { Defautlayout } from "~/components/Layout";
import { publicRoutes } from "~/routes";
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = Defautlayout
            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = Fragment
            }
            return <Route key={index} path={route.path} element={
              <Layout>< Page /> </Layout>
            } />;
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
