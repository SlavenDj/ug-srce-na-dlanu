import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import VolunteerPage from "./pages/VolunteerPage";
import ProjectsPage from "./pages/ProjectsPage";
import NewsPage from "./pages/NewsPage";
import DonatePage from "./pages/DonatePage";
import BazarPage from "./pages/BazarPage";
import RequestHelpPage from "./pages/RequestHelpPage";
import ContactPage from "./pages/ContactPage";
import ArchivePage from "./pages/ArchivePage";

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <ThemeProvider>
          <div className="min-h-screen">
            <ScrollToTop />
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/volunteering" element={<VolunteerPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/donate" element={<DonatePage />} />
                <Route path="/bazar" element={<BazarPage />} />
                <Route path="/request-help" element={<RequestHelpPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/archive" element={<ArchivePage />} />
              </Routes>
            </main>
            <Footer />
            <BackToTop />
          </div>
        </ThemeProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}
