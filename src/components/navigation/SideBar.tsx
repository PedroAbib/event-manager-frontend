import { useState } from 'react';
import logo from '../../assets/logo.png';
import '../../styles/navigation/SideBar.css'
import NavButton from '../buttons/NavButton';
import { LuHome, LuUsers, LuCalendarDays } from "react-icons/lu";

interface SideBarProps {
    activePage: string;
    setActivePage: (page: string) => void;
}

const SideBar: React.FC<SideBarProps> = ({ activePage, setActivePage }) => {

    const handleButtonClick = (page: string) => {
        setActivePage(page);
    }

    const iconSize = 18;

    return (
        <div>
            <div className='logo-box'>
                <img src={logo}/>
            </div>

            <div>
                <NavButton
                    icon={<LuHome size={iconSize}/>}
                    label='Home'
                    isActive={activePage === 'Home' ? true : false}
                    onClick={() => handleButtonClick('Home')}
                />
                <NavButton
                    icon={<LuUsers size={iconSize}/>}
                    label='Registrants'
                    isActive={activePage === 'Registrants' ? true : false}
                    onClick={() => handleButtonClick('Registrants')}
                />
                <NavButton
                    icon={<LuCalendarDays size={iconSize}/>}
                    label='Events'
                    isActive={activePage === 'Events' ? true : false}
                    onClick={() => handleButtonClick('Events')}
                />
                
            </div>
        </div>
    )
}

export default SideBar;