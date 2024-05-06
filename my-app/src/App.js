import './App.css';
import Login from './Login';
import Verifyotp from './Verifyotp';
import Home from './Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path = "/" element={<Login/>}></Route>
          <Route path = "/Verifyotp" element={<Verifyotp/>}></Route>
          <Route path = "/Home" element={<Home/>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
