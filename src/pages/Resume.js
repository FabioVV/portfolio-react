import React from 'react'
import '../styles/resume.css'
import {motion} from 'framer-motion'
import DefaultPage from './DefaultPage';




export default function Resume() {
  return (
    <DefaultPage>
      <motion.div className='resume'
                      initial={{width:0}}
                      animate={{width:"100%"}}
                      exit={{x:window.innerWidth, transition:{duration:0.1}}}
      
      >
          <h1 className='title'>FÁBIO VARELA</h1>
          <small className='contact'>fabinhotk998@hotmail.com | 49-985018642 </small>

          <div>
            <h2 className='section'>Objective</h2>
            <p>Currently in search of my first job
              <br/> To finally start working with what i love!</p>
          </div>
            
          <div>
            <h2 className='section'>Education</h2>
            <ul className='ed'>
              <li>
                <p className='education-section'><span>Information Systems</span> <br/>2022-Present <br/>Impacta Tecnologia, São Paulo</p>
              </li>
              <li>
                <p className='education-section'><span>Computer technician</span>:  <br/>2017-2019 <br/>CEDUP Renato Ramos da Silva, Santa Catarina</p>
              </li>
              <li>
                <p className='education-section'><span>Computer Maintenance</span>:  <br/>2017-2018 <br/>YESBras, Santa Catarina</p>
              </li>
            </ul>
          </div>

          <div>
            <h2 className='section'>Skills</h2>
            <ul>
              <h3 className='section sub'>Soft Skills</h3>
              <li>TeamWork</li>
              <li>Flexibility</li>
              <li>Responsibilty</li>
              <li>Ability to work under pressure</li>
              <li>Problem Solving</li>
              <li>Communication</li>
              <h3 className='section sub'>Hard Skills</h3>
              <li>GitHub</li>
              <li>Flask</li>
              <li>Ruby</li>
              <li>Python</li>
              <li>JavaScript</li>
              <li>C#</li>
              <li>SQL</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>ReactJS</li>
              <li>Bootstrap</li>
              <li>MaterialUI</li>
            </ul>
          </div>
          
          <div>
            <h2 className='section'>Languages</h2>
            <ul>
              <li>Portuguese - Mother language</li>
              <li>English - Advanced (C1)</li>
            </ul>
          </div>

        
      </motion.div>
    </DefaultPage>
  );
}
