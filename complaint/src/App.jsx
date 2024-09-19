import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './home';
import DigitalComplaint from './digital-complaint';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          >
          </Route>
          <Route
              path='/digital-complaint'
              element={<DigitalComplaint />}
            ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App
