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
             
            <GitHubIcon/> 
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
        </div>
        <p> &copy; 2023 http://localhost:3000 </p>
        <p>Made by Fábio Varela</p>
    </div>
  );
  
}
