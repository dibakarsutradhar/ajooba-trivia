import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import tempHome from "./components/tempHome";

function App() {
  return (
    <Router>
      <Route path="/" component={tempHome}></Route>
    </Router>
  );
}

export default App;
