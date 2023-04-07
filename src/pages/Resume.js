import React from 'react'
import '../styles/resume.css'
import {motion} from 'framer-motion'




function Resume() {
  return (
    <motion.div className='resume'
                    initial={{width:0}}
                    animate={{width:"100%"}}
                    exit={{x:window.innerWidth, transition:{duration:0.1}}}
    
    >
        <h1 className='title'>FÁBIO VARELA</h1>
        <small className='contact'>fabio-varela@protonmail.com | 49985018642 | Rua João Lourenço de Araujo, 350, São Paulo, 02758010</small>

        <div>
          <h2 className='section'>Objective</h2>
          <p>Currently in search of my first job</p>
        </div>
          
        <div>
          <h2 className='section'>Education</h2>
          <ul>
            <li>Information Systems: 2022-Present</li>
            <li>Computer technician: 2017-2019</li>
            <li>Computer Maintenance: 2017-2018</li>
          </ul>
        </div>

        <div>
          <h2 className='section'>Skills</h2>
          <ul>
            <li>GitHub</li>
            <li>Flask</li>
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
            <li>Portuguse - Mother language</li>
            <li>English - Advanced (C1)</li>
          </ul>
        </div>

       
    </motion.div>
  );
}

export default Resume