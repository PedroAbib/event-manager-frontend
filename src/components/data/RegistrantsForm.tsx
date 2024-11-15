import React from "react";
import CustomForm from "./CustomForm";

interface RegistrantsFormProps {
    onCloseModalAfterSubmit: () => void;
}

const RegistrantsForm : React.FC<RegistrantsFormProps> = ({ onCloseModalAfterSubmit }) => {
    const handleFormData = (data: object) => {
        console.log(data)
        onCloseModalAfterSubmit();
    }

    const fields = [
        { name: "name", label: "Full Name"},
        { name: "tag-name", label: "Tag Name"},
        { name: "cpf", label: "CPF"},
        { name: "email", label: "Email"},
        { name: "phone-number", label: "Phone Number"},
    ];

    return(
        <div>
            <CustomForm
                onSubmitData={handleFormData}
                fields={fields}
            />
        </div>
    )
}

export default RegistrantsForm;