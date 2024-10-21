import React from 'react';
import '../../styles/buttons/PopoverButton.css';

interface PopoverButtonProps {
    icon: JSX.Element;
    label: string;
    onClick: () => void;
}

const PopoverButton: React.FC<PopoverButtonProps> = ({ icon, label, onClick }) => {
    
    return(
        <div className='nav-button-box'>
            <button className={'nav-button'} onClick={onClick}>
                <div className='icon-box'>
                    {icon}
                </div>
                <span>{label}</span>
            </button>
        </div>
    )
}

export default PopoverButton;