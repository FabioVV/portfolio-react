import React from 'react'
import {useParams} from 'react-router-dom'
import { projectList } from '../helpers/ProjectList'
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/projectDisplay.css'
import {motion} from 'framer-motion'

export default function ProjectDisplay() {

    const {id} = useParams()
    const project = projectList[id]

  return (
    <motion.div className='project'
    initial={{width:0}}
                    animate={{width:"100%"}}
                    exit={{x:window.innerWidth, transition:{duration:0.1}}}
    >
        <h1>{project.name}</h1>
        <img alt='Project' src={project.image}/>
        <a rel="noreferrer" style={{color:'white'}} target="_blank" href={project.github_repo}>Github Repo of this project  <GitHubIcon/></a>
    </motion.div>
  )
}
