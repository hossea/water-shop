import './App.css';
import CardList from './Card/CardList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shopbar from './components/Shopbar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WaterPage from './WaterPage';
import About from './About/About';


function App() {
  return (
    <div className="App">
       <Navbar/>
       <Shopbar/>
    <Router>
      <Routes>
        
        <Route path="/" element={<CardList />} />
        <Route path="/water" element={<WaterPage />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </Router>

    <Footer/>
    </div>
  );
}

export default App;
