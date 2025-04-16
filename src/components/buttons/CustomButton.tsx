import '../../styles/buttons/CustomButton.css'

interface ButtonProps {
    label: string;
    onClick: () => void;
    color: string;
}

const CustomButton: React.FC<ButtonProps> = ({ label, onClick, color }) => {
    return(
        <div>
            <button 
                className="custom-button" 
                onClick={onClick}
                style={{ '--button-color': color } as React.CSSProperties}
            >

                <span>{label}</span>
                
            </button>
        </div>
    )
}

export default CustomButton;