import React from 'react'
import {useParams} from 'react-router-dom'
import { projectList } from '../helpers/ProjectList'
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ProjectDisplay() {

    const {id} = useParams()
    const project = projectList[id]

  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image}/>
        <GitHubIcon/>
    </div>
  )
}
