import './styles/app.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Particles from "react-tsparticles"; 
import { loadFull } from "tsparticles"; 
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Resume from './pages/Resume';
import ProjectDisplay from './pages/ProjectDisplay';

export default function App() {
  const particlesInit = async (main) => { 
    console.log(main); 
    await loadFull(main); 
  }; 
  const particlesLoaded = (container) => { 
    console.log(container); 
  }; 

  return (
    <div className="App">
      <Particles 
        id="tsparticles" 
        init={particlesInit} 
        loaded={particlesLoaded} 
        options={{ 
          background: { 
            color: "rgb(0,0,0)", 
          }, 
          fpsLimit: 60, 
          particles: { 
            shape: { 
              type: "circle", 
            }, 
            size: { 
              random: { 
                enable: true, 
                minimumValue: 0.5, 
              }, 
              value: 1.4, 
            }, 
            color: { 
              value: "#f1f1f1", 
            }, 
            number: { 
              density: { 
                enable: true, 
                area: 1080, 
              }, 
              limit: 0, 
              value: 800, 
            }, 
            opacity: { 
              animation: { 
                enable: true, 
                minimumValue: 0.5, 
                speed: 1.6, 
                sync: false, 
              }, 
              random: { 
                enable: true, 
                minimumValue: 0.1, 
              }, 
              value: 1, 
            }, 
            interactivity: { 
              detectsOn: "canvas", 
              events: { 
                resize: true, 
              }, 
            }, 
          }, 
        }} 
      /> 
      
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/project/:id' element={<ProjectDisplay/>} />
          <Route path='/experiences' element={<Experience/>} />
          <Route path='/my-resume' element={<Resume/>} />
        </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

