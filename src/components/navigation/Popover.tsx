import React, { useState, useRef, useEffect } from 'react';
import '../../styles/navigation/Popover.css'
import Modal from '../Modal';
import PopoverButton from '../buttons/PopoverButton';
import { LuPlusCircle } from "react-icons/lu";
import RegistrantsForm from '../data/RegistrantsForm';

interface PopoverProps {
    isPopoverOpen: boolean;
    onClosePopover: () => void;
}

const iconSize = 18;
const modal1 = 'Registrant';
const modal2 = 'Event';

const Popover: React.FC<PopoverProps> = ({ isPopoverOpen, onClosePopover }) => {
    
    const popoverRef = useRef<HTMLDivElement>(null);

    const [openModal, setOpenModal] = useState<string | null>(null);

    const handleOpenModal = (modalId : string) => {
        setOpenModal(modalId);
        onClosePopover();
    }

    const handleCloseModal = () => {
        setOpenModal(null);
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
                onClosePopover();
            }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
    }, [popoverRef]);

    return (
        <div className="popover-container">

            {isPopoverOpen && (
                <div>
                    <div className="popover-content" ref={popoverRef}>

                        <PopoverButton 
                            icon={<LuPlusCircle size={iconSize}/>}
                            label={modal1}
                            onClick={() => handleOpenModal(modal1)}
                        />

                        <PopoverButton 
                            icon={<LuPlusCircle size={iconSize}/>}
                            label={modal2}
                            onClick={() => handleOpenModal(modal2)}
                        />

                    </div>

                    
                </div>
            )}

            {openModal === modal1 && (
                <Modal
                    isOpen={true} 
                    onClose={handleCloseModal} 
                    title={modal1}
                >
                    <RegistrantsForm/>
                    
                </Modal>
            )}

            {openModal === modal2 && (
                <Modal
                    isOpen={true}
                    onClose={handleCloseModal}
                    title={modal2}
                >
                    <p>This is the modal content!</p>

                </Modal>
            )}
            
        </div>
    );
};

export default Popover;
