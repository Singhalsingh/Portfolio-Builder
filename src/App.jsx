import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./homepage"; // Ensure lowercase to match direct file name standard
import Login from "./login";
import Register from "./register";
import CreatePortfolio from "./create";
import PortfolioForm from "./PortfolioForm"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreatePortfolio />} />
        <Route path="/form" element={<PortfolioForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;