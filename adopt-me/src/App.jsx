import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import AnimalsPage from "./pages/AnimalsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import AdoptionFormPage from "./pages/AdoptionFormPage.jsx";
import Careers from "./pages/Careers.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/AnimalsPage" element={<AnimalsPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/AdoptionFormPage" element={<AdoptionFormPage />} />
          <Route path="/Careers" element={<Careers />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
