import React, { useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import "../styles/Navbar.css"
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined'

export default function Navbar() {

    const [expandNav, setExpandNav] = useState(false)
    const location = useLocation()

    useEffect(() => {setExpandNav(false)}, [location])

    return <div className='navbar' id={expandNav ? "open": "close"}>
        <div className='toggleButton'>
            <button onClick={() => {setExpandNav((prev) => !prev)}}> <ReorderOutlinedIcon/> </button> 
        </div>
        <div className='links'>
            <Link to="/"> Home </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/experiences"> Experience </Link>
            
        </div>
    </div>;
  
}

