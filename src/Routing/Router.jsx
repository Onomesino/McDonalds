import React from "react";
import McEmail from "../Component/ComponentEmail/McEmail";
import {
  BrowserRouter as AppRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function Router() {
  return (
    <AppRouter>
      <Link to="/McNav" className="McNav"></Link>
      <Routes>
        <Route path="/" element={<McEmail />} />
      </Routes>
    </AppRouter>
  );
}

export default Router;
