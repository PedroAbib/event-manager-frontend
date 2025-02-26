import { useEffect, useState, createContext } from "react";
import { Registrant } from "../interfaces/Registrant";
import axios from "axios";

interface RegistrantsProviderProps {
    children: React.ReactNode;
}

interface RegistrantsContextType {
    registrants: Registrant[];
    loading: boolean;
    error: string | null;
    fetchRegistrants: () => Promise<void>;
    addRegistrant: (data: Registrant) => Promise<void>;
    deleteRegistrant: (id: string) => Promise<void>;
}

const RegistrantsContext = createContext<RegistrantsContextType | undefined>(undefined);

const RegistrantsProvider: React.FC<RegistrantsProviderProps> = ({ children }) => {
    const [registrants, setRegistrants] = useState<Registrant[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchRegistrants = async () => {
        try {
            const response = await axios.get('http://localhost:8080/person');
            setRegistrants(response.data);
        } catch (err) {
            setError('Erro ao carregar dados.');
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    const addRegistrant = async (data: Registrant) => {
        try {
            const response = await axios.post('http://localhost:8080/person', data)
            setRegistrants((prev) => [...prev, response.data]);
        } catch (err) {
            setError("Erro ao adicionar dado.");
            console.error(err);
        }
    };

    const deleteRegistrant = async (id: string) => {
        try {
            await axios.delete(`http://localhost:8080/person/${id}`);
            setRegistrants((prev) => prev.filter((registrant) => registrant.id !== id));
        } catch (err) {
            setError('Erro ao deletar dado.');
            console.error(err);
        }
    };

    useEffect(() => {
        fetchRegistrants();
    }, []);

    return (
        <RegistrantsContext.Provider value={{ registrants, loading, error, fetchRegistrants, addRegistrant, deleteRegistrant }}>
            {children}
        </RegistrantsContext.Provider>
    )
}

export { RegistrantsProvider, RegistrantsContext};