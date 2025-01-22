import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesConfig from "./router/Route";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Wrap the routing configuration in Router */}
      <Router>
        <RoutesConfig />
      </Router>
    </div>
  );
};

export default App;
