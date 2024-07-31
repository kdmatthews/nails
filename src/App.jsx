
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/about';
import Services from './components/services';
import Contact from './components/contact';
import Home from './components/home';
import Navbar from './components/navbar';

function App() {


  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
