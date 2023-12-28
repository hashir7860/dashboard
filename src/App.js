// import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Dashboard from './Pages/Dashboard';
import Inventory from './Pages/Inventory';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Inventory" element={<Inventory />} />
        </Routes>
      </BrowserRouter>
      {/* <Dashboard />
      <Inventory /> */}
    </>
  );
}

export default App;
