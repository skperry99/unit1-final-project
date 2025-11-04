import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import AnimalsPage from "./pages/AnimalsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import AdoptionFormPage from "./pages/AdoptionFormPage.jsx";
import Careers from "./pages/Careers.jsx";
import VolunteerPage from "./pages/VolunteerPage.jsx";
import Stories from "./pages/StoriesPage.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import banner from "./assets/images/banner-graphic.jpg";
import "./App.css";

function App() {
  return (
    <Router>
      <Header title="Bark Avenue Rescue Kennel" imageUrl={banner} />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage title="Welcome to Bark Avenue Rescue Kennel" />} />
        <Route path="/about" element={<AboutPage title="About Us" />} />
        <Route path="/animals" element={<AnimalsPage title="Available Animals" />} />
        <Route path="/contact" element={<ContactPage title="Contact Us" />} />

        {/* Adoption Form */}
        <Route path="/adoption" element={<AdoptionFormPage />} />
        <Route path="/adoption/:animalName" element={<AdoptionFormPage />} />

        {/* Careers + Volunteering */}
        <Route path="/careers" element={
          <Careers title="Join the Circus (of Cuddles and Chaos) at Bark Avenue!" />
        } />
        <Route path="/volunteer" element={<VolunteerPage title="Volunteer with Us" />} />

        {/* Stories */}
        <Route path="/stories" element={<Stories title="Adoption Stories" />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;