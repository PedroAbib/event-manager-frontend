import React from "react";
import CustomForm, { Field } from "./CustomForm";
import { Registrant } from "../../interfaces/Registrant";
import { useRequests } from "../../hooks/useRequests";
import { API_BASE_URL } from "../../config";

interface RegistrantsFormProps {
    onCloseModalAfterSubmit: () => void;
}

const RegistrantsForm : React.FC<RegistrantsFormProps> = ({ onCloseModalAfterSubmit }) => {
    
    const registrantsUrl = `${API_BASE_URL}/person`;

    const { addData } = useRequests<Registrant>();

    const handleFormData = (data: Registrant) => {
        addData(registrantsUrl, data);

        onCloseModalAfterSubmit();
    }

    const fields: Field<Registrant>[] = [
        { name: "fullName", label: "Full Name", type: "text", validation: { required: "Name is required", minLength: { value: 3, message: "Name must be at least 3 characters long" } } },
        { name: "tagName", label: "Tag Name", type: "text"},
        // { name: "workField", label: "Work Field", type: ""}, Later I'll implement a selection for this Input
        { name: "cpf", label: "CPF", type: "cpf", validation: { required: "CPF is required", minLength: { value: 11, message: "CPF must be at least 11 characters long" } } },
        { name: "email", label: "Email", type: "email", validation: { required: "Email is required" } },
        { name: "phoneNumber", label: "Phone Number", type: "phone", validation: { required: "Phone number is required", minLength: { value: 11, message: "Phone number must be at least 11 characters long" } } },
        { name: "address", label: "Address", type: "text"},
        { name: "postalCode", label: "Postal Code", type: "text"}
    ];
    
    return(
        <div>
            <CustomForm<Registrant>
                onSubmitData={handleFormData}
                fields={fields}
            />
        </div>
    )
}

export default RegistrantsForm;