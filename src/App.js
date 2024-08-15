import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//import components
import Layout from "./components/Layout";

//import pages
import Home from "./pages/Home";
import Project from "./pages/Project";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/projects/:id" element={<Project />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
