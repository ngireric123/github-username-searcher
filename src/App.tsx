import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import routes from "./routes";
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
