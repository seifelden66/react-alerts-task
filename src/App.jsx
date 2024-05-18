import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/HomePage/Home.page";

function App() {
  return (
    <>
     
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
