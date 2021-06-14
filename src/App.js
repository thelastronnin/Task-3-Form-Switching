import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Form1 from "./components/Form1";
import Form2 from "./components/Form2";

function App() {
  const [switched, setSwitched] = useState(false);

  const toggleSwitch = () => {
    setSwitched(!switched);
    alert("This works!" + " " + switched);
  };

  return (
    <Router>
      <Route
        path="/"
        exact
        render={() => (
          <>
            <button onClick={toggleSwitch}>Switch</button>
            {switched ? <Form2 /> : <Form1 />}
          </>
        )}
      />
    </Router>
  );
}

export default App;
