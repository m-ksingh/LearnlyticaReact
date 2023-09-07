

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Layout/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import { Footer } from './Component/Footer/Footer';
import Veteran from './Layout/Veteran/Veteran';
import Contactus from './Layout/Contactus/Contactus';
import Blog from './Layout/Blog/Blog';
import Event from './Layout/Webinar/Event';
import Faq from './Layout/Faq/Faq';

function App() {
  return (
  <>
  <Router>
  <Navbar/>
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/veteran" element={<Veteran/>} />
        <Route path="/contact" element={<Contactus/>} />
        <Route path="/blogs" element={<Blog/>} />
        <Route path="/event" element={<Event/>} />
        <Route path="/Faq" element={<Faq/>} />
      </Routes>
      <Footer/>
    </Router>
  
  </>
  );
}

export default App;
