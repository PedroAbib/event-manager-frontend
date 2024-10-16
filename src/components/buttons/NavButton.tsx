import React from 'react';
import '../../styles/buttons/NavButton.css';

interface NavButtonProps {
    icon: string;
    label: string;
    //onClick
}

const NavButton: React.FC<NavButtonProps> = ({ icon, label }) => {
    return(
        <div className='nav-button-box'>
            <button className='nav-button'>
                <div className='icon-box'>
                    <img src={icon}/>
                </div>
                
                <span>{label}</span>
            </button>
        </div>
    )
}

export default NavButton;