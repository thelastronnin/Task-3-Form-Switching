import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Button from "./components/Button";

import "./App.css";

function App() {
  const [switched, setSwitched] = useState(false);

  const toggleSwitch = () => {
    setSwitched(!switched);
  };

  return (
    <Router>
      <Route
        path="/"
        exact
        render={() => (
          <>
            <div className="div-parent-form-container">
              <Button onClick={toggleSwitch} text="Switch" color="black" />
              <br />
              <br />
              {switched ? <Form2 title="Form 2" /> : <Form1 title="Form 1" />}
            </div>
          </>
        )}
      />
    </Router>
  );
}

export default App;
