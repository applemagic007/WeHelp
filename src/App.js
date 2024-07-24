import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './header';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
    </div>
    <Routes>
      <Route path="/"></Route>
    </Routes>
    </Router>
  );
}

export default App;
