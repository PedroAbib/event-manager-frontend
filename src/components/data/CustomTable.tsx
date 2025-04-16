import { useState } from 'react';
import '../../styles/data/CustomTable.css';
import SearchBar from './SearchBar';
import Modal from '../Modal';
import Profile from '../../pages/Profile';

export interface Column<T> {
    key: keyof T;
    label: string;
}

interface CustomTableProps<T extends { id: string | number }> {
    columns: Column<T>[];
    data: T[];
    titleKey: keyof T;
    apiUrl: string;
}

const CustomTable = <T extends { id: string | number}>({ columns, data, titleKey, apiUrl }: CustomTableProps<T>) => {

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [openProfileModal, setProfileModal] = useState<T | null>(null);

    const filteredData = data.filter((row) =>
        columns.some((column) => {
            const cellValue = row[column.key];
            return cellValue ? cellValue.toString().toLowerCase().includes(searchTerm.toLowerCase()) : false;
        })
    );

    const handleOpenProfileModal = (entity : T) => {
        setProfileModal(entity);
    }

    const handleCloseProfileModal = () => {
        setProfileModal(null);
    }

    return(

        <div className='custom-table-container'>
            <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />

            <table className='custom-table'>
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column.key.toString()}>{column.label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className='custom-table-data-container'>
                    {filteredData.map((row) => (
                        <tr
                            key={row.id} className='data-row'
                            onClick={() => handleOpenProfileModal(row)}
                        >
                            {columns.map((column) => (
                                <td key={column.key.toString()}>{row[column.key]?.toString()}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            {openProfileModal != null && (
                <Modal
                    title={openProfileModal[titleKey] as string}
                    onClose={handleCloseProfileModal}
                >
                    <Profile entityData={openProfileModal} closeModalAfterDelete={handleCloseProfileModal} apiUrl={apiUrl}/>
                </Modal>
            )}
        </div>
    )
}

export default CustomTable;