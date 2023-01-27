import React from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import McEmail from "../Component/ComponentEmail/McEmail";
import McNav from "../Component/ComponentNav/McNav";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Link to="/" className="nav"></Link>
        <Link to="/email" className="email"></Link>
        <Routes>
          <Route path="/" element={<McNav />} />
          <Route path="/email" element={<McEmail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
