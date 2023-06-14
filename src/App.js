import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Greeting} />
      </Routes>
    </Router>
  );
}

export default App;