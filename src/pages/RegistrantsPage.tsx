import React, { useEffect, useState } from "react";
import CustomTable from "../components/data/CustomTable";
import useFetchRegistrants from "../hooks/useFetchRegistrants";

const RegistrantsPage: React.FC = () => {
    const { registrants, loading, error } = useFetchRegistrants();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    
    return(
        <CustomTable
            columns={['fullName', 'cpf', 'email', 'phoneNumber', 'address', 'postalCode']}
            data={registrants}
        />
    )
}

export default RegistrantsPage;