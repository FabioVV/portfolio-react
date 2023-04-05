import './styles/App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Resume from './pages/Resume';

export default function App() {
  return (
    <div className="App">
      <Router>

      <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/experiences' element={<Experience/>} />
          <Route path='/my-resume' element={<Resume/>} />
        </Routes>

      <Footer/>

      </Router>
    </div>
  );
}

