import React from 'react'
import {useParams, Link} from 'react-router-dom'
import { projectList } from '../helpers/ProjectList'
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/projectDisplay.css'
import {motion} from 'framer-motion'
import DefaultPage from './DefaultPage';
import HomeIcon from '@mui/icons-material/Home';

export default function ProjectDisplay() {

    const {id} = useParams()
    const project = projectList[id]

  return (
    <DefaultPage>
    <motion.div className='project'
    initial={{width:0}}
                    animate={{width:"100%"}}
                    exit={{x:window.innerWidth, transition:{duration:0.1}}}
    >
        <h1>{project.name}</h1>
        <img alt='Project' src={project.image}/>
        <a rel="noreferrer" style={{color:'white'}} target="_blank" href={project.github_repo}>Github Repo of this project  <GitHubIcon/></a>
        <center style={{marginTop:'1rem'}}><Link className='logo' to="/"><HomeIcon/> Return to home page /&gt; </Link></center>
    </motion.div>
    </DefaultPage>
  )
}
