import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DashBoard from "./pages/DashBoard";
import CourseDetails from "./pages/CourseDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<DashBoard />}></Route>
        <Route path="/coursedetails" element={<CourseDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
