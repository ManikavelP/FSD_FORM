
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Home";
import List from "./components/List";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/ShowEmployee" Component={List} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
