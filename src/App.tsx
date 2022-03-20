import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Settings from './pages/settings';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home />} />

          <Route path="settings" element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
