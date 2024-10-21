import React, { useState } from 'react';
import '../../styles/data/CustomTable.css'
import SearchBar from './SearchBar';

interface CustomTableProps {
    columns: string[];
    data: Array<{ [key: string] : any}>;
}

const CustomTable: React.FC<CustomTableProps> = ({ columns, data }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const filteredData = data.filter((row) =>
        columns.some((column) =>
            row[column].toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

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
                        <tr key={rowIndex} className='data-row'>
                            {columns.map((column, colIndex) => (
                                <td key={colIndex}>{row[column]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CustomTable;