import './styles/app.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Particles from "react-tsparticles"; 
import { loadFull } from "tsparticles"; 
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';
import AnimatedRoutes from './components/AnimatedRoutes';


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
      <CustomCursor
      targets={['.link', '.your-css-selector']}
      customClass='custom-cursor'
      dimensions={60}
      fill='#FFF'
      smoothness={{
        movement: 1,
        scale: 0.5,
        opacity: 0.9,
      }}
      targetOpacity={0.5}
    />
      
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
        <AnimatedRoutes/>
      </Router>
    </div>
  );
}

