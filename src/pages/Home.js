import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GamesIcon from '@mui/icons-material/Games';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/home.css'     

export default function Home() {
    return (
        <div className='home'>
            <div className='about'>
                <h1>Hi, my name is <span className='author'>Fábio</span></h1>
                <div className='prompt'>
                    <p>- A systems information student with a passion for programming and learning. -</p>
                </div>
            </div>

            <hr/>

            <div className='about'>
                <h1>A little about <span className='author'>Me</span></h1>
                <div className='prompt me'>
                    <p>I'am a systems information student with a passion for programming and learning. 
                        I have always loved coding and technology since i was little. I had my first contact with coding
                        when i was in High School, with our Logics teacher teaching us Pascal and later Java.
                        Today i'am seeking my bachelor's degree on Impacta Tecnologia.
                    </p>
                   
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

            <hr/>

            <div className='about final'>
                <h1>Connect with me through <span className='author'>Here</span></h1>
                <div className='prompt contact'>
                    <div className='icons'>
                        <a  rel="noreferrer" style={{color:'white'}} target="_blank" href="https://github.com/FabioVV"><GitHubIcon/>My github</a>
                        <a  rel="noreferrer" style={{color:'white'}} target="_blank" href="mailto:fabinhotk998@hotmail.com"><EmailIcon/>My Email</a>
                        <a  rel="noreferrer" style={{color:'white'}} target="_blank" href="https://www.linkedin.com/in/f%C3%A1bio-varela-413719217"><LinkedInIcon />My LinkedIn</a>
                        <a  rel="noreferrer" style={{color:'white'}} target="_blank" href="https://twitter.com/fabinhotk"><TwitterIcon />My Twitter</a>
                        <a  rel="noreferrer" style={{color:'white'}} target="_blank" href="https://steamcommunity.com/id/fabinhotk998/"><GamesIcon/>My Steam</a>
                    </div>
                </div>
                
            </div>
            <div class="quote">
                    <blockquote>
                        <p>"Success is not final; failure is not fatal: It is the courage to continue that counts."</p>
                        <cite>Winston S. Churchill</cite>
                    </blockquote>
                </div>

        </div>
    );
}

