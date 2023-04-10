import React from 'react'
import Home from '../pages/Home';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';
import ProjectDisplay from '../pages/ProjectDisplay';
import { Route, Routes, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion'


export default function AnimatedRoutes() {

    const location = useLocation();


  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/project/:id' element={<ProjectDisplay/>} />
            <Route path='/experiences' element={<Experience/>} />
            <Route path='/my-resume' element={<Resume/>}/>
        </Routes>
    </AnimatePresence>
  )
}
// />
