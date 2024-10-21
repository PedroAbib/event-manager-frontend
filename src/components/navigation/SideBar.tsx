import logo from '../../assets/logo.png';
import '../../styles/navigation/SideBar.css'
import NavButton from '../buttons/NavButton';
import { LuHome, LuUsers, LuCalendarDays } from "react-icons/lu";

interface SideBarProps {
    activePage: string;
    setActivePage: (page: string) => void;
}

const page1 = 'Home';
const page2 = 'Registrants';
const page3 = 'Events';

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
                    label={page1}
                    isActive={activePage === page1 ? true : false}
                    onClick={() => handleButtonClick(page1)}
                />
                <NavButton
                    icon={<LuUsers size={iconSize}/>}
                    label={page2}
                    isActive={activePage === page2 ? true : false}
                    onClick={() => handleButtonClick(page2)}
                />
                <NavButton
                    icon={<LuCalendarDays size={iconSize}/>}
                    label={page3}
                    isActive={activePage === page3 ? true : false}
                    onClick={() => handleButtonClick(page3)}
                />
                
            </div>
        </div>
    )
}

export default SideBar;