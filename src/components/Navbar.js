import React, {useState} from 'react'
import * as ReIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io'
import { Link } from 'react-router-dom'
import {SidebarData} from '../utils/SidebarData'
import '../styles/Navbar.css'
import {IconContext} from 'react-icons'

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar =()=> setSidebar(!sidebar);
  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
        <div name="navbar" data-testid="navbar-1" className='navbar'> 
            <Link to="#" className='menu-bars'>
                <ReIcons.FaBars onClick={showSidebar}/>
            </Link>
        </div>

        <nav className={sidebar ? 'nav-menu active' :  'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='nav-toggle'>
                    <Link to="#" className='menu-bars'>
                        <IoIcons.IoIosClose/>
                    </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
           
            </ul>
        </nav>
        </IconContext.Provider>
    </>
  )
}

export default Navbar