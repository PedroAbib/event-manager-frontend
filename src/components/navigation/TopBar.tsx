import { useState } from 'react';
import '../../styles/navigation/TopBar.css';
import CustomButton from '../buttons/CustomButton';
import Popover from './Popover';

interface TopBarProps {
    title: string;
}

const TopBar: React.FC<TopBarProps> = ({ title }) => {

    const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);

    const togglePopover = () => {
        setIsPopoverOpen(!isPopoverOpen);
    };

    const outsideClosePopover = () => {
        setIsPopoverOpen(false);
    }

    return(
        <div className='top-bar'>
            <div className='title-box'>
                <h1 className='title'>{title}</h1>
            </div>

            <div className='controls-box'>

                <CustomButton
                label='Add new'
                onClick={togglePopover}
                color='#17C500'
                />

                <Popover isPopoverOpen={isPopoverOpen} onClosePopover={outsideClosePopover}/>
            </div>

            
        </div>
    )
}

export default TopBar;