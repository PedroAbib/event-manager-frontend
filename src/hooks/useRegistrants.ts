import { useContext } from "react";
import { RegistrantsContext } from "../contexts/RegistrantsContext"

export const useRegistrants = () => {
    const context = useContext(RegistrantsContext);
    if (!context) {
        throw new Error('useRegistrants deve ser usado dentro de um RegistrantsProvider');
    }
    return context;
};