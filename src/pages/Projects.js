import React from 'react'
import '../styles/projects.css'
import ProjectItem from '../components/ProjectItem';
import {projectList} from '../helpers/ProjectList'


export default function Project(){
    return (
        <div className="projects">
          <h1> My personal <span className='title'>Projects</span></h1>
          <div className="projectList">
            {projectList.map((project, idx) => {

              return <ProjectItem id={idx} name={project.name} image={project.image} />
             
            })}
          </div>
        </div>
      );
}



