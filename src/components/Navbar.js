import React, { useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import "../styles/navbar.css"
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined'
import HomeIcon from '@mui/icons-material/Home';

export default function Navbar() {

    const [expandNav, setExpandNav] = useState(false)
    const location = useLocation()

    useEffect(() => {setExpandNav(false)}, [location])

    return <div className='navbar' id={expandNav ? "open": "close"}>
        <div className='toggleButton'>
            <button onClick={() => {setExpandNav((prev) => !prev)}}> <ReorderOutlinedIcon/> </button> 
        </div>
        <div className='links'>
           
            <Link className='logo' to="/"><HomeIcon/> Home </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/experiences"> Experience </Link>
            <Link to="/my-resume"> Resume </Link>
        </div>
    </div>;
}
