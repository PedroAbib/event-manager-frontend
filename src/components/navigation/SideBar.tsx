import logo from '../../assets/logo.png';
import '../../styles/navigation/SideBar.css'
import HomeIcon from '../../assets/icons/home-icon.svg';
import EventIcon from '../../assets/icons/event-icon.svg';
import RegistrantsIcon from '../../assets/icons/registrants-icon.svg';
import NavButton from '../buttons/NavButton';

function SideBar() {
    return (
        <div>
            <div className='logo-box'>
                <img src={logo}/>
            </div>

            <div className='#'>
                <NavButton
                    icon={HomeIcon}
                    label='Home'
                />
                <NavButton
                    icon={RegistrantsIcon}
                    label='Registrants'
                />
                <NavButton
                    icon={EventIcon}
                    label='Events'
                />
                
            </div>
        </div>
    )
}

export default SideBar;