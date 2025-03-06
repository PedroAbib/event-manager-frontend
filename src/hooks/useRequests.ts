import { useContext } from "react"
import { RequestsContext } from "../contexts/RequestsContext";

export const useRequests = <T extends { id: string | number }>() => {
    const context = useContext(RequestsContext);
    if (!context) {
        throw new Error('useRequests deve ser usado dentro de RequestsProvider');
    }
    return context;
}