import React from 'react';
import '../../styles/buttons/NavButton.css';

interface NavButtonProps {
    icon: JSX.Element;
    label: string;
    isActive: boolean;
    onClick: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ icon, label, isActive, onClick }) => {
    const iconStyle = { color: isActive ? '#17c500' : ''};
    
    return(
        <div className='nav-button-box'>
            <button className={`nav-button ${isActive ? 'active' : ''}`} onClick={onClick}>
                <div className='icon-box' style={iconStyle}>
                    {icon}
                </div>
                <span>{label}</span>
            </button>
        </div>
    )
}

export default NavButton;