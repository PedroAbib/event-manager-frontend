import React from "react";
import CustomForm from "./CustomForm";



const RegistrantsForm : React.FC = () => {

    const fields = [
        { name: "name", label: "Full Name", type: "text" },
        { name: "tag-name", label: "Tag Name", type: "text" },
        { name: "cpf", label: "CPF", type: "text" },
        { name: "email", label: "Email", type: "email" },
        { name: "phone-number", label: "Phone Number", type: "text" },
    ];

    return(
        <div>
            <CustomForm
                fields={fields}
            />
        </div>
    )
}

export default RegistrantsForm;