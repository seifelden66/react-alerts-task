//src/app.jsx
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/HomePage/Home.page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/react-alerts-task" />} />
        {/* Define the home route */}
        <Route path="/react-alerts-task" element={<HomePage />} />{" "}
      </Routes>
    </>
  );
}

export default App;
