import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import AnimalsPage from "./pages/AnimalsPage.jsx";
import AdoptionFormPage from "./pages/AdoptionFormPage.jsx"
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/AnimalsPage" element={<AnimalsPage />} />
          <Route path="/AdoptionFormPage" element={<AdoptionFormPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
