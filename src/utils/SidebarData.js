import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <IoIcons.IoIosHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Users',
        path: '/users',
        icon: <FaIcons.FaUserFriends/>,
        cName: 'nav-text'
    },
    {
        title: 'Information',
        path: '/info',
        icon: <IoIcons.IoIosInformationCircleOutline/>,
        cName: 'nav-text'
    }
]