import React from "react";
import '../styles/Modal.css'
import CustomButton from "./buttons/CustomButton";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
    
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>{title}</h2>
                    <button className="close-button" onClick={onClose}>
                        &times;
                    </button>
                </div>

                <div className="modal-body">
                    {children}
                </div>

                <div className="modal-buttons">
                    <button className="cancel-button" onClick={onClose}>Cancel</button>
                    <CustomButton
                    label='Save'
                    onClick={() => {}}
                    color='#17C500'
                    />
                </div>
            </div>
        </div>
    );
}

export default Modal;