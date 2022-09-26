import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollTop from './components/ScrollTop';
import About from './pages/About/About';
import BlogDetails from './pages/BlogDetails/BlogDetails';
import Blogs from './pages/Blogs/Blogs';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import PortfolioDetails from './pages/PortfolioDetails/PortfolioDetails';
import Services from './pages/Services/Services';
import ServicesDetails from './pages/ServicesDetails/ServicesDetails';
import Team from './pages/Team/Team';
import TeamDetails from './pages/TeamDetails/TeamDetails';
import { LanguageContext } from './context/LanguageContext';

function App() {
  const { language, changeLanguage } = useContext(LanguageContext);

  let lang = localStorage.getItem('language');
  changeLanguage(lang ? lang : 'es');

  return (
    <>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services language={language}/>} />
          <Route path="/servicesDetails" element={<ServicesDetails />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolioDetails" element={<PortfolioDetails />} />
          <Route path="/team" element={<Team />} />
          <Route path="/teamDetails" element={<TeamDetails />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogDetails" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
