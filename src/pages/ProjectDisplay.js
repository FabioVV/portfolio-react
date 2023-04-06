import React from 'react'
import {useParams} from 'react-router-dom'
import { projectList } from '../helpers/ProjectList'
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/projectDisplay.css'

export default function ProjectDisplay() {

    const {id} = useParams()
    const project = projectList[id]

  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image}/>
        <a rel="noreferrer" style={{color:'white'}} target="_blank" href={project.github_repo}>Github Repo of this project  <GitHubIcon/></a>
    </div>
  )
}
