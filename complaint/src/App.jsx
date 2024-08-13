import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from './home';
import Methods from './methods';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path='/'
            element={<Home />}
          >
            <Route
              exact
              path='/methods'
              element={<Methods />}
            ></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App
