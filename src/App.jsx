
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/about';
import Services from './components/services';
import Contact from './components/contact';
import Home from './components/home';
import Navbar from './components/navbar';
import Gallery from './components/gallery';
import Header from './components/header';
import Footer from './components/footer';
import GalleryScroll from './components/galleryscroll';
import ScrollToTop from './components/scroll';

function App() {

  return (

    <div className='App'>
      <ScrollToTop />
      <Navbar></Navbar>
      <GalleryScroll></GalleryScroll>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
