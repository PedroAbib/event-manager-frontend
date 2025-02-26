import React, { useEffect, useState } from "react";
import CustomTable from "../components/data/CustomTable";
import { useRegistrants } from "../hooks/useRegistrants";

const RegistrantsPage: React.FC = () => {
    const { registrants, loading, error } = useRegistrants();

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