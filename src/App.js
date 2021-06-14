import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Form1 from "./components/Form1";
import Form2 from "./components/Form2";

function App() {
  return (
    <Router>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            <Form1 />
            <Form2 />
          </div>
        )}
      />
    </Router>
  );
}

export default App;
