import React, { useEffect, useState } from 'react'
import "../styles/navbar.css"
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined'
import {Link, useLocation} from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ScienceIcon from '@mui/icons-material/Science';
import ContactPageIcon from '@mui/icons-material/ContactPage';

export default function Navbar() {

    const [expandNav, setExpandNav] = useState(false)
    const location = useLocation()

    useEffect(() => {setExpandNav(false)}, [location])

    return <div className='navbar' id={expandNav ? "open": "close"}>
        <div className='toggleButton'>
            <button onClick={() => {setExpandNav((prev) => !prev)}}> <ReorderOutlinedIcon/> </button> 
        </div>
        <div className='links'>
            <Link className='logo' to="/"><HomeIcon/> Home /&gt; </Link>
            <Link to="/projects"><AssignmentIcon/> Projects /&gt; </Link>
            <Link to="/experiences"><ScienceIcon/> Experience /&gt; </Link>
            <Link to="/my-resume"><ContactPageIcon/> Resume /&gt; </Link>
        </div>
    </div>;
}


//