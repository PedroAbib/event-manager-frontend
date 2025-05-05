import React, { useEffect } from 'react';
import { useRequests } from '../../hooks/useRequests';
import { API_BASE_URL } from '../../config';
import CustomTable, { Column } from './CustomTable';

interface ParticipantsTableProps {
    eventId: string;
}

export interface Participant {
    id: string;
    personId: string;
    personFullName: string;
    personTagName: string;
    registrationDate: string;
    isPaid: boolean;
}

const ParticipantsTable: React.FC<ParticipantsTableProps> = ({ eventId }) => {
    const eventsUrl = `${API_BASE_URL}/registrations/${eventId}`;
    
    const { participants, loading, error, fetchParticipants } = useRequests<Participant>();
    
    useEffect(() => {
        fetchParticipants(eventsUrl);
    }, []);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    
    const columns: Column<Participant>[] = [
        { key: 'personFullName', label: 'Name'},
        { key: 'personTagName', label: 'Tag Name'},
        { key: 'registrationDate', label: 'Registration Date'},
        { key: 'isPaid', label: 'Paid?'}
    ];
    
    return(
        <CustomTable<Participant>
            columns={columns}
            data={participants}
            titleKey="personFullName"
            apiUrl={eventsUrl}
        />
    )
};

export default ParticipantsTable;
