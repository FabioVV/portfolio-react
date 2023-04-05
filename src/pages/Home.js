import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/home.css'

export default function Home() {
    return (
        <div className='home'>
            <div className='about'>
                <h1>Hi, my name is <span className='author'>Fábio</span></h1>
                <div className='prompt'>
                    <p>A systems information student with a passion for programming and learning.</p>
                    <div className='icons'>
                        <GitHubIcon/>
                        <EmailIcon/>
                        <LinkedInIcon/>
                    </div>
                    
                </div>
            </div>
            <hr/>
            <div className='skills'>
                <h1>Some of my skills~$: </h1>
                <ol className='skillsList'>
                    <li className='item'>
                        <h2>Front-End</h2>
                        <span>ReactJS - HTML - CSS - Bootstrap - MaterialUI</span>
                    </li>
                    <li className='item'>
                        <h2>Back-End</h2>
                        <span>MySQL - SQLServer - Flask</span>
                    </li>
                    <li className='item'>
                        <h2>Languages</h2>
                        <span>C# - Python - Javascript</span>
                    </li>
                </ol>
            </div>
        </div>
    );
}

