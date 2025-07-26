import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import AnimalsPage from "./pages/AnimalsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import AdoptionFormPage from "./pages/AdoptionFormPage.jsx";
import Careers from "./pages/Careers.jsx";
import VolunteerPage from "./pages/VolunteerPage.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import banner from "./assets/images/banner-graphic.jpg";

function App() {
  return (
    <div className="layout">
      <Router>
        <Header title="Bark Avenue Rescue Kennel" imageUrl={banner} />{" "}
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/AnimalsPage" element={<AnimalsPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/AdoptionFormPage" element={<AdoptionFormPage />} />
          <Route path="/AdoptionFormPage/:animalName" element={<AdoptionFormPage />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/Volunteer" element={<VolunteerPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
