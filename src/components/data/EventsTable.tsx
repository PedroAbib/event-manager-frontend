import { useState } from 'react';
import '../../styles/data/CustomTable.css';
import SearchBar from './SearchBar';
import { Event } from '../../interfaces/Event';
// import { useNavigate } from 'react-router-dom';

interface Column {
    key: keyof Event;
    label: string;
}

interface EventsTableProps {
    data: Event[];
}

const EventsTable: React.FC<EventsTableProps> = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    // const navigate = useNavigate();

    const columns: Column[] = [
        { key: 'name', label: 'Name'},
        { key: 'date', label: 'Date'},
        { key: 'address', label: 'Address'},
        { key: 'description', label: 'Description'},
        { key: 'isCompleted', label: 'Completed?'}
    ];

    const filteredData = data.filter((row) =>
        columns.some((column) => {
            const cellValue = row[column.key];
            return cellValue ? cellValue.toString().toLowerCase().includes(searchTerm.toLowerCase()) : false;
        })
    );

    // const handleRowClick = (eventId: string) => {
    //     navigate(`/events/${eventId}`);
    // };

    return(
        <div className='custom-table-container'>
            <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />

            <table className='custom-table'>
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column.key}>{column.label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className='custom-table-data-container'>
                    {filteredData.map((row) => (
                        <tr
                            key={row.id}
                            className='data-row'
                            // onClick={() => handleRowClick(row.id)}
                        >
                            {columns.map((column) => (
                                <td key={column.key}>{row[column.key]?.toString()}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EventsTable;