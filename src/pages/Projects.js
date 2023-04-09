import React from 'react'
import '../styles/projects.css'
import ProjectItem from '../components/ProjectItem';
import {projectList} from '../helpers/ProjectList'
import {motion} from 'framer-motion'
import DefaultPage from './DefaultPage';

export default function Project(){
    return (
      <DefaultPage>

      
        <motion.div className="projects"
        initial={{width:0}}
        animate={{width:"100%"}}
        exit={{x:window.innerWidth, transition:{duration:0.1}}}
        >
          <h1> My personal <span className='title'>Projects</span></h1>
          <div className="projectList">
            {projectList.map((project, idx) => {
              return <ProjectItem id={idx} name={project.name} image={project.image} />
            })}
          </div>
        </motion.div>
        </DefaultPage>
      );
}
