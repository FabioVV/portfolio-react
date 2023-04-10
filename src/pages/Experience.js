import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@mui/icons-material/School';
import '../styles/experience.css'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import DefaultPage from './DefaultPage';

export default function Experience(){
    return (
        <DefaultPage>
            <motion.div className='Experiences'
            initial={{width:0}}
                        animate={{width:"100%"}}
                        exit={{x:window.innerWidth, transition:{duration:0.1}}}
            
            >
                <VerticalTimeline lineColor='#fbc403'>
                    <VerticalTimelineElement 
                    className='vertical-timeline-element--education' 
                    date='2017-2019' 
                    
                    contentStyle={{ background:"black", color:"white" }}
                    iconStyle={{background:"black", color:"white"}}
                    icon={<SchoolIcon/>}
                    >
                        <h2 style={{ color:"white" }} className='vetical-timeline-element-title'>CEDUP Renato Ramos da Silva, Santa Catarina</h2>
                        <p>High School Diploma and Computer technician Diploma</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement 
                    className='vertical-timeline-element--education' 
                    date='2017-2018' 
                    
                    contentStyle={{ background:"black", color:"white" }}
                    iconStyle={{background:"black", color:"white"}}
                    icon={<SchoolIcon/>}
                    >
                        <h2 style={{ color:"white" }} className='vetical-timeline-element-title'>YESBRAS, Santa Catarina</h2>
                        <h4 style={{ color:"white" }} className='vetical-timeline-element-subtitle'>Course Certificate</h4>
                        <p>Maintenance of Computers</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement 
                    className='vertical-timeline-element--education' 
                    date='2022-Present' 
                    
                    contentStyle={{ background:"black", color:"white" }}
                    iconStyle={{background:"black", color:"white"}}
                    icon={<SchoolIcon/>}
                    >
                        <h2 style={{ color:"white" }} className='vetical-timeline-element-title'>IMPACTA tecnologia, São Paulo</h2>
                        <h4 style={{ color:"white" }} className='vetical-timeline-element-subtitle'>Bachelor's Degree</h4>
                        <p>Information Systems</p>
                    </VerticalTimelineElement>



                </VerticalTimeline>
                <center style={{marginTop:'1rem'}}><Link className='logo' to="/"><HomeIcon/> Return to home page /&gt; </Link></center>
            </motion.div>
        </DefaultPage>
        );
        
}