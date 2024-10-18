import '../../styles/navigation/TopBar.css';
import CustomButton from '../buttons/CustomButton';

interface TopBarProps {
    title: string;
}

const TopBar: React.FC<TopBarProps> = ({ title }) => {
    return(
        <div className='top-bar'>
            <div className='title-box'>
                <h1 className='title'>{title}</h1>
            </div>

            <div className='controls-box'>
                <CustomButton
                    label='Add new'
                    onClick={() => {}}
                    color='#17C500'
                />
            </div>
        </div>
    )
}

export default TopBar;