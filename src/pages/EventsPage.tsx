import { useEffect } from "react";
import EventsTable from "../components/data/EventsTable";
import { API_BASE_URL } from "../config";
import { useRequests } from "../hooks/useRequests";
import { Event } from "../interfaces/Event";

const EventsPage: React.FC = () => {
    const eventsUrl = `${API_BASE_URL}/event`;
    const { data: data, loading, error, fetchData } = useRequests<Event>();

    useEffect(() => {
        fetchData(eventsUrl);
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return <EventsTable data={data} />;
};

export default EventsPage;