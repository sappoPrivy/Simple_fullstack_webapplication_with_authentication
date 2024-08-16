// import { useState } from "react";
// import { Alert } from "./components/Alert";
// import { Button } from "./components/Button";
// import ListGroup from "./components/ListGroup";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
