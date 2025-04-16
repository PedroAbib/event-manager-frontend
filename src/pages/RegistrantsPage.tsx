import React, { useEffect } from "react";
import CustomTable, { Column } from "../components/data/CustomTable";
import { Registrant } from "../interfaces/Registrant";
import { useRequests } from "../hooks/useRequests";
import { API_BASE_URL } from "../config";

const RegistrantsPage: React.FC = () => {

    const registrantsUrl = `${API_BASE_URL}/person`;

    const { data: data, loading, error, fetchData } = useRequests<Registrant>();

    useEffect(() => {
        fetchData(registrantsUrl);
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    const columns: Column<Registrant>[] = [
        { key: 'fullName', label: 'Name'},
        { key: 'cpf', label: 'CPF'},
        { key: 'tagName', label: 'Tag Name'},
        { key: 'email', label: 'Email'},
        { key: 'postalCode', label: 'Postal Code'}
    ]
    
    return(
        <CustomTable<Registrant>
            columns={columns}
            data={data}
            titleKey="fullName"
            apiUrl={registrantsUrl}
        />
    )
}

export default RegistrantsPage;