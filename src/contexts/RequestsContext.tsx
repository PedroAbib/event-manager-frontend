import { useState, createContext } from 'react';
import axios from 'axios';

interface RequestsContextType<T extends { id: string | number }> {
    data: T[];
    loading: boolean;
    error: string | null;
    fetchData: (url: string) => Promise<void>;
    addData: (url: string, data: T) => Promise<void>;
    updateData: (url: string, id: string | number, newData: Partial<T>) => Promise<void>;
    deleteData: (url: string, id: string) => Promise<void>;
}

const RequestsContext = createContext<RequestsContextType<any> | undefined>(undefined);

const RequestsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async (url: string) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(url);
            setData(response.data);
        } catch (err) {
            setError('Error fetching data.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const addData = async <T extends { id: string | number }>(url: string, newData: T) => {
        try {
            const response = await axios.post(url, newData);
            setData((prev) => [...prev, response.data]);
        } catch (err) {
            setError('Error adding new data.');
            console.error(err);
        }
    };

    const updateData = async <T extends { id: string | number }>(url: string, id: string | number, newData: Partial<T>) => {
        try {
            const response = await axios.put(`${url}/${id}`, newData);
            setData((prev)  => 
                prev.map((item) => (item.id === id ? { ...item, ...newData } : item))
            );
        } catch (err) {
            setError('Error updating data.');
            console.error(err);
        }
    };

    const deleteData = async (url: string, id: string | number) => {
        try {
            await axios.delete(`${url}/${id}`);
            setData((prev) => prev.filter((data) => data.id !== id));
        } catch (err) {
            setError('Error deleting data.');
            console.error(err);
        }
    };

    return (
        <RequestsContext.Provider value={{ data, loading, error, fetchData, addData, updateData, deleteData }}>
            {children}
        </RequestsContext.Provider>
    );
};

export { RequestsProvider, RequestsContext };