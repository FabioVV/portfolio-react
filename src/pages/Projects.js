import React from 'react'
import '../styles/projects.css'
import ProjectItem from '../components/ProjectItem';
import vcadernoflask from '../assets/vcadernoflask.png'

export default function Project(){
    return (
        <div className='projects'>
            <h1>Some of my personal <span className='title'>Projects</span></h1>
            <div className='projectList'>
                <ProjectItem name="Flask Note Creator" image={vcadernoflask}/>
                <ProjectItem name="Placeholder name" image={vcadernoflask}/>
                <ProjectItem name="Placeholder name" image={vcadernoflask}/>
            </div>
        </div>
    );
}