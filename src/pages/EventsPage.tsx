import { useEffect } from "react";
import CustomTable, { Column } from "../components/data/CustomTable";
import { API_BASE_URL } from "../config";
import { useRequests } from "../hooks/useRequests";
import { Event } from "../interfaces/Event";


const EventsPage : React.FC = () => {

    const eventsUrl = `${API_BASE_URL}/event`;

    const { data: data, loading, error, fetchData } = useRequests<Event>();

    useEffect(() => {
        fetchData(eventsUrl);
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    const columns: Column<Event>[] = [
        { key: 'name', label: 'Name'},
        { key: 'date', label: 'Date'},
        { key: 'address', label: 'Address'},
        { key: 'description', label: 'Description'},
        { key: 'isCompleted', label: 'Completed?'}
    ]

    return(
        <CustomTable<Event>
            columns={columns}
            data={data}
            titleKey="name"
            apiUrl={eventsUrl}
        />
    )
}

export default EventsPage;