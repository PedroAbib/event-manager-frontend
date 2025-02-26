import React, { useState } from 'react';
import '../../styles/data/CustomTable.css'
import SearchBar from './SearchBar';
import Modal from '../Modal';
import Profile from '../../pages/Profile';

interface CustomTableProps {
    columns: string[];
    data: Array<{ [key: string] : any}>;
}

const CustomTable: React.FC<CustomTableProps> = ({ columns, data }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [openProfileModal, setProfileModal] = useState<object | null>(null);

    const filteredData = data.filter((row) =>
        columns.some((column) =>
            row[column].toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const handleOpenProfileModal = (entity : object) => {
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
                        {columns.map((column, index) => (
                            <th key={index}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className='custom-table-data-container'>
                    {filteredData.map((row, rowIndex) => (
                        <tr
                            key={rowIndex} className='data-row'
                            onClick={() => handleOpenProfileModal(row)}
                        >
                            {columns.map((column, colIndex) => (
                                <td key={colIndex}>{row[column]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            {openProfileModal != null && (
                <Modal
                    title={Object.values(openProfileModal)[1]}
                    onClose={handleCloseProfileModal}
                >
                    <Profile entityData={openProfileModal}/>
                </Modal>
            )}
        </div>
    )
}

export default CustomTable;