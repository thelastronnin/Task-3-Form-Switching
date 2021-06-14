import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Form1 from "./components/Form1";

function App() {
  return (
    <Router>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            <Form1 />
          </div>
        )}
      />
    </Router>
  );
}

export default App;
