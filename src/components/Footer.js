import React from 'react'
import '../styles/footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



export default function Footer() {
  return(
     <div className='footer'>
        <div className='socialMedia'>
            <a target="_blank" href="https://github.com/FabioVV"><GitHubIcon/></a>
            <a target="_blank" href="https://twitter.com/fabinhotk"><TwitterIcon /></a>
            <a target="_blank" href="https://www.linkedin.com/in/f%C3%A1bio-varela-413719217"><LinkedInIcon /></a>
        </div>
        <p> &copy; 2023 http://localhost:3000 </p>
        <p>Made by Fábio Varela</p>
    </div>
  );
  
}
