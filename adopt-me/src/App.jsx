import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import AnimalsPage from "./pages/AnimalsPage.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import VolunteerPage from "./pages/VolunteerPage.jsx";

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
          <Route path="/VolunteerPage" element={<VolunteerPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
