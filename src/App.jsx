import { Routes, Route } from 'react-router-dom';

import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';


import HomePages from './pages/HomePages';
import TemplatePages from './pages/TemplatePages';
import TestimonialPages from './pages/TestimonialPages';
import FaqPages from './pages/FaqPages';
import SyaratKeten from './pages/SyaratKeten';
import PesanPages from './pages/PesanPages';


function App() {
  return <div>
    <NavbarComponent />

    <Routes>
      <Route path='/' Component={HomePages} />
      <Route path='/template' Component={TemplatePages} />
      <Route path='/testimonial' Component={TestimonialPages} />
      <Route path='/faq' Component={FaqPages} />
      <Route path='/syaratketen' Component={SyaratKeten} />
      <Route path='/pemesanan' Component={PesanPages} />
    </Routes>

    <FooterComponent />
  </div>
}

export default App;
