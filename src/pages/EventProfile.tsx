import { useEffect } from "react";
import { Event } from "../interfaces/Event";
import { useRequests } from "../hooks/useRequests";
import { API_BASE_URL } from "../config";
import Profile from "./Profile";
import ParticipantsTable from "../components/data/ParticipantsTable";

interface EventProfileProps {
    id: string;
}

export const EventProfile: React.FC<EventProfileProps> = ({ id }) => {
    const eventUrl = `${API_BASE_URL}/event`;
    const { data: event, loading, error, fetchData } = useRequests<Event>();

    useEffect(() => {
        fetchData(`${eventUrl}/${id}`);
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!event) return <p>Event not found</p>;

    return (
        <div>
            <h2>Event Profile</h2>
            
            
            <ParticipantsTable 
                eventId={id}
            />
        </div>
    );
};
